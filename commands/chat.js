const { Client, MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
    console.log(message.author.username + " " + message.author + " a effectuée chat")
    message.delete()

    const embed_error_1 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Vous n'avez pas la permission de faire cela !", true)
        .addField(":flag_gb:", ":x: You don't have permission to do this !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed_error_1).then(m => { m.delete({ timeout: 5000 }) });
    const chat = new MessageEmbed()
        .setTitle("Chat Done !")
        .addField("🇫🇷", ":white_check_mark: chat bloqué !", true)
        .addField(":flag_gb:", ":white_check_mark: Chat lock!", true)
        .setColor("0x0200fd")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
        console.log(message.author.username + " " + message.author + " a bloqué le chat du server " + message.guild.name + " !")
    message.channel.send(chat)
    
 
    
}

module.exports.help = {
    name: "chat"
}