"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._globPatternToRegExp = void 0;
const config_1 = require("./config");
/** Converts a glob pattern to a RegExp pattern. */
function _globPatternToRegExp(pattern, options) {
    // Unlike glob-to-regexp package, this one:
    // - makes directory separators universal and optional (/ or \ turns into [\\\/]) 
    const rules = [
        // Path separators
        [/\\|\//g, '[\\\/]'],
        // Special override: glob star followed by a path separator makes the
        // path separator optional, because for example the glob pattern **/.ext should match file.ext (no path separator)
        [/\*\*\[\\\/\]/g, '.*[\\\/]?'],
        // Escape dots
        [/\./g, '\\.'],
        // glob wildcard, * or **
        [/\*{1,2}/g, '.*'],
    ];
    for (const rule of rules) {
        const [find, replace] = rule;
        pattern = pattern.replace(find, replace);
    }
    return new RegExp(`^${pattern}$`, config_1.getOrDefault(options, 'flags', 'gi'));
}
exports._globPatternToRegExp = _globPatternToRegExp;
//# sourceMappingURL=glob.js.map