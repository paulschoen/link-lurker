import { Message } from "discord.js";
import { processMessage, handleCreateMessage } from "./messages";

const TIKTOK_VIDEO_URL = "https://tiktok.com/t/ZTNTB1FcR/";
const MODIFIED_TIKTOK_VIDEO_URL = "https://tnktok.com/t/ZTNTB1FcR/";

const MESSAGE = `Hello, check out this link: ${TIKTOK_VIDEO_URL}`;
const MODIFIED_MESSAGE = `Hello, check out this link: ${MODIFIED_TIKTOK_VIDEO_URL}`;

const baseMessage: Message = {
  author: { bot: true },
  content: MESSAGE,
} as unknown as Message;

describe("processMessage", () => {
  it("should return null if the message is authored by a bot", () => {
    const message: Message = {
      author: { bot: true },
      content: MESSAGE,
    } as unknown as Message;

    const result = processMessage(message);

    expect(result).toBeNull();
  });

  it("should return null if the message content is NOT modified", () => {
    const message: Message = {
      author: { bot: false },
      content: "Hello, world!",
    } as unknown as Message;

    const result = processMessage(message);

    expect(result).toBeNull();
  });

  it("should return the modified message content if the message content is modified", () => {
    const message: Message = {
      author: { bot: false },
      content: MESSAGE,
    } as unknown as Message;

    const result = processMessage(message);

    expect(result).toBe(MODIFIED_MESSAGE);
  });
});

describe("handleCreateMessage", () => {
  it("should reply with modified message and suppress embeds if message content is modified", async () => {
    const message: Message = {
      author: { bot: false },
      content: MESSAGE,
      reply: jest.fn(),
      suppressEmbeds: jest.fn(),
    } as unknown as Message;

    await handleCreateMessage(message);

    expect(message.reply).toHaveBeenCalledWith(MODIFIED_MESSAGE);
    expect(message.suppressEmbeds).toHaveBeenCalledWith(true);
  });

  it("should NOT reply or suppress embeds if message content is NOT modified", async () => {
    const message: Message = {
      author: { bot: false },
      content: "Hello, world!",
      reply: jest.fn(),
      suppressEmbeds: jest.fn(),
    } as unknown as Message;

    await handleCreateMessage(message);

    expect(message.reply).not.toHaveBeenCalled();
    expect(message.suppressEmbeds).not.toHaveBeenCalled();
  });

  it("should NOT reply or suppress embeds if message is authored by a bot", async () => {
    const message: Message = {
      author: { bot: true },
      content: MESSAGE,
      reply: jest.fn(),
      suppressEmbeds: jest.fn(),
    } as unknown as Message;

    await handleCreateMessage(message);

    expect(message.reply).not.toHaveBeenCalled();
    expect(message.suppressEmbeds).not.toHaveBeenCalled();
  });

  it("should log an error if an error occurs during message reply", async () => {
    const message: Message = {
      author: { bot: false },
      content: MESSAGE,
      reply: jest.fn().mockRejectedValue(new Error("Failed to reply")),
      suppressEmbeds: jest.fn(),
    } as unknown as Message;

    const consoleErrorSpy = jest.spyOn(console, "error");

    await handleCreateMessage(message);

    expect(consoleErrorSpy).toHaveBeenCalledWith(new Error("Failed to reply"));
  });

  it("should NOT suppress if reply fails", async () => {
    const message: Message = {
      author: { bot: false },
      content: MESSAGE,
      reply: jest.fn().mockRejectedValue(new Error("Failed to reply")),
      suppressEmbeds: jest.fn(),
    } as unknown as Message;

    const consoleErrorSpy = jest.spyOn(console, "error");

    await handleCreateMessage(message);

    expect(consoleErrorSpy).toHaveBeenCalledWith(new Error("Failed to reply"));
    expect(message.suppressEmbeds).not.toHaveBeenCalled();
    expect(message.reply).toHaveBeenCalledWith(MODIFIED_MESSAGE);
  });
});
