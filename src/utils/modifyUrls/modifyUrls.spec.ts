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
];

const arrayOfInstagramUrls = [
  "https://www.instagram.com/p/CHeENTUjysv/",
  "https://www.instagram.com/reel/CHeENTUjysv",
  "http://www.instagram.com/p/CHeENTUjysv/",
  "https://instagram.com/p/CHeENTUjysv",
  "http://instagram.com/p/CHeENTUjysv",
  "www.instagram.com/p/CHeENTUjysv/",
  "instagram.com/p/CHeENTUjysv",
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
});
