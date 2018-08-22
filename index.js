const Discord = require("discord.js");
const bot = new Discord.Client();


bot.on("ready", () => {
    bot.user.setActivity("préparer le serveur", {type: "PLAYING"});
    console.log("[Plugline] Je suis actif (pour une fois)");
});


bot.on("message", message => {
    // Partie commande
    var command = message.split(" ")[0].toLowerCase();
    var args = message.split(" ").shift();
    
    if (command == "/help") {
        var embed = new Discord.RichEmbed();
        embed.setColor(0xFFBB00);
        embed.setTitle("Liste des commandes");
        embed.addField("/help", "Permet d’avoir la liste des commandes");
        embed.addField("/ping", "Permet de récupérer le ping du bot");
           if (message.author.member.hasPermission("ADMINISTRATOR")) embed.addFied("/annonde [texte]", "Permet de faire une annonce sur le serveur");
        
        message.channel.send({embed}).then(msg => {msg.delete(10000)});
        message.delete();
    }


    // Partie message
});


bot.login(process.env.BOT_TOKEN);
