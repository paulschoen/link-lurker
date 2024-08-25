"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const processMessage_1 = require("../../../utils/processMessage");
module.exports = {
    name: discord_js_1.Events.MessageCreate,
    execute(message) {
        const result = (0, processMessage_1.processMessage)(message);
        console.log(result);
        if (result) {
            message.reply(result);
        }
    },
};
//# sourceMappingURL=messageCreate.js.map