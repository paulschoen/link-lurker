import { Message } from "discord.js";
import { modifyUrls } from "../modifyUrls";

export const processMessage = (message: Message): string | null => {
  if (message.author.bot) return null;

  const modifiedMessage = modifyUrls(message.content);

  if (modifiedMessage !== message.content) {
    return modifiedMessage;
  }

  return null;
};
