"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const font_awesome_1 = require("../font-awesome");
exports.default = () => {
    const rootPath = path.dirname(path.dirname(__dirname));
    const fa4Icons = require(path.join(rootPath, 'data/fontawesome-4/raw-icons'));
    const faFilenameCharcodeMap = fs.readFileSync(path.join(rootPath, 'data/fontawesome-4/svg-filename-charcode-map.txt'), 'utf8')
        .split('\r\n')
        .map(o => o.split('\t'));
    const unicodeFilenameMap = {};
    for (const mapEntry of faFilenameCharcodeMap) {
        unicodeFilenameMap[mapEntry[1]] = fs.readFileSync(path.join(rootPath, `data/fontawesome-4/svg/${mapEntry[0]}.svg`), 'utf8');
    }
    const viewBoxPattern = /viewBox="(\d+) (\d+) (\d+) (\d+)"/;
    const svgEnd = `"/></svg>`;
    const startOfPath = `<path d="`;
    const v4Icons = {};
    for (const icon of fa4Icons) {
        const svgData = unicodeFilenameMap[icon.unicode];
        const match = viewBoxPattern.exec(svgData);
        const pathStart = svgData.indexOf(startOfPath) + startOfPath.length;
        v4Icons[icon.id] = {
            unicode: icon.unicode,
            label: icon.name,
            changes: [icon.created].map(o => {
                const change = o.toString();
                return change.length === 1 ? `${change}.0` : change;
            }),
            ligatures: [],
            search: {
                terms: icon.filter,
            },
            styles: [font_awesome_1.IconStyle.v4],
            svg: {
                [font_awesome_1.IconStyle.v4]: {
                    raw: svgData,
                    width: parseInt(match[4]),
                    height: parseInt(match[3]),
                    viewBox: [match[1].toString(), match[2].toString(), match[3].toString(), match[4].toString()],
                    last_modified: 1477267200,
                    path: svgData.substring(pathStart, svgData.length - svgEnd.length),
                },
            },
        };
    }
    fs.writeFileSync(path.join(rootPath, 'data/fontawesome-4/icons.json'), JSON.stringify(v4Icons, null, 4));
};
//# sourceMappingURL=v4-icons-generator.js.map