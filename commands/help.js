const {Client, MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) =>{  
    console.log(message.author.username + " " + message.author + " a effectuée help")
    message.delete()

    const help = new MessageEmbed()
        .setTitle("Aide 🇫🇷")
        .setDescription("Liste des commandes:")
        .addField("\u200b", "\u200b")
        .addField("se!ping", "Donne le ping du bot.", true)
        .addField("se!setprefix [nouveau prefix]", "Permet de modifier votre prefix de serveur.\n Exemple : **se!setprefix b!**", true)
        .addField("se!clear [Nombre de messages à supprimer]", "Permet de nettoyer entre 2 et 60 messages en une fois.\n Exemple : **se!clear 40**", true)
        .addField("\u200b", "\u200b")
        .addField("se!ban [@user] [raison]", "Permet de bannir un joueur de votre serveur discord.\n Exemple : **se!ban @baduser raid**", true)
        .addField("se!kick [@user] [raison]", "Permet d'éjecter un joueur de votre serveur discord.\n Exemple : **se!kick @baduser Ne respecte pas les règles**", true)
        .addField("\u200b", "\u200b")
        .addField("se!invite", "Permet d'inviter le bot sur votre serveur discord.", true)
        .addField("se!say", "Permet d'écrire le message que vous souhaitez avec un embed.\n Exemple : **se!say [le texte que vous souhaitez]**", true)
        .setColor("0x0200fd")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setThumbnail(message.member.user.displayAvatarURL({
            format: "png",
            dynamic: true
        }))
        .setTimestamp()
        message.author.send(help)

        const help_2 = new MessageEmbed()
        .setTitle("Help :flag_gb:")
        .setDescription("List of commands:")
        .addField("\u200b", "\u200b")
        .addField("se!ping", "Give the bot ping.", true)
        .addField("se!setprefix [new prefix]", "Setup a new prefix on your server.\n Example: **se!setprefix b!**", true)
        .addField("se!clear [number of messages to cleanup]", "Cleanup between 2 and 60 messages at once.\n Example : **se!clear 40**", true)
        .addField("\u200b", "\u200b")
        .addField("se!ban [@user] [reason]", "Used to ban a player on your discord server.\n Example : **se!ban @baduser raid**", true)
        .addField("se!kick [@user] [reason]", "Used to eject a player on your discord server.\n Example : **se!kick @baduser Rulebreaks**", true)
        .addField("\u200b", "\u200b")
        .addField("se!invite", "Used to add the bot on your discord server.", true)
        .addField("se!say", "Used to write the message you want with an embed.\n Example : **se!say [Text you want]**", true)
        .setColor("0x0200fd")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setThumbnail(message.member.user.displayAvatarURL({
            format: "png",
            dynamic: true
        }))
        .setTimestamp()
        message.author.send(help_2)

        const info = new MessageEmbed()
        .setTitle("Help Done")
        .addField("🇫🇷", "La liste des commandes vous a été envoyée en MP !")
        .addField(":flag_gb:", "Commands sended by PM!")
        .setColor("0x0200fd")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
        message.channel.send(info).then (m => {m.delete({timeout: 5000})});

};





module.exports.help = {
    name: "help"
};