"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const transformation_1 = require("./transformation");
class CompletionProvider {
    constructor(documentation, config) {
        this.config = config;
        /** List of generated completion items. */
        this.completionItems = [];
        for (const icon of documentation.icons) {
            this.completionItems.push(documentation.asCompletionItem(icon));
        }
        this.triggerWord = this.config.triggerWord;
        // Support for alphanumeric suffix, including dashes. This ensures that the completion menu
        // provides items even after entering additional dashes, e.g.
        // fa-user (initial completion list triggered), followed by -circle (secondary completion list trigger.)
        // unfortunately the completion list is further filtered by VS Code's word separator setting, which seems to limit
        // the filter word to the closest dash, meaning the the secondary completion item list is filtered by
        // circle, not fa-user-cirlce.
        // https://github.com/Janne252/vscode-fontawesome-auto-complete/issues/6
        this.triggerWordRegexp = new RegExp(`${this.config.triggerWord}[a-zA-Z0-9-]*`);
    }
    isAutoClearTriggerWordEnabledFor(document) {
        // converts a disable pattern into "enabled" rule
        for (const rule of this.config.disableTriggerWordAutoClearRules) {
            if (rule.matches(document)) {
                return false;
            }
        }
        // No pattern matched - auto clear is enabled
        return true;
    }
    renderInsertText(template, completionItem) {
        if (!template) {
            return completionItem.insertText;
        }
        return template.render(completionItem.icon);
    }
    provideCompletionItems(document, position, token, context) {
        const exactRange = document.getWordRangeAtPosition(position, this.triggerWordRegexp);
        const fullRange = document.getWordRangeAtPosition(position);
        if (exactRange == null && fullRange == null) {
            return [];
        }
        const range = (exactRange || fullRange);
        const word = document.getText(range);
        const isAutoClearTriggerWordEnabled = this.isAutoClearTriggerWordEnabledFor(document);
        const insertionTemplate = transformation_1.InsertionTemplate.resolve(document, this.config.insertionTemplates);
        const additionalTextEdits = [];
        const result = [];
        // VS Code natively removes the "trigger word" when an autocompletion item is selected for some languages, for example HTML.
        // Other languages can't do it, we'll have to remove it manually
        // If the document language id is not present in the list of languages that do it automatically, do it manually
        if (isAutoClearTriggerWordEnabled) {
            additionalTextEdits.push(vscode_1.TextEdit.replace(range, ''));
        }
        if (word.startsWith(this.triggerWord)) {
            for (let i = 0; i < this.completionItems.length; i++) {
                const completionItem = this.completionItems[i];
                result.push({
                    ...completionItem,
                    additionalTextEdits,
                    insertText: this.renderInsertText(insertionTemplate, completionItem)
                });
            }
        }
        return result;
    }
}
exports.default = CompletionProvider;
//# sourceMappingURL=completion-provider.js.map