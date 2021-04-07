const { Client, MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
    console.log(message.author.username + " " + message.author + " a effectuée invite")
    message.delete()

   const invite = new MessageEmbed()
        .setTitle("Invite Done !")
        .addField("🇫🇷", ">>>>>>>>>>>>>>>>>>> :white_check_mark: Lien d'invitation du bot >>>>>>>>>>>>>>>>>>>", true)
        .addField(":flag_gb:", ">>>>>>>>>>>>>>>>>>> :white_check_mark: Invite link of the bot >>>>>>>>>>>>>>>>>>>", true)
        .addField("**__Lien__ | __Link__ : **", "** __https://discord.com/oauth2/authorize?client_id=669993979055570981&scope=bot&permissions=8__ **", true)
        .setColor("0x0200fd")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
    message.channel.send(invite).then(m => { m.delete({ timeout: 10000 }) });
}

module.exports.help = {
    name: "invite"
}