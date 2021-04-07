const { Client, MessageEmbed } = require('discord.js')
const fs = require("fs");
//const config = require("");

module.exports.run = async (client, message, args) => {
    console.log(message.author.username + " " + message.author + " a effectuée setprefix")
    message.delete()

    const embed_error_1 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Vous n'avez pas la permission de faire cela !", true)
        .addField(":flag_gb:", ":x: You don't have permission to do this !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (message.author.id != message.guild.ownerID) return message.channel.send(embed_error_1).then(m => { m.delete({ timeout: 5000 }) });
        const embed_error_2 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: syntaxe: se!setprefix <prefix désiré ici> !", true)
        .addField(":flag_gb:", ":x: syntaxe: se!setprefix <desired prefix here> !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!args[0] || args[0 == "help"]) return message.channel.send(embed_error_2).then(m => { m.delete({ timeout: 5000 }) });
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    prefixes[message.guild.id] = {
        prefixes: args[0]
    }
    console.log(message.author.username + " " + message.author + " est en train de changer le prefix (Nouveau prefix : " + args + ") ! Commande effectuée dans le channel " + message.channel.name + " sur le serveur " + message.guild.name + " !")
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), err => {
        if (err) console.log(err);
    })
    const prefix = new MessageEmbed()
        .setTitle("Setprefix Done !")
        .addField("🇫🇷", ":white_check_mark: Le prefix a bien été changé pour [**" + args + "**] !", true)
        .addField(":flag_gb:", ":white_check_mark: The prefix has been to [**" + args + "**]  !", true)
        .setColor("0x0200fd")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
        console.log(message.author.username + " " + message.author + " a changé le prefix du server " + message.guild.name + " (Nouveaux prefix : " + args + " ) !")
    message.channel.send(prefix)
};

module.exports.help = {
    name: "setprefix"
};