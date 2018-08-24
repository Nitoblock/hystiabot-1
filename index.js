const Discord = require("discord.js");
const bot = new Discord.Client();


bot.on("ready", () => {
    bot.user.setActivity("préparer le serveur", {type: "PLAYING"});
    console.log("[Plugline] Je suis actif (pour une fois)");
});

bot.on("message", message => {
	// Commandes
	var command = message.content.split(" ")[0].toLowerCase();
	var args = message.content.split(" ").slice(1);

	if (command == "/say") {
		if (message.member.hasPermission("ADMINISTRATOR")) {
			if (args.length == 0) {
				message.channel.send(message.author + ", utilise /say <message>").then(msg => {msg.delete(10000)});
			} else {
				message.channel.send(args.join(" "));
			}
		}

		message.delete();
	}
	});


bot.login(process.env.BOT_TOKEN);
