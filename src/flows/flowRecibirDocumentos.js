const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const { downloadMediaMessage } = require("@adiwajshing/baileys");
const { writeFileSync } = require("fs");

function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

const flowRecibirDocumentos = addKeyword(EVENTS.DOCUMENT)
  .addAction(async (ctx) => {
    const nanoid = await import("nanoid");
    const uid = nanoid.nanoid(5);
    const file = ctx.message.documentMessage.title;
    const tipoFormato = getFileExtension(file);
    const buffer = await downloadMediaMessage(ctx, "buffer");
    const mediaName = ctx.from + "_" + uid + "." + tipoFormato;
    writeFileSync(`./doctos/${mediaName}`, buffer);
  })
  .addAnswer(`Para ir al menú principal puedes escribir *#*`);

module.exports = flowRecibirDocumentos;
