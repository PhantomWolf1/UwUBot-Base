const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const bot = new Discord.Client();
var prefix = "OwO";

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    console.log("Loading commands...");
    if (err) return console.log(`Command loading failed!`);
    files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
        bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
    });
});

bot.on("ready", () => {
    console.log("Alive.");
    bot.user.setActivity("Version 2.1.8");
});


//Rotator
bot.on('ready', () => {
    var statuses = ["over The Study Corner", "Dreaming about electric sheep", "Chris being a nerd", "with the space sphere", "HAL 9000", "with The iron giant", "with Omni Consumer Products", "with Atro boy", "Exterminateing replicants"]
    var result = statuses[Math.floor(Math.random() * statuses.length)]
    bot.user.setActivity(`Loading UwUCore...`, {
        type: "STREAMING",
        url: "https://twitch.tv/negative154"
    })
    setTimeout(() => {
        setInterval(() => {
            if (result == statuses[0]) {
                bot.user.setActivity(result, {
                    type: "WATCHING"
                })
            }

            if (result == statuses[1]) {
                bot.user.setActivity(result, {
                    type: "LISTENING"
                })
            }

            if (result == statuses[2]) {
                bot.user.setActivity(result, {
                    type: "PLAYING"
                })
            }
            if (result == statuses[3]) {
                bot.user.setActivity(result, {
                    type: "PLAYING"
                })
            }
            if (result == statuses[4]) {
                bot.user.setActivity(result, {
                    type: "PLAYING"
                })
            }
            if (result == statuses[5]) {
                bot.user.setActivity(result, {
                    type: "PLAYING"
                })
            }
            if (result == statuses[6]) {
                bot.user.setActivity(result, {
                    type: "PLAYING"
                })
            }
            if (result == statuses[7]) {
                bot.user.setActivity(result, {
                    type: "PLAYING"
                })
            }
            if (result == statuses[8]) {
                bot.user.setActivity(result, {
                    type: "PLAYING"
                })
            }

        }, 25000)
    }, 10000)
})





bot.on('message', message => {
    let mArray = message.content.split(" ")
    let args = mArray.slice(1)
    let cmd = bot.commands.get(mArray[0].slice(prefix.length))
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (!message.content.startsWith(prefix)) return;
    if (cmd) {
      cmd.run(bot, message, args, Discord)
      console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
      
    }
  })
  bot.login(process.env.token)
