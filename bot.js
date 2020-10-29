require("dotenv").config();
const _ = require("lodash");
const { default: Telegraf } = require("telegraf");
const commands = require("./utils/commands");

const bot = new Telegraf(process.env.BOT_TOKEN);

/* start command */
bot.start((ctx) =>
  ctx.reply(
    "Hello! I am Acaztron the bot. Nice to meet you!\nUse /help command to know things that I can do for you"
  )
);

/* help command */
bot.help((ctx) =>
  ctx.reply(
    "/start - Initialize Bot\n/help - Get Help\n/code - Github Repository Of Bot\n/bored - Get Random Activity To Do\n/bitcoin - Get Current Bitcoin Rate"
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
  price.then((e) => ctx.reply("Bitcoin Rate: " + e.bpi.INR.rate_float));
});

/* launch bot */
bot.launch();
