"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
class System {
    getName() {
        return 'system';
    }
    getMethods() {
        return [
            'fileName',
            'commonFileName',
            'mimeType',
            'commonFileType',
            'commonFileExt',
            'fileType',
            'fileExt',
            'directoryPath',
            'filePath',
            'semver',
        ];
    }
}
exports.System = System;
//# sourceMappingURL=system.js.map