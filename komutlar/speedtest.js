const Discord = require("discord.js");
const os = require("os");
const speedTest = require("speedtest-net");

exports.run = (client, message) => {

  
  const test = speedTest({ maxTime: 1000 });
  
  test.on((data) => {
    
    const embed = new Discord.MessageEmbed()
      .setColor("#000000")
      .setTitle("**İnternet Bilgilerin**") //cortex
      .addField(
        `:arrow_down: İndirme: **${data.speeds.download}**    :arrow_up: Yükleme: **${data.speeds.upload} **`
      )
      .addField(` :round_pushpin: Ping: **${client.ws.ping}**`)
      .addField(
        `:desktop: İnternet Sağlayıcısı: **${data.client.isp}** \n \n:file_cabinet: Host: **${data.server.host}**`
      );

    //Pudochu is here.

    message.channel.send(embed);
  });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["speedtest", "speed-test", "cortex"],
  permLevel: 0,
  kategori: "sahip",
};

exports.help = {
  name: "hız-test",
  description: "speedtest yapar",
  usage: "speedtest",
};
