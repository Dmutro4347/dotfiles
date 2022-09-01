"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const glob_1 = require("./glob");
describe('glob helpers', () => {
    it('globPatternToRegExp', () => {
        assert.strictEqual(glob_1._globPatternToRegExp('').source, '^$');
        assert.strictEqual(glob_1._globPatternToRegExp('*').source, '^.*$');
        assert.strictEqual(glob_1._globPatternToRegExp('**').source, '^.*$');
        assert.strictEqual(glob_1._globPatternToRegExp('/').source, '^[\\\/]$');
        assert.strictEqual(glob_1._globPatternToRegExp('\\').source, '^[\\\/]$');
        assert.strictEqual(glob_1._globPatternToRegExp('\\/').source, '^[\\\/][\\\/]$');
        assert.strictEqual(glob_1._globPatternToRegExp('**/*.html').source, '^.*[\\\/]?.*\\.html$');
        assert.strictEqual(glob_1._globPatternToRegExp('**/*.html').test('file://c:\\foo/bar.html'), true);
        assert.strictEqual(glob_1._globPatternToRegExp('**/*.html').test('file:/home/user/dev/foo/bar.html'), true);
        assert.strictEqual(glob_1._globPatternToRegExp('**/*.html').test('foo/bar.html'), true);
        // Custom FileSystemProvider could in theory have files without a single path separator?
        // **/ should become .*[\\\/]? as a special case; path separator optional
        assert.strictEqual(glob_1._globPatternToRegExp('**/*.html').test('bar.html'), true);
        assert.strictEqual(glob_1._globPatternToRegExp('**/*.html').test('foo/bar.htm'), false);
        // Escape dots in glob patterns
        // https://github.com/Janne252/vscode-fontawesome-auto-complete/issues/19 
        assert.strictEqual(glob_1._globPatternToRegExp('**/*.html').test('foo/bar.cshtml'), false);
    });
});
//# sourceMappingURL=glob.spec.js.map