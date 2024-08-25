import { Message } from "discord.js";
import { modifyUrls } from "../modifyUrls";

export const processMessage = async (
  message: Message
): Promise<string | null> => {
  if (message.author.bot) return null;

  const modifiedMessage = modifyUrls(message.content);

  if (modifiedMessage !== message.content) {
    try {
      await message.suppressEmbeds(true);
    } catch (error) {
      console.error("Failed to suppress embeds in message", error);
    }
    return modifiedMessage;
  }

  return null;
};
