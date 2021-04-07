const { Client, MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
    console.log(message.author.username + " " + message.author + " a effectuée say")
    message.delete()


    const embed_error_1 = new MessageEmbed()
        .setTitle("Error !")
        .addField(":flag_fr:", ":x: Vous n'avez pas la permission de faire cela !", true)
        .addField(":flag_gb:", ":x: You don't have permission to do this !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(embed_error_1).then(m => { m.delete({ timeout: 5000 }) });
    const embed_error_2 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: syntaxe: se!say <le message à dire ici> !", true)
        .addField(":flag_gb:", ":x: syntaxe: se!say <desired message to say here> !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (!args[0]) return message.channel.send(embed_error_2).then(m => { m.delete({ timeout: 5000 }) });
    const embed_error_3 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Veuillez mettre entre 1 et 1000 caractères !", true)
        .addField(":flag_gb:", ":x: Please put between 1 and 1000 letters !", true)
        .setColor("0x860000")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    if (args.lenght < 1 || args.lenght > 1000) return message.channel.send(embed_error_3).then(m => { m.delete({ timeout: 5000 }) });
    const say_1 = args.join(" ")


    //const color = "0x0200fd"
    const say_2 = new MessageEmbed()
        .addField((message.author.username), say_1, true)
        .setThumbnail(message.member.user.displayAvatarURL({
            format: "png",
            dynamic: true
        }))
        //.setColor(color)
        .setColor("0x0200fd")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    message.channel.send(say_2);

}

module.exports.help = {
    name: "say"
}