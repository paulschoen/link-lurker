import { modifyUrls } from "./modifyUrls";

const arrayOfTestUrls = [
  "https://m.tiktok.com/h5/share/usr/6641141594707361797.html",
  "https://m.tiktok.com/v/6749869095467945218.html",
  "https://www.tiktok.com/embed/6567659045795758085",
  "https://www.tiktok.com/share/user/6567659045795758085",
  "https://www.tiktok.com/trending?shareId=6744531482393545985",
  "https://www.tiktok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@burntpizza89/video/is_copy_url=1&is_from_webapp=v1&item_id=7067695578729221378",
  "https://vm.tiktok.com/ZMF6rgvXY/",
  "https://TikTok.com/ZMF6rgvXY/",
];

const arrayOfInstagramUrls = [
  "https://www.instagram.com/p/CHeENTUjysv/",
  "https://www.instagram.com/reel/CHeENTUjysv",
  "http://www.instagram.com/p/CHeENTUjysv/",
  "https://instagram.com/p/CHeENTUjysv",
  "http://instagram.com/p/CHeENTUjysv",
  "www.instagram.com/p/CHeENTUjysv/",
  "instagram.com/p/CHeENTUjysv",
  "https://www.Instagram.com/p/CHeENTUjysv/",
];

// I hate having to use "x" as a placeholder for the "twitter" part of the URL and I bet the x software developers hate it too.
const arrayOfXrUrls = [
  "https://www.x.com/this-is-a-test",
  "http://www.x.com/this-is-a-test",
  "www.x.com/this-is-a-test",
  "x.com/this-is-a-test",
  "https://www.X.com/this-is-a-test",
];

const arrayOfTwitterUrls = [
  "https://www.twitter.com/this-is-a-test",
  "http://www.twitter.com/this-is-a-test",
  "www.twitter.com/this-is-a-test",
  "twitter.com/this-is-a-test",
  "https://www.Twitter.com/this-is-a-test",
];

const arrayOfRedditUrls = [
  "https://www.reddit.com/r/this-is-a-test",
  "http://www.reddit.com/r/this-is-a-test",
  "www.reddit.com/r/this-is-a-test",
  "reddit.com/r/this-is-a-test",
  "https://www.Reddit.com/r/this-is-a-test",
];

describe("modifyUrls", () => {
  it("should modify TikTok URLs", () => {
    arrayOfTestUrls.forEach((url) => {
      console.log(modifyUrls(url));
      expect(modifyUrls(url)).toMatch(/tnktok\.com/);
    });
  });

  it("should modify Instagram URLs", () => {
    arrayOfInstagramUrls.forEach((url) => {
      console.log(modifyUrls(url));
      expect(modifyUrls(url)).toMatch(/ddinstagram\.com/);
    });
  });

  it("should modify Twitter URLs", () => {
    arrayOfXrUrls.forEach((url) => {
      console.log(modifyUrls(url));
      expect(modifyUrls(url)).toMatch(/fxtwitter\.com/);
    });
  });

  it("should modify X URLs", () => {
    arrayOfTwitterUrls.forEach((url) => {
      console.log(modifyUrls(url));
      expect(modifyUrls(url)).toMatch(/fxtwitter\.com/);
    });
  });

  it("should modify Reddit URLs", () => {
    arrayOfRedditUrls.forEach((url) => {
      console.log(modifyUrls(url));
      expect(modifyUrls(url)).toMatch(/vxreddit\.com/);
    });
  });

  it("should not modify URLs that don't match the patterns", () => {
    const url = "https://www.google.com";
    expect(modifyUrls(url)).toBe(url);
  });

  it("should not modify messages that don't contain URLs, but ge golly I love tiktok twitter x and instagram", () => {
    const message = "This is a test message.";
    expect(modifyUrls(message)).toBe(message);
  });

  it("should modify messages that contain URLs", () => {
    const message =
      "Check out this TikTok: https://www.tiktok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1";
    const modifiedMessage =
      "Check out this TikTok: https://tnktok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1";
    expect(modifyUrls(message)).toBe(modifiedMessage);
  });

  it("should modify messages that contain multiple URLs", () => {
    const message =
      "Check out this TikTok: https://www.tiktok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1 and this Instagram: https://www.instagram.com/p/CHeENTUjysv/";
    const modifiedMessage =
      "Check out this TikTok: https://tnktok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1 and this Instagram: https://ddinstagram.com/p/CHeENTUjysv/";
    expect(modifyUrls(message)).toBe(modifiedMessage);
  });
});
