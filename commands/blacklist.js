const { count } = require('console');
const { MessageEmbed } = require('discord.js');
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    console.log(message.author.username + " " + message.author + " a effectuée blacklist")


    if (message.author.id !== "424932058822082561") return
    message.delete()
    let user = message.mentions.members.first();
    console.log("étape 1 : à la permission de blacklist !")

    var embed_error_1 = new MessageEmbed()
        .setTitle("Error !")
        .addField("🇫🇷", ":x: Veuillez mentionner une ID valide !", true)
        .addField(":flag_gb:", ":x: Please mention a valid ID !", true)
        .setColor("0x860000")
        .setTimestamp()
    client.users.fetch(args[0], true, true).catch(() => { return message.channel.send(embed_error_1).then(m => { m.delete({ timeout: 5000 }) }); })
    console.log("étape 2 : id valide")
    //fs.readFile("./Blacklist.json", (err) =>{
    //   if(err) console.log(err);
    //});


    fs.readFile("./Blacklist.json", (err) => {
        if (err) console.log(err);

        var args0 = args.first.filter(f => f.split(".").pop() === "js");
        if (args0.length <= 0) {
            console.log("Aucune id trouvée !")
            return;
        }
        args0.forEach((f, i) => {
            var textGet = require("./Blacklist.json" + f);
            console.log("[INFO] - Id d'utilisateur blacklist " + f + " récupéré avec succès !")
            client.commands.set(textGet.help.name, textGet)
        });
    });


    fs.writeFile("./Blacklist.json", JSON.stringify(args + " a été blacklist du serveur " + message.guild.name + Date()), err => {
        if (err) console.log(err);
    })
    console.log("étape 3 : L'utilisateur à bien été inscrit à la blacklist !")
}

module.exports.help = {
    name: "blacklist"
}
