# Link Lurker Discord Bot

Link Lurker is a Discord bot designed to monitor messages in a server, identify specific URLs, and modify them according to predefined rules.

[Link to Add Link Lurker to Discord Servers](https://discord.com/oauth2/authorize?client_id=1277099038218653748&permissions=92160&integration_type=0&scope=bot)

## Features

- Monitors all messages in every channel for URLs.
- Modifies URLs containing `instagram.com`, `x.com` `twitter.com`, `reddit.com` `tumblr.com` and `tiktok.com`:
  - Adds `dd` to the front of Instagram links (e.g., `www.instagram.com/whatever` becomes `www.ddinstagram.com/whatever`).
    - Created by [Wikidepia](https://github.com/Wikidepia/InstaFix)
  - Replaces `tiktok` with `tnk` in TikTok links (e.g., `www.tiktok.com/whatever` becomes `www.tnktok.com/whatever`).
    - Created By [okdargy](https://github.com/okdargy/fxTikTok)
  - Replace `twitter` or `x` with `fx` in Twitter links (e.g., `www.twitter.com/whatever` becomes `www.fxtwitter.com/whatever`).
    - Created By [FixTweet](https://github.com/FixTweet/FxTwitter)
  - Replaces `reddit.com` with `vxreddit.com` in Reddit links (e.g., `www.reddit.com/whatever` becomes `www.vxreddit.com/whatever`).
    - Created by [dylanpdx](https://github.com/dylanpdx/vxReddit)
  - Replace `tumblr.com` with `tpmblr.com` in Tumblr links (e.g., `www.tumblr.com/whatever` becomes `www.tpmblr.com/whatever`).
    - Created By [knuxify](https://github.com/knuxify/fxtumblr)

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/)
- A [Discord Bot](https://discord.com/developers/applications) token

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/link-lurker-bot.git
   cd link-lurker-bot
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory and add your Discord bot token:**

   ```bash
   DISCORD_TOKEN=your-discord-bot-token
   ```

4. **Run the bot locally:**
   ```bash
   npm start
   ```

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.

## Support

If you have any questions or issues, feel free to open an issue on GitHub or contact me directly.

---

Happy Coding! 🎉
