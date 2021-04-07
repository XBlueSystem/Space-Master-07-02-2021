const { Client, MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
    console.log(message.author.username + " " + message.author + " a effectuée clear")

    const embed_error_1 = new MessageEmbed()
        .setTitle("Error !")
        .addField(":flag_fr:", ":x: Vous n'avez pas la permission de faire cela !", true)
        .addField(":flag_gb:", ":x: You don't have permission to do this !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embed_error_1).then(m => { m.delete({ timeout: 5000 }) });
    const embed_error_2 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Veuillez indiquer un nombre de messages à supprimer !", true)
        .addField(":flag_gb:", ":x: Please indicate a number of messages to delete !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    let count = parseInt(args[0])
    if (!count) return message.channel.send(embed_error_2).then(m => { m.delete({ timeout: 5000 }) });
    const embed_error_3 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Veuillez indiquer un nombre valide !", true)
        .addField(":flag_gb:", ":x: Please enter a valid number !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (isNaN(count)) return message.channel.send(embed_error_3).then(m => { m.delete({ timeout: 5000 }) });
    const embed_error_4 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Veuillez indiquer un nombre entre 2 et 60 !", true)
        .addField(":flag_gb:", ":x: Please enter a number between 2 and 60 !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (count < 2 || count > 60) return message.channel.send(embed_error_4).then(m => { m.delete({ timeout: 5000 }) });
    console.log(message.author.username + " " + message.author + " est en train de clear " + count + " messages dans le channel " + message.channel.name + " sur le serveur " + message.guild.name + " ! [!i! PATIENTER !i!]")
    function clear() {

        message.channel.bulkDelete(count + 1, true)
        const clear = new MessageEmbed()
            .setTitle("Clear Done !")
            .addField("🇫🇷", ":white_check_mark: " + count + " messages ont été suprimés !", true)
            .addField(":flag_gb:", ":white_check_mark: " + count + " messages have been deleted !", true)
            .setColor("0x0200fd")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setTimestamp()
        console.log(message.author.username + " " + message.author + " a clear " + count + " messages !")
        message.channel.send(clear).then(m => { m.delete({ timeout: 7500 }) });
    }
    setTimeout(clear, 500);



}

module.exports.help = {
    name: "clear"
}
