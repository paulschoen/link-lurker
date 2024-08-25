import { modifyUrls, removeSubDomain, containsEvilUrl } from "./modifyUrls";

const arrayOfTestUrls = [
  "https://m.tiktok.com/h5/share/usr/6641141594707361797.html",
  "https://www.m.tiktok.com/v/6749869095467945218.html",
  "https://www.tiktok.com/embed/6567659045795758085",
  "https://www.tiktok.com/share/user/6567659045795758085",
  "https://www.tiktok.com/trending?shareId=6744531482393545985",
  "https://www.tiktok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@burntpizza89/video/is_copy_url=1&is_from_webapp=v1&item_id=7067695578729221378",
  "https://vm.tiktok.com/ZMF6rgvXY/",
  "https://TikTok.com/ZMF6rgvXY/",
  "https://m.tiktok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1",
];

const arrayOfInstagramUrls = [
  "https://www.instagram.com/p/CHeENTUjysv/",
  "https://www.instagram.com/reel/CHeENTUjysv",
  "http://www.instagram.com/p/CHeENTUjysv/",
  "https://instagram.com/p/CHeENTUjysv",
  "http://instagram.com/p/CHeENTUjysv",
  "https://www.Instagram.com/p/CHeENTUjysv/",
];

// I hate having to use "x" as a placeholder for the "twitter" part of the URL and I bet the x software developers hate it too.
const arrayOfXrUrls = [
  "https://www.x.com/this-is-a-test",
  "http://www.x.com/this-is-a-test",
  "https://www.X.com/this-is-a-test",
];

const arrayOfTwitterUrls = [
  "https://www.twitter.com/this-is-a-test",
  "http://www.twitter.com/this-is-a-test",
  "https://www.Twitter.com/this-is-a-test",
];

const arrayOfRedditUrls = [
  "https://www.reddit.com/r/this-is-a-test",
  "http://www.reddit.com/r/this-is-a-test",
  "https://www.Reddit.com/r/this-is-a-test",
];

const arrayOfTumblrUrls = [
  "https://www.tumblr.com/this-is-a-test",
  "http://www.tumblr.com/this-is-a-test",
  "https://www.Tumblr.com/this-is-a-test",
];

describe("modifyUrls", () => {
  it("should modify TikTok URLs", () => {
    arrayOfTestUrls.forEach((url) => {
      expect(modifyUrls(url)).toMatch(/tnktok\.com/);
    });
  });

  it("should modify Instagram URLs", () => {
    arrayOfInstagramUrls.forEach((url) => {
      expect(modifyUrls(url)).toMatch(/ddinstagram\.com/);
    });
  });

  it("should modify Twitter URLs", () => {
    arrayOfXrUrls.forEach((url) => {
      expect(modifyUrls(url)).toMatch(/fxtwitter\.com/);
    });
  });

  it("should modify X URLs", () => {
    arrayOfTwitterUrls.forEach((url) => {
      expect(modifyUrls(url)).toMatch(/fxtwitter\.com/);
    });
  });

  it("should modify Reddit URLs", () => {
    arrayOfRedditUrls.forEach((url) => {
      expect(modifyUrls(url)).toMatch(/vxreddit\.com/);
    });
  });

  it("should modify Tumblr URLs", () => {
    arrayOfTumblrUrls.forEach((url) => {
      expect(modifyUrls(url)).toMatch(/tpmblr\.com/);
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
      "Check out this TikTok: https://www.tnktok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1";
    expect(modifyUrls(message)).toBe(modifiedMessage);
  });

  it("should modify messages that contain multiple URLs", () => {
    const message =
      "Check out this TikTok: https://www.tiktok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1 and this Instagram: https://www.instagram.com/p/CHeENTUjysv/";
    const modifiedMessage =
      "Check out this TikTok: https://www.tnktok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1 and this Instagram: https://www.ddinstagram.com/p/CHeENTUjysv/";
    expect(modifyUrls(message)).toBe(modifiedMessage);
  });

  it("should remove subdomains of any length and correctly modify URLs", () => {
    const testUrlsWithVariousSubdomains = [
      "https://m.tiktok.com/h5/share/usr/6641141594707361797.html",
      "https://subdomain.instagram.com/p/CHeENTUjysv/",
      "https://long.sub.domain.twitter.com/this-is-a-test",
      "https://www.subdomain.x.com/this-is-a-test",
      "https://some.reddit.com/r/this-is-a-test",
    ];

    const expectedModifiedUrls = [
      "https://tnktok.com/h5/share/usr/6641141594707361797.html",
      "https://ddinstagram.com/p/CHeENTUjysv/",
      "https://fxtwitter.com/this-is-a-test",
      "https://fxtwitter.com/this-is-a-test",
      "https://vxreddit.com/r/this-is-a-test",
    ];

    testUrlsWithVariousSubdomains.forEach((url, index) => {
      const modifiedUrl = modifyUrls(url);
      console.log(modifiedUrl);
      expect(modifiedUrl).toBe(expectedModifiedUrls[index]);
      expect(modifiedUrl).not.toMatch(/^[a-z0-9]+(\.[a-z0-9]+)+\./);
    });
  });
});

describe("removeSubDomain", () => {
  it("should remove subdomain from the URL", () => {
    const url = "https://m.tiktok.com/h5/share/usr/6641141594707361797.html";
    const expectedUrl =
      "https://tiktok.com/h5/share/usr/6641141594707361797.html";
    expect(removeSubDomain(url)).toBe(expectedUrl);
  });

  it("should not modify URL without subdomain", () => {
    const url = "https://tiktok.com/h5/share/usr/6641141594707361797.html";
    expect(removeSubDomain(url)).toBe(url);
  });

  it("should not modify URL without subdomain and with path only", () => {
    const url = "/h5/share/usr/6641141594707361797.html";
    expect(removeSubDomain(url)).toBe(url);
  });
});

describe("containsEvilUrl", () => {
  it("should return true if the message contains an evil URL", () => {
    const message = "Check out this TikTok: https://www.tiktok.com/";
    expect(containsEvilUrl(message)).toBe(true);
  });

  it("should return false if the message does not contain an evil URL", () => {
    const message = "This is a test message.";
    expect(containsEvilUrl(message)).toBe(false);
  });

  it("should return true if the message contains multiple evil URLs", () => {
    const message =
      "Check out this TikTok: https://www.tiktok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1 and this Instagram: https://www.instagram.com/p/CHeENTUjysv/";
    expect(containsEvilUrl(message)).toBe(true);
  });

  it("should return true if the message contains an evil URL with different casing", () => {
    const message =
      "Check out this TikTok: https://www.TikTok.com/@burntpizza89/video/7067695578729221378?is_copy_url=1&is_from_webapp=v1";
    expect(containsEvilUrl(message)).toBe(true);
  });
});
