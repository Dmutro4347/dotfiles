"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const _1 = require(".");
const transformation_1 = require("./transformation");
const fullClassNamePattern = new RegExp(`(${_1.availablePrefixes.join('|')})( ${_1.prefix}[\\w-]+)`, 'i');
class HoverProvider {
    constructor(documentation, config) {
        this.config = config;
        this.renderedIconInsertionMap = {};
        this.renderedInsertionTemplateMaps = {};
        this.documentation = documentation;
        for (const icon of documentation.icons) {
            this.renderedIconInsertionMap[icon.fullCssName] = icon;
        }
    }
    provideHover(document, position) {
        let range;
        const insertionTemplate = transformation_1.InsertionTemplate.resolve(document, this.config.insertionTemplates);
        if (insertionTemplate) {
            range = document.getWordRangeAtPosition(position, insertionTemplate.templatePattern);
        }
        else {
            range = document.getWordRangeAtPosition(position, fullClassNamePattern);
        }
        if (range == null) {
            return null;
        }
        const text = document.getText(range);
        // Lazy included insertion template support for hover
        if (insertionTemplate && !(insertionTemplate.alias in this.renderedInsertionTemplateMaps)) {
            this.renderedInsertionTemplateMaps[insertionTemplate.alias] = true;
            for (const icon of this.documentation.icons) {
                this.renderedIconInsertionMap[insertionTemplate.render(icon)] = icon;
            }
        }
        if (text in this.renderedIconInsertionMap) {
            return new vscode_1.Hover(this.renderedIconInsertionMap[text].documentation, range);
        }
    }
}
exports.default = HoverProvider;
//# sourceMappingURL=hover-provider.js.map