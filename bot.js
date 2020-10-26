require("dotenv").config();
const { default: Telegraf } = require("telegraf");
const commands = require("./utils/commands");

const bot = new Telegraf(process.env.BOT_TOKEN);

/* start command */
bot.start((ctx) => ctx.reply("Hello! My name is Acaztron. Nice to meet you!"));

/* help command */
bot.help((ctx) => ctx.reply("Currently I don't have much to do"));

/* ---- Custom Commands ---- */

/* launch bot */
bot.launch();
