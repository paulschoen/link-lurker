"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = {
    name: discord_js_1.Events.ClientReady,
    once: true,
    execute(client) {
        if (!client.user) {
            console.error("Client user not found");
            return;
        }
        console.log(`Logged in as ${client.user.tag}!`);
    },
};
//# sourceMappingURL=ready.js.map