import { Client, Events } from "discord.js";

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client: Client) {
    if (!client.user) {
      console.error("Client user not found");
      return;
    }
    console.log(`Logged in as ${client.user.tag}!`);
  },
};
