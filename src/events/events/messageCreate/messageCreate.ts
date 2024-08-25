import { Events, Message } from "discord.js";
import { handleCreateMessage } from "../../../utils/messages";

module.exports = {
  name: Events.MessageCreate,
  execute(message: Message) {
    handleCreateMessage(message);
  },
};
