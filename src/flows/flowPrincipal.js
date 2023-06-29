const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

const flowPrincipal = addKeyword(EVENTS.WELCOME)
  .addAction(async (ctx) => {
    console.log(ctx.key.remoteJid);
  })
  .addAnswer("🙌 Hola bienvenido a este *Chatbot*")
  .addAnswer(["Hola a todos"]);

module.exports = flowPrincipal;
