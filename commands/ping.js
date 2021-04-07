const {Client, MessageEmbed } = require('discord.js')
const fs =require("fs");

module.exports.run = async (client, message, args) =>{
    console.log(message.author.username + " " + message.author + " a effectuée ping")
    message.delete()

    function ping_1(){

        const ping_2 = new MessageEmbed()
        .setTitle("Ping Done!")
        .addField("🇫🇷", ":white_check_mark: Temps de latence avec le serveur : " +  client.ws.ping + " mls", true)
        .addField(":flag_gb:", ":white_check_mark: Latency with the server: " + client.ws.ping +  " mls", true)
        .setColor("0x0200fd")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
        message.channel.send(ping_2).then (m => {m.delete({timeout: 5000})}).then;
        
        
    }   
    setTimeout(ping_1, 500)       

};

module.exports.help = {
    name: "ping"
};
