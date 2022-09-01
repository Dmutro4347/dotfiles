"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mersenne = void 0;
class Mersenne {
    getName() {
        return 'mersenne';
    }
    getMethods() {
        // does not support `seed` and 'seed_array` because they take argument
        return ['rand'];
    }
}
exports.Mersenne = Mersenne;
//# sourceMappingURL=mersenne.js.map