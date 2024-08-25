"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processMessage = void 0;
const modifyUrls_1 = require("../modifyUrls");
const processMessage = (message) => {
    if (message.author.bot)
        return null;
    const modifiedMessage = (0, modifyUrls_1.modifyUrls)(message.content);
    if (modifiedMessage !== message.content) {
        return modifiedMessage;
    }
    return null;
};
exports.processMessage = processMessage;
//# sourceMappingURL=processMessage.js.map