"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const _1 = require(".");
const transformation_1 = require("./transformation");
const patternMatchingTests = [
    // loose patterns
    ['**/*.html', 'index.html', true],
    ['**/*.html', 'foo/bar/index.html', true],
    ['**/*.html', 'foo/bar/index.html.bak', false],
    ['**/*.vue', 'foo/bar/index.html', false],
    ['**/*.*', 'foo/bar/index.html', true],
    ['**/*.*', 'foo/bar/index.html.bak', true],
    // strict pattern
    ['some/path/prefix*.html', 'some/path/prefix-file.html', true],
    ['some/path/prefix*.html', 'some/path-2/prefix-file.html', false],
    // Glob star
    ['**/some/path/*.html', 'foo/bar/some/path/file.html', true],
    ['**/some/path/*.html', 'foo/bar/some/path-2/prefix-file.html', false],
    // https://github.com/Janne252/vscode-fontawesome-auto-complete/issues/19
    ['**/*.html', 'foo/bar/index.cshtml', false],
    ['**/*.cshtml', 'foo/bar/index.html', false],
];
describe('transformation', () => {
    it('InsertionTemplate.matches', () => {
        for (const [pattern, fileName, isMatch] of patternMatchingTests) {
            assert.strictEqual(new transformation_1.InsertionTemplate(pattern, '').matches({ fileName }), isMatch, `InsertionTemplate: "${pattern}" matches "${fileName}": ${isMatch}`);
        }
    });
    it('InsertionTemplate.format', () => {
        const icon = {
            name: 'sort-numeric-up-alt',
            prefix: _1.prefix,
            style: _1.iconStylePrefix[_1.IconStyle.solid],
            styleName: _1.IconStyle.solid,
        };
        assert.strictEqual(new transformation_1.InsertionTemplate('', `{prefix} {name} {style} {styleName}`).render(icon), `fa- sort-numeric-up-alt fas solid`);
        assert.strictEqual(new transformation_1.InsertionTemplate('', `{name:${transformation_1.InsertionTemplateTokenFormat.CamelCase}}`).render(icon), `sortNumericUpAlt`);
        assert.strictEqual(new transformation_1.InsertionTemplate('', `{name:${transformation_1.InsertionTemplateTokenFormat.KebabCase}}`).render(icon), `sort-numeric-up-alt`);
        assert.strictEqual(new transformation_1.InsertionTemplate('', `{name:${transformation_1.InsertionTemplateTokenFormat.PascalCase}}`).render(icon), `SortNumericUpAlt`);
        assert.strictEqual(new transformation_1.InsertionTemplate('', `{name:${transformation_1.InsertionTemplateTokenFormat.SnakeCase}}`).render(icon), `sort_numeric_up_alt`);
        assert.strictEqual(new transformation_1.InsertionTemplate('', `{name:foobar}`).render(icon), `sort-numeric-up-alt`);
        assert.strictEqual(new transformation_1.InsertionTemplate('', `import {fa{name:pascalCase}} from '@fortawesome/free-{styleName}-svg-icons';`).render(icon), `import {faSortNumericUpAlt} from '@fortawesome/free-solid-svg-icons';`);
    });
    it('AutoClearTriggerWordRule.matches', () => {
        for (const [pattern, fileName, isMatch] of patternMatchingTests) {
            assert.strictEqual(new transformation_1.AutoClearTriggerWordRule(pattern).matches({ fileName }), isMatch, `AutoClearTriggerWordRule: "${pattern}" matches "${fileName}": ${isMatch}`);
        }
    });
});
//# sourceMappingURL=transformation.spec.js.map