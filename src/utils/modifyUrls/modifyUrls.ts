const urlPatterns = [
  {
    regex: /((https?:\/\/)?(www\.)?instagram\.com\/(?:p|reel)\/\S*)/gi,
    replacement: "ddinstagram.com",
  },
  {
    regex: /((https:\/\/)?(www\.)?tiktok\.com\/\S*)/gi,
    replacement: "tnktok.com",
  },
  {
    regex: /((https?:\/\/)?(www\.)?(twitter|x)\.com\/\S*)/gi,
    replacement: "fxtwitter.com",
  },
  {
    regex: /((https?:\/\/)?(www\.)?reddit\.com\/\S*)/gi,
    replacement: "vxreddit.com",
  },
];

export const modifyUrls = (messageContent: string): string => {
  return urlPatterns.reduce(
    (modifiedMessage, { regex, replacement }) =>
      modifiedMessage.replace(regex, (match) => {
        const urlParts = match.split("/");
        urlParts[2] = replacement;
        return urlParts.join("/");
      }),
    messageContent
  );
};
