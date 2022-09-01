"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const vscode = require("vscode");
const vscode_1 = require("vscode");
const fontawesome_1 = require("./fontawesome");
class FontAwesomeClassNameCompletionItemProvider {
    constructor() {
        /** List of generated completion items. */
        this.completionItems = [];
        for (let name in icons) {
            let icon = icons[name];
            for (let style of icon.styles) {
                let prefix = fontawesome_1.IconStylePrefix[style];
                let imagePath = path.join(__dirname, '../fontawesome/advanced-options/raw-svg', style, `${name}.svg`);
                let onlineUrl = `https://fontawesome.com/icons/${name}?style=${style}`;
                let displayOnlineUrl = onlineUrl.replace('https://', '');
                let classDeclaration = `${prefix} fa-${name}`;
                this.completionItems.push({
                    label: classDeclaration,
                    insertText: classDeclaration,
                    detail: `${icon.label} [Free] [${style}]`,
                    documentation: new vscode.MarkdownString([
                        `![](${imagePath} | width=48 height=48)`,
                        '',
                        `|                        |                                     |`,
                        `|------------------------|-------------------------------------|`,
                        `| Unicode                | \`${icon.unicode}\`                 |`,
                        `| Full name              | \`${classDeclaration}\`             |`,
                        `| Reference &nbsp; &nbsp;| [${displayOnlineUrl}](${onlineUrl}) |`,
                        '',
                        fontAwesomeTitle,
                    ].join('\n')),
                    kind: vscode_1.CompletionItemKind.Reference
                });
            }
        }
    }
    provideCompletionItems() {
        return this.completionItems;
    }
}
exports.default = FontAwesomeClassNameCompletionItemProvider;
//# sourceMappingURL=completion-item-provider.js.map