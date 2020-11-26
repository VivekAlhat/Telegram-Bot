require("dotenv").config();
const _ = require("lodash");
const http = require("http");
const { default: Telegraf } = require("telegraf");
const commands = require("./utils/commands");

const bot = new Telegraf(process.env.BOT_TOKEN);
const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.write("Bot started. Please check Telegram");
    res.end();
  })
  .listen(port);

/* start command */
bot.start((ctx) =>
  ctx.reply(
    "Hello! I am Acaztron the bot. Nice to meet you!\n\nUse /help command to know things that I can do for you"
  )
);

/* help command */
bot.help((ctx) =>
  ctx.reply(
    "/start\v\vInitialize Bot\n/help\v\vGet Help\n/code\v\vGithub Repository Of Bot\n/bored\v\vGet Random Activity To Do\n/bitcoin\v\vGet Current Bitcoin Rate\n/fact\v\vGet Random Fact\n/usd\v\vGet USD To INR Rate"
  )
);

/* ---- Custom Commands ---- */

/* get code repo */
bot.command("code", (ctx) => ctx.reply(commands.getCodeRepository()));

/* get random activity */
bot.command("bored", (ctx) => {
  const data = commands.getRandomActivity();
  data.then((e) => ctx.reply(`You can ${_.lowerFirst(e.activity)}`));
});

/* get bitcoin price */
bot.command("bitcoin", (ctx) => {
  const price = commands.getBitcoinPrice();
  price.then((e) =>
    ctx.reply("Bitcoin Rate: " + e.bpi.INR.rate_float.toFixed(2))
  );
});

/* get random fact */
bot.command("fact", (ctx) => {
  const fact = commands.getRandomFact();
  fact.then((e) => ctx.reply(e.text)).catch((err) => console.log(err));
});

/* get USD rate */
bot.command("usd", (ctx) => {
  const usd = commands.getUSDRate();
  usd.then((e) => ctx.reply("1 USD : " + e.rates.INR.toFixed(2) + " rupees"));
});

/* launch bot */
bot.launch();
