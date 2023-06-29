const express = require("express");
const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const JsonFileAdapter = require("@bot-whatsapp/database/json");

const flowPrincipal = require("./src/flows/flowPrincipal");
const flowSendMessage = require("./src/flows/flowSendMessage");
const flowRecibirImagen = require("./src/flows/flowRecibirImagen");
const flowRecibirMsgVoz = require("./src/flows/flowRecibirMsgVoz");
const flowRecibirDocumentos = require("./src/flows/flowRecibirDocumentos");
const flowRecibirLocalizacion = require("./src/flows/flowRecibirLocalizacion");
const flowCrearGrupo = require("./src/flows/flowCrearGrupo");

const app = express();
const main = async () => {
  const adapterDB = new JsonFileAdapter();
  const adapterFlow = createFlow([
    flowPrincipal,
    flowSendMessage,
    flowRecibirImagen,
    flowRecibirMsgVoz,
    flowRecibirDocumentos,
    flowRecibirLocalizacion,
    flowCrearGrupo,
  ]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  /**
   * Enviar mensaje con metodos propios del provider del bot
   */
  app.post("/send-message-bot", async (req, res) => {
    await adapterProvider.sendText("52XXXXXXXXX@c.us", "Mensaje desde API");
    res.send({ data: "enviado!" });
  });
  
  const PORT = 4000;
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

  QRPortalWeb();
};

main();
