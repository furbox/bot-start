const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

const flowPrincipal = addKeyword(EVENTS.WELCOME)
  .addAnswer("🙌 Hola bienvenido a este *Chatbot*")
  .addAnswer(["Hola a todos"]);

module.exports = flowPrincipal;
