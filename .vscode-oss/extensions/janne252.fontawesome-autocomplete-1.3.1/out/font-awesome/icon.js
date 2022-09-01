"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const _1 = require(".");
/** Represents an icon that can be used as the source of Hover or Completion item. */
class Icon {
    constructor(documentation, name, style, entry, categories) {
        this.style = _1.iconStylePrefix[style];
        this.styleName = style;
        this.name = name;
        this.prefix = _1.prefix;
        const unicode = entry.unicode;
        const svgPath = entry.svg[style].path;
        const viewbox = entry.svg[style].viewBox;
        let onlineUrl = '';
        this.fullCssName = `${this.style} ${this.prefix}${name}`;
        // Version migrations
        switch (documentation.config.version) {
            case _1.FontAwesomeVersion.v4:
                onlineUrl = `${documentation.metadata.iconBaseUrl}${name}/`;
                break;
            case _1.FontAwesomeVersion.V5:
            case _1.FontAwesomeVersion.V6:
                onlineUrl = `${documentation.metadata.iconBaseUrl}${name}?style=${style}`;
                break;
        }
        const previewSvg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="${viewbox.join(' ')}"
            style="background-color: ${documentation.config.previewStyle.backgroundColor};transform: scale(0.9);"
        >
            <path fill="${documentation.config.previewStyle.foregroundColor}" d="${svgPath}"/>
        </svg>
        `;
        const changes = entry.changes.map(o => `\`${o}\``).join(', ');
        const iconBase64String = this.svgXmlStringToBase64DataUri(previewSvg);
        const iconSize = {
            width: 64, height: 64,
        };
        const iconMarkdownAttributes = this.encodeSpaces(` | width=${iconSize.width} height=${iconSize.height}`);
        this.documentation = new vscode.MarkdownString([
            `![](${iconBase64String}${iconMarkdownAttributes})`,
            '',
            `| &nbsp;                       |                                                                               |`,
            `|------------------------------|---------------------------------------------------------                      |`,
            `| **Icon**                     | [${entry.label}](${onlineUrl})    &nbsp; &nbsp; \`free\` \`${style}\` |`,
            `| **Categories**               | ${categories.map(o => `\`${o.label}\``).join(', ') || '&nbsp;_N/A_'}          |`,
            `| **Unicode**                  | \`${unicode}\`                                                                |`,
            `| **Changes**                  | ${changes}                                                                    |`,
            '',
            `[${documentation.title}](${documentation.metadata.url})`,
        ].join('\n'));
    }
    svgXmlStringToBase64DataUri(svg) {
        return 'data:image/svg+xml;utf8;base64,' + Buffer.from(svg).toString('base64');
    }
    encodeSpaces(content) {
        return content.replace(/ /g, '%20');
    }
}
exports.default = Icon;
//# sourceMappingURL=icon.js.map