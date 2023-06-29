const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const { downloadMediaMessage } = require("@adiwajshing/baileys");
const { writeFile } = require("fs");

const flowRecibirLocalizacion = addKeyword(EVENTS.LOCATION)
  .addAction(async (ctx) => {
    const coordenadas = [
      {
        latitud: ctx.message.locationMessage.degreesLatitude,
        longitud: ctx.message.locationMessage.degreesLongitude,
      },
    ];

    const contenido = JSON.stringify(coordenadas, null, 2);
    const nanoid = await import("nanoid");
    const uid = nanoid.nanoid(5);
    const mediaName = ctx.from + "_" + uid + ".json";
    const rutaArchivo = `./locations/${mediaName}`;
    writeFile(rutaArchivo, contenido, (err) => {
      if (err) {
        console.error("Error al crear el archivo:", err);
      } else {
        console.log(`Archivo "${rutaArchivo}" creado exitosamente.`);
      }
    });
  })
  .addAnswer(`Para ir al menú principal puedes escribir *#*`);

module.exports = flowRecibirLocalizacion;
