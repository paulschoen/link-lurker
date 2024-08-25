import { Events, Message } from "discord.js";
import { processMessage } from "../../../utils/processMessage";

module.exports = {
  name: Events.MessageCreate,
  async execute(message: Message) {
    const result = processMessage(message);
    if (result) {
      try {
        message.suppressEmbeds(true);
      } catch (error) {
        console.error(`Error suppressing embeds: ${error}`);
      }
      message.reply(result);
    }
  },
};
