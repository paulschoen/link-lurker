import { Events, Message } from "discord.js";
import { processMessage } from "../../../utils/processMessage";

module.exports = {
  name: Events.MessageCreate,
  execute(message: Message) {
    const result = processMessage(message);
    if (result) {
      message.reply(result);
    }
  },
};
