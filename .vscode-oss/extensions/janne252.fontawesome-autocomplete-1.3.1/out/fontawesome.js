"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
/**
 * Available FontAwesome icon styles.
 * @see https://fontawesome.com/how-to-use
 */
var IconStyle;
(function (IconStyle) {
    IconStyle["solid"] = "solid";
    IconStyle["regular"] = "regular";
    IconStyle["light"] = "light";
    IconStyle["brands"] = "brands";
})(IconStyle = exports.IconStyle || (exports.IconStyle = {}));
/**
 * Available FontAwesome icon style prefixes.
 * @see https://fontawesome.com/how-to-use
 */
exports.IconStylePrefix = {
    [IconStyle.solid]: 'fas',
    [IconStyle.regular]: 'far',
    [IconStyle.light]: 'fal',
    [IconStyle.brands]: 'fab',
};
class FontAwesomeIconDocumentation {
    constructor() {
        this.icons = require('../fontawesome/advanced-options/metadata/icons');
        this.readmeLines = fs.readFileSync(path.join(__dirname, '../fontawesome/README.md'), 'utf8').split('\n');
        this.title = this.readmeLines[0].substring('# '.length);
    }
}
exports.FontAwesomeIconDocumentation = FontAwesomeIconDocumentation;
//# sourceMappingURL=fontawesome.js.map