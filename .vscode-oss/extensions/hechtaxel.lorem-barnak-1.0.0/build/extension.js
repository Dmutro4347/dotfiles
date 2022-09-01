"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const generateLine_1 = require("./utils/generateLine");
const generateMultiplesParagraphs_1 = require("./utils/generateMultiplesParagraphs");
const generateParagraph_1 = require("./utils/generateParagraph");
function activate(context) {
    const cmds = [
        vscode_1.commands.registerCommand("lorem-barnak.line", generateLine_1.generateLine),
        vscode_1.commands.registerCommand("lorem-barnak.paragraph", generateParagraph_1.generateParagraph),
        vscode_1.commands.registerCommand("lorem-barnak.multipleParagraphs", generateMultiplesParagraphs_1.generateMultipleParagraphs),
    ];
    cmds.forEach((command) => context.subscriptions.push(command));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
