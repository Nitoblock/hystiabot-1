const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setActivity("préparer le serveur", {type: "PLAYING"});
    console.log("[Plugline] Je suis actif");
});

bot.login(process.env.BOT_TOKEN);
