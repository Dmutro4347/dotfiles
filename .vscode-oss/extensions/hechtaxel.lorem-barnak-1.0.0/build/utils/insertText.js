"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertText = void 0;
const lorembarnak_1 = require("lorembarnak");
const vscode_1 = require("vscode");
const randomInt_1 = require("./randomInt");
function insertText(count, nbrParagraphs = 1, newLine) {
    const c = count ?? randomInt_1.randomInt(4) + 6;
    const editor = vscode_1.window.activeTextEditor;
    if (!editor) {
        vscode_1.window.showErrorMessage("There is no active text editor.");
        return;
    }
    editor.edit((edit) => editor.selections.forEach((selection) => {
        edit.delete(selection);
        if (nbrParagraphs !== undefined && nbrParagraphs > 0) {
            for (let i = 0; i < nbrParagraphs; i++) {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                newLine
                    ? edit.insert(selection.start, `${lorembarnak_1.getText(c)}\n`)
                    : edit.insert(selection.start, lorembarnak_1.getText(c));
            }
        }
        else {
            edit.insert(selection.start, lorembarnak_1.getText(c));
        }
    }));
}
exports.insertText = insertText;
