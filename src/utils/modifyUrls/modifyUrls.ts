export const modifyUrls = (messageContent: string): string => {
  const instagramRegex =
    /((?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/([^/?#&]+)).*/g;
  const tiktokRegex =
    /^.*https:\/\/(?:m|www|vm)?\.?tiktok\.com\/((?:.*\b(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+))|\w+)\/?.*$/g;

  let modifiedMessage = messageContent;

  modifiedMessage = modifiedMessage.replace(instagramRegex, (match) =>
    match.replace(/instagram\.com/, "ddinstagram.com")
  );

  modifiedMessage = modifiedMessage.replace(tiktokRegex, (match) =>
    match.replace(/tiktok\.com/, "tnktok.com")
  );

  return modifiedMessage;
};
