const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const webAppUrl = encodeURI(process.env.WEB_APP_URL_DEV);
const token = process.env.BOT_TOKEN_DEV;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
   
    if (text === "/start") {
        await bot.sendMessage(chatId, "Нажмите, чтобы открыть приложение Дашборда.\nВыполните команду /start для новой кнопки", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Перейти", web_app: { url: webAppUrl } }],
                ],
            },
        });
    }
});
