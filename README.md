#### 📩 Installation

- Make sure [Node.js](https://nodejs.org/en/download) and [node-gyp](https://github.com/nodejs/node-gyp) is installed in your system.
- Download this repository or clone: `git clone https://github.com/ritimbot/topgg-listener/`
- Install modules with NPM: `npm install`
- Fill `.env`
- Set your server url in `https://top.gg/bot/<YOUR_BOT_ID>/webhooks` (example: `http://3.66.77.9/dblwebhook` or `http://topgg.ritim.xyz/dblwebhook`)
- Start the project `npm test` or if you installed [pm2](https://www.npmjs.com/package/pm2) `pm2 start index.js`

### 🧰 .env
- You can get your DISCORD_WEBHOOK_ID and DISCORD_WEBHOOK_TOKEN from text channel (example: https://i.imgur.com/IVmThOU.png)
- Create authorization from `https://top.gg/bot/<YOUR_BOT_ID>/webhooks` for `TOPGG_WEBHOOK_PASS`
- Get your top.gg api token from `https://top.gg/bot/<YOUR_BOT_ID>/webhooks` for `TOPGG_API_TOKEN`

### ⚠️ Static IP required
