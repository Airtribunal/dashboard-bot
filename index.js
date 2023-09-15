const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const webAppUrl = encodeURI(process.env.WEB_APP_URL_PROD);
const token = process.env.BOT_TOKEN_PROD;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "/start") {
        await bot.sendMessage(chatId, "Нажмите, чтобы открыть приложение Дашборда.", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Перейти", web_app: { url: webAppUrl } }],
                ],
            },
        });
    }
});
