const { Client, MessageEmbed } = require('discord.js')
const fs = require("fs");
const { userInfo } = require('os');

module.exports.run = async (client, message, args) => {
    console.log(message.author.username + " " + message.author + " a effectuée ban")
    message.delete()

    var embed_error_1 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Vous n'avez pas la permission de faire cela !", true)
        .addField(":flag_gb:", ":x: You don't have permission to do this !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(embed_error_1).then(m => { m.delete({ timeout: 5000 }) });
    let user = message.mentions.members.first();
    var embed_error_2 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Cet utilisateur est déjà bannie !", true)
        .addField(":flag_gb:", ":x: This user cannot be ban !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (userInfo.ban) return message.channel.send(embed_error_2).then(m => { m.delete({ timeout: 5000 }) });
    var embed_error_3 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Veuillez mentionner un utilisateur valide !", true)
        .addField(":flag_gb:", ":x: Please mention a valid user !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!user) return message.channel.send(embed_error_3).then(m => { m.delete({ timeout: 5000 }) });
    var embed_error_4 = new MessageEmbed()
        .setTitle("Error !")
        .addField(":flag_fr:", ":x: Veuillez mentionner un utilisateur valide !", true)
        .addField(":flag_gb:", ":x: Please mention a valid user !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (message.member.roles.highest.comparePositionTo(message.member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send(embed_error_4).then(m => { m.delete({ timeout: 5000 }) });
    let reason = args.slice(1).join(" ");
    var embed_error_5 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Veuillez indiquer une raison !", true)
        .addField(":flag_gb:", ":x: Please indicate a reason !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!reason) return message.channel.send(embed_error_5).then(m => { m.delete({ timeout: 5000 }) });
    var embed_error_6 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Cet utilisateur ne peut pas être banni !", true)
        .addField(":flag_gb:", ":x: This user cannot be ban !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!user.kickable) return message.channel.send(embed_error_6).then(m => { m.delete({ timeout: 5000 }) });
    var ban = new MessageEmbed()
        .setTitle("Ban Done !")
        .addField("🇫🇷", " Vous avez été banni du serveur par " + message.author.username + " pour la raison " + reason + " !", true)
        .addField(":flag_gb:", " You have been kicked from the server by " + message.author.username + " for the reason " + reason + " !", true)
        .setColor("0x0200fd")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    user.send(ban).catch(() => { })
    console.log(message.author.username + " " + message.author + " est en train de bannir " + user.user.username + " ! [!i! PATIENTER !i!]")
    function banUser() {
        user.ban({ reason })
        fs.writeFile("./Ban.json", JSON.stringify(user.user.username + " " + user.id + " a été bannie du serveur " + message.guild.name + Date()), err => {
            if (err) console.log(err);
        })
        var ban_2 = new MessageEmbed()
            .setTitle("Ban Done !")
            .addField("🇫🇷", ":white_check_mark: " + user.user.username + " a été banni du serveur !", true)
            .addField(":flag_gb:", ":white_check_mark: " + user.user.username + "has been banned from the server !", true)
            .setColor("0x0200fd")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setTimestamp()
        console.log(user.user.username + " a été banni par " + message.author.username)
        message.channel.send(ban_2).then(m => { m.delete({ timeout: 7500 }) });
    }
    setTimeout(banUser, 500)





}

module.exports.help = {
    name: "ban"
}