const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const { downloadMediaMessage } = require("@adiwajshing/baileys");
const { writeFileSync } = require("fs");

const FlowRecibirMsgVoz = addKeyword(EVENTS.VOICE_NOTE)
  .addAction(async (ctx) => {
    const nanoid = await import("nanoid");
    const uid = nanoid.nanoid(5);
    const buffer = await downloadMediaMessage(ctx, "buffer");
    const mediaName = ctx.from + "_" + uid + ".mp3";
    writeFileSync(`./voz/${mediaName}`, buffer);
  })
  .addAnswer(`Para ir al menú principal puedes escribir *#*`);

module.exports = FlowRecibirMsgVoz;
