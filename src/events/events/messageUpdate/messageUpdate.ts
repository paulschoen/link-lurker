import { Events, Message } from "discord.js";
import { containsEvilUrl } from "../../../utils/modifyUrls/modifyUrls";

// Sometimes the embed links are not added on the message creation, so we need to check for them on message update
module.exports = {
  name: Events.MessageUpdate,
  execute(_: Message, newMessage: Message) {
    const isEvilUrl = containsEvilUrl(newMessage.content);
    if (isEvilUrl && newMessage.embeds.length) {
      try {
        newMessage.suppressEmbeds(true);
      } catch (error) {
        console.error(`Error suppressing embeds: ${error}`);
      }
    }
  },
};
