const { addKeyword } = require("@bot-whatsapp/bot");

const flowCrearGrupo = addKeyword("GRUPO", { sensitive: true }).addAction(
  async (ctx, { provider, flowDynamic }) => {
    await flowDynamic("Hola, creando grupo");
    //numero que se unira al grupo
    let num = "5219994349339@s.whatsapp.net";
    const nanoid = await import("nanoid");
    const ID_GROUP = nanoid.nanoid(5);
    const refProvider = await provider.getInstance();
    await refProvider.groupCreate(`Support (${ID_GROUP})`, [
      `${ctx.from}@s.whatsapp.net`,
      num,
    ]);    
    await refProvider.sendMessage(ID_GROUP, { text: "hello" });
    await flowDynamic("Grupo creado, puedes revisar tus chats...");
  }
);

module.exports = flowCrearGrupo;