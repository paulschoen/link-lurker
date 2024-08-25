import { Events, Message } from "discord.js";
import { processMessage } from "../../../utils/processMessage";

module.exports = {
  name: Events.MessageCreate,
  async execute(message: Message) {
    const result = await processMessage(message);
    if (result) {
      message.reply(result);
    }
  },
};
