const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

const regex = "^1$";
const flowSendMessage = addKeyword(regex, { regex: true }).addAction(
  async (ctx, { provider }) => {
    provider.sendText("5219991101950@s.whatsapp.net", "hola");
  }
);

module.exports = flowSendMessage;
