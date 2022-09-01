"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontAwesomeHoverItem = exports.FontAwesomeCompletionItem = void 0;
const vscode_1 = require("vscode");
const YAML = require("yaml");
const fs = require("fs");
const _1 = require("./");
const icon_1 = require("./icon");
/** Represents Font Awesome icon documentation (collection of icon entries) */
class Documentation {
    constructor(rootPath, config) {
        this.config = config;
        this.rootPath = rootPath;
        this.iconEntries = require(`${rootPath}/metadata/icons`);
        this.metadata = require(`${rootPath}/metadata/config`);
        this.title = `Font Awesome ${this.metadata.version}`;
        // Version support
        switch (this.config.version) {
            case _1.FontAwesomeVersion.v4:
                this.categories = {};
                this.shims = [];
                break;
            case _1.FontAwesomeVersion.V5:
                this.categories = YAML.parse(fs.readFileSync(`${rootPath}/metadata/categories.yml`, { encoding: 'utf8' }));
                this.shims = require(`${rootPath}/metadata/shims`);
                break;
            case _1.FontAwesomeVersion.V6:
                this.categories = {};
                this.shims = require(`${rootPath}/metadata/shims`);
                break;
        }
        this.icons = [];
        this.generateIcons();
    }
    getIconCategories(name) {
        const result = [];
        for (const categoryId in this.categories) {
            const category = this.categories[categoryId];
            if (category.icons.indexOf(name) != -1) {
                result.push(category);
            }
        }
        return result;
    }
    generateIcons() {
        for (const name in this.iconEntries) {
            const entry = this.iconEntries[name];
            const categories = this.getIconCategories(name);
            for (const style of entry.styles) {
                const icon = new icon_1.default(this, name, style, entry, categories);
                this.icons.push(icon);
            }
        }
    }
    asCompletionItem(icon) {
        return new FontAwesomeCompletionItem(icon, this.config);
    }
    asHoverItem(icon) {
        return new FontAwesomeHoverItem(icon);
    }
}
exports.default = Documentation;
class FontAwesomeCompletionItem extends vscode_1.CompletionItem {
    constructor(icon, config) {
        super(icon.fullCssName, // label
        vscode_1.CompletionItemKind.Text // kind
        );
        this.icon = icon;
        this.documentation = icon.documentation;
        if (config.enableElevatedSortPriority) {
            this.sortText = '\0';
        }
    }
    get fullCssName() {
        return this.icon.fullCssName;
    }
}
exports.FontAwesomeCompletionItem = FontAwesomeCompletionItem;
class FontAwesomeHoverItem extends vscode_1.Hover {
    constructor(icon) {
        super([icon.documentation]);
    }
}
exports.FontAwesomeHoverItem = FontAwesomeHoverItem;
//# sourceMappingURL=documentation.js.map