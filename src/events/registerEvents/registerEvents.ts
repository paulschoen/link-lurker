import { Client } from "discord.js";
import fs from "fs";
import path from "path";

export function registerEvents(client: Client, eventDir: string) {
  const eventFiles = fs
    .readdirSync(path.resolve(__dirname, eventDir))
    .filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

  for (const file of eventFiles) {
    const event = require(path.resolve(__dirname, eventDir, file));
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}
