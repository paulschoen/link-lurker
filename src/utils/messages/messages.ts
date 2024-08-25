import { Message } from "discord.js";
import { modifyUrls } from "../modifyUrls";

/**
 * Processes a message and returns a modified version of the message content.
 * If the message is authored by a bot, returns null.
 * If the message content is not modified, returns null.
 *
 * @param message - The message to be processed.
 * @returns The modified message content or null.
 */
export const processMessage = (message: Message): string | null => {
  if (message.author.bot) return null;

  const modifiedMessage = modifyUrls(message.content);

  return modifiedMessage !== message.content ? modifiedMessage : null;
};

/**
 * Handles the creation of a message.
 *
 * @param message - The message to be processed.
 * @returns A promise that resolves to void.
 */
export const handleCreateMessage = async (message: Message): Promise<void> => {
  const result = processMessage(message);
  if (result) {
    try {
      await message.reply(result);
      await message.suppressEmbeds(true);
    } catch (error) {
      console.error(error);
    }
  }
};
