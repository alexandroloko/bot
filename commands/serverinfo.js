const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Informação do server")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nome do server", message.guild.name)
    .addField("Server criado em:", message.guild.createdAt)
    .addField("Você entrou em:", message.member.joinedAt)
    .addField("Total de membros:", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
