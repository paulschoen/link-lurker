const urlPatterns = [
  {
    regex: /instagram\.com/gi,
    replacement: "ddinstagram.com",
  },
  {
    regex: /tiktok\.com/gi,
    replacement: "tnktok.com",
  },
  {
    regex: /(twitter|x)\.com/gi,
    replacement: "fxtwitter.com",
  },
  {
    regex: /reddit\.com/gi,
    replacement: "vxreddit.com",
  },
  {
    regex: /tumblr\.com/gi,
    replacement: "tpmblr.com",
  },
];

/**
 * Checks if the given message content contains a valid URL.
 *
 * @param messageContent - The content of the message to check.
 * @returns A boolean indicating whether the message content contains a valid URL.
 */
export const containsValidUrl = (messageContent: string): boolean => {
  const matchedUrl = messageContent.match(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
  );

  return !!matchedUrl;
};

/**
 * Removes everything before the domain in a given URL.
 * * match[1] - The protocol (http:// or https://).
 * * match[2] - The domain.
 * * match[3] - The path.
 *
 * @param url - The URL to modify.
 * @returns The modified URL with everything before the domain removed.
 */
export const removeSubDomain = (url: string): string => {
  const regex =
    /^(https?:\/\/)?(?:www\.)?(?:[a-z0-9-]+\.)*([a-z0-9-]+\.[a-z]{2,})(\/.*)?$/i;
  const match = url.match(regex);

  if (match && !match[1]) {
    console.warn(`URL is missing protocol: ${url}`);
    return url;
  }

  if (match && match[2]) {
    return `${match[1] || ""}${match[2]}${match[3] || ""}`;
  }

  console.warn(`URL did not match expected pattern: ${url}`);
  return url;
};
/**
 * Checks if the given message content contains any evil URLs.
 * @param messageContent - The content of the message to check.
 * @returns A boolean indicating whether the message contains evil URLs.
 */
export const containsEvilUrl = (messageContent: string): boolean =>
  urlPatterns.some(({ regex }) => regex.test(messageContent));

/**
 * Modifies URLs in the given message content.
 * If the message content does not contain any evil URLs, the original content is returned.
 * If the message content does not contain a valid URL, the original content is returned.
 * Otherwise, the subdomain is removed from the message content and the URL patterns are replaced with their corresponding replacements.
 *
 * @param messageContent - The content of the message to modify.
 * @returns The modified message content with URLs modified.
 */
export const modifyUrls = (messageContent: string): string => {
  if (!containsEvilUrl(messageContent) || !containsValidUrl(messageContent)) {
    return messageContent;
  }

  const removedSubDomain = removeSubDomain(messageContent);

  return urlPatterns.reduce((modifiedMessage, { regex, replacement }) => {
    return modifiedMessage.replace(regex, replacement);
  }, removedSubDomain);
};
