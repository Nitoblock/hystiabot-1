const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setActivity("preparation du serveur",{type: "PLAYING"});
});

bot.login(process.env.BOT_TOKEN);
