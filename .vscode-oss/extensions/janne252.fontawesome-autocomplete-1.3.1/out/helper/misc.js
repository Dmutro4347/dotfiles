"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notNullOrFalse = void 0;
/**
 * Returns false if the value is null. Returns the value otherwise.
 */
function notNullOrFalse(value) {
    if (value == null) {
        return false;
    }
    return value;
}
exports.notNullOrFalse = notNullOrFalse;
//# sourceMappingURL=misc.js.map