"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCharacterCase = void 0;
/**
 * Sets the character case in the specified index.
 */
function setCharacterCase(str, index, characterCase) {
    let char = '';
    if (index < str.length) {
        switch (characterCase) {
            case 'upper':
                char = str[index].toUpperCase();
                break;
            case 'lower':
                char = str[index].toLowerCase();
                break;
        }
    }
    return `${char}${str.substring(index + 1)}`;
}
exports.setCharacterCase = setCharacterCase;
//# sourceMappingURL=string.js.map