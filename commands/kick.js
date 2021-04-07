const { Client, MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
    console.log(message.author.username + " " + message.author + " a effectuée kick")
    message.delete()

    var embed_error_1 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Vous n'avez pas la permission de faire cela !", true)
        .addField(":flag_gb:", ":x: You don't have permission to do this !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(embed_error_1).then(m => { m.delete({ timeout: 5000 }) });
    let user = message.mentions.members.first();
    var embed_error_2 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Veuillez mentionner un utilisateur valide !", true)
        .addField(":flag_gb:", ":x: Please mention a valid user !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!user) return message.channel.send(embed_error_2).then(m => { m.delete({ timeout: 5000 }) });
    var embed_error_3 = new MessageEmbed()
        .setTitle("Error !")
        .addField(":flag_fr:", ":x: Veuillez mentionner un utilisateur valide !", true)
        .addField(":flag_gb:", ":x: Please mention a valid user !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (message.member.roles.highest.comparePositionTo(message.member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send(embed_error_3).then(m => { m.delete({ timeout: 5000 }) });
    let reason = args.slice(1).join(" ");
    var embed_error_4 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Veuillez indiquer une raison !", true)
        .addField(":flag_gb:", ":x: Please indicate a reason !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!reason) return message.channel.send(embed_error_4).then(m => { m.delete({ timeout: 5000 }) });
    var embed_error_5 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Cet utilisateur ne peut pas être kick !", true)
        .addField(":flag_gb:", ":x: This user cannot be kick !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!user.kickable) return message.channel.send(embed_error_5).then(m => { m.delete({ timeout: 5000 }) });
   var kick = new MessageEmbed()
        .setTitle("Kick Done !")
        .addField("🇫🇷", " Vous avez été kick du serveur par " + message.author.username + " pour la raison: " + reason + " !", true)
        .addField(":flag_gb:", " You have been kicked from the server by " + message.author.username + " for the reason: " + reason + " !", true)
        .setColor("0x0200fd")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    user.send(kick).catch(() => {})
    console.log(message.author.username + " " + message.author + " est en train de kick " + user.user.username + " ! [!i! PATIENTER !i!]")
    function kickUser() {
        user.kick({ reason })
        var kick_2 = new MessageEmbed()
            .setTitle("Kick Done !")
            .addField("🇫🇷", ":white_check_mark: " + user.user.username + " a été kick du serveur !", true)
            .addField(":flag_gb:", ":white_check_mark: " + user.user.username + "has been kicked from the server !", true)
            .setColor("0x0200fd")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setTimestamp()
        console.log(user.user.username + " a été exclu par " + message.author.username)
        message.channel.send(kick_2).then(m => { m.delete({ timeout: 7500 }) });
    }
    setTimeout(kickUser, 500)





}

module.exports.help = {
    name: "kick"
}