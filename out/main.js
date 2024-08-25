"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const events_1 = require("./events");
(0, events_1.registerEvents)(client_1.client, "../events");
client_1.client
    .login(process.env.DISCORD_TOKEN)
    .then(() => {
    console.log("Logged in!!!");
})
    .catch((error) => {
    console.error("Error logging in:", error);
});
//# sourceMappingURL=main.js.map