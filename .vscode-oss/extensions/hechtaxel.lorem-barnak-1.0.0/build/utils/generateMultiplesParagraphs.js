"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMultipleParagraphs = void 0;
const vscode_1 = require("vscode");
const insertText_1 = require("./insertText");
async function generateMultipleParagraphs() {
    const items = [];
    for (let i = 1; i <= 8; i++) {
        items.push(i.toString());
    }
    const count = await vscode_1.window.showQuickPick(items, { placeHolder: "How many paragraphs?" });
    if (!count) {
        vscode_1.window.showErrorMessage("You must choose how many paragraphs to insert.");
        return;
    }
    insertText_1.insertText(10, Number.parseInt(count, 10), true);
}
exports.generateMultipleParagraphs = generateMultipleParagraphs;
