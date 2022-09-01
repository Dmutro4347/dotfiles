"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateParagraph = void 0;
const insertText_1 = require("./insertText");
const randomInt_1 = require("./randomInt");
function generateParagraph() {
    insertText_1.insertText(randomInt_1.randomInt(4) + 10);
}
exports.generateParagraph = generateParagraph;
