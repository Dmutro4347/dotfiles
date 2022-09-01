"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoClearTriggerWordRule = exports.InsertionTemplate = exports.InsertionTemplateTokenFormat = void 0;
const globPatternToRegExp = require("glob-to-regexp");
const RegexpHelpers = require("../helper/regex");
const _1 = require(".");
const string_1 = require("../helper/string");
var InsertionTemplateTokenFormat;
(function (InsertionTemplateTokenFormat) {
    /** exampleOfCamelCase */
    InsertionTemplateTokenFormat["CamelCase"] = "camelCase";
    /** example-of-kebab-case */
    InsertionTemplateTokenFormat["KebabCase"] = "kebabCase";
    /** ExampleOfPascalCase */
    InsertionTemplateTokenFormat["PascalCase"] = "pascalCase";
    /** example_of_snake_case */
    InsertionTemplateTokenFormat["SnakeCase"] = "snakeCase";
})(InsertionTemplateTokenFormat = exports.InsertionTemplateTokenFormat || (exports.InsertionTemplateTokenFormat = {}));
class InsertionTemplate {
    constructor(pattern, template) {
        this.alias = pattern;
        this.pattern = globPatternToRegExp(pattern, { globstar: true });
        this.template = template;
        this.templatePattern = new RegExp(RegexpHelpers.escape(template)
            .replace(/\\{style\\}/g, `(${_1.availablePrefixes.join('|')})`)
            .replace(/\\{styleName\\}/g, `(${_1.availableStyleNames.join('|')})`)
            .replace(/\\{prefix\\}/g, _1.prefix)
            .replace(/\\{name(:\w+)?\\}/g, '[\\w-]+'));
    }
    /**
     * Checks whether or not the insertion template is configured to be used with the document.
     * @param document
     */
    matches(document) {
        return RegexpHelpers.testUri(document.fileName, this.pattern);
    }
    /**
     * Renders an icon with the template by replacing all placeholders.
     * @param icon
     */
    render(icon) {
        return this.template
            .replace(/{style}/g, icon.style)
            .replace(/{styleName}/g, icon.styleName)
            .replace(/{prefix}/g, icon.prefix)
            .replace(/{name}/g, icon.name)
            .replace(/{name:(?<format>\w+)}/, (substring, format) => {
            return this.format(icon.name, '-', (format !== null && format !== void 0 ? format : InsertionTemplateTokenFormat.KebabCase));
        });
        ;
    }
    format(value, delimiter, format) {
        const tokens = value.split(delimiter);
        switch (format) {
            case InsertionTemplateTokenFormat.PascalCase:
                return (0, string_1.setCharacterCase)(tokens.map(token => (0, string_1.setCharacterCase)(token, 0, 'upper')).join(''), 0, 'upper');
            case InsertionTemplateTokenFormat.CamelCase:
                return (0, string_1.setCharacterCase)(tokens.map(token => (0, string_1.setCharacterCase)(token, 0, 'upper')).join(''), 0, 'lower');
            case InsertionTemplateTokenFormat.KebabCase:
                return tokens.map(token => token.toLowerCase()).join('-');
            case InsertionTemplateTokenFormat.SnakeCase:
                return tokens.map(token => token.toLowerCase()).join('_');
            default:
                return value;
        }
    }
    /**
     * Finds the first insertion template from a list that matches the document.
     * @param document
     * @param templates
     */
    static resolve(document, templates) {
        for (const template of templates) {
            if (template.matches(document)) {
                return template;
            }
        }
        return null;
    }
}
exports.InsertionTemplate = InsertionTemplate;
class AutoClearTriggerWordRule {
    constructor(pattern) {
        this.pattern = globPatternToRegExp(pattern, { globstar: true });
    }
    /**
     * Checks whether or not the insertion template is configured to be used with the document.
     * @param document
     */
    matches(document) {
        return RegexpHelpers.testUri(document.fileName, this.pattern);
    }
}
exports.AutoClearTriggerWordRule = AutoClearTriggerWordRule;
//# sourceMappingURL=transformation.js.map