const TelegramBot = require("node-telegram-bot-api");

const token = "6050687848:AAFl1zUnFaMhJ6K9ONMA60dxo-ouQjFG0xA";
// const webAppUrl = "https://cdd1-185-12-224-117.ngrok-free.app/?name=ramazan&age=17";
const webAppUrl = 'https://dashboard-frontend-tg.vercel.app/?name=Ramazan&age=17'
const bot = new TelegramBot(token, { polling: true });


bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "/start") {
        await bot.sendMessage(
            chatId,
            "Нажмите, чтобы открыть приложение",
            {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Перейти", web_app: { url: webAppUrl } }],
                    ],
                },
            }
        );
    }
});
