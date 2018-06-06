const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Informação do bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nome do bot:", bot.user.username)
    .addField("Criado por: Izael61 E Marcelloow!", );

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}