const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const { downloadMediaMessage } = require("@adiwajshing/baileys");
const { writeFileSync } = require("fs");

const flowRecibirImagen = addKeyword(EVENTS.MEDIA)
  .addAction(async (ctx) => {
    const nanoid = await import("nanoid");
    const uid = nanoid.nanoid(5);
    console.log(ctx);
    const buffer = await downloadMediaMessage(ctx, "buffer");
    const mediaName = ctx.from + "_" + uid + ".jpg";
    writeFileSync(`./media/${mediaName}`, buffer);
  })
  .addAnswer(`Para ir al menú principal puedes escribir *#*`);

module.exports = flowRecibirImagen;
