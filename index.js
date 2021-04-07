const Discord = require("discord.js");
const fs = require("fs");
const config = require("./storage/config.json")
const client = new Discord.Client();
const Sequelize = require('sequelize');

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) {
        console.log("Aucun fichier de commande !")
        return;
    }
    jsFiles.forEach((f, i) => {
        var fileGet = require("./commands/" + f);
        console.log("[INFO] - Fichier de commande " + f + " récupéré avec succès !")
        client.commands.set(fileGet.help.name, fileGet)
    });
});

client.on("ready", async () =>{ 
    console.log("🌌Space~Master🌌 est bien connécté")
    client.user.setStatus("dnd");
    
    var compteurStatus = 1
setInterval(async () => {
  status = [
    `se!help pour avoir la liste des commandes !`,
    `la Version : 12.5.1 | se!help`,
    ` ${client.guilds.cache.size.toString()} serveurs ! | se!help`
  ]
  compteurStatus = (compteurStatus + 1) % (status.length);
  client.user.setPresence({
    //status: "online",
      activity: {
        name: `${status[compteurStatus]}`,
        type: "PLAYING",
        //url: "https://www.twitch.tv/misuwasa"
      }
    })
}, 10000);
  });


  client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    if (!message.content.startsWith(prefix)) return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let commands = client.commands.get(command.slice(prefix.length));
    if (commands) commands.run(client, message, args);
});

client.login(config.token);






