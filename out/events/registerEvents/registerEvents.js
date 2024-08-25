"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerEvents = registerEvents;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function registerEvents(client, eventDir) {
    const eventFiles = fs_1.default
        .readdirSync(path_1.default.resolve(__dirname, eventDir))
        .filter((file) => file.endsWith(".ts") || file.endsWith(".js"));
    for (const file of eventFiles) {
        const event = require(path_1.default.resolve(__dirname, eventDir, file));
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        }
        else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    }
}
//# sourceMappingURL=registerEvents.js.map