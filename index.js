const Discord = require("discord.js");
const bot = new Discord.Client();
const logs = "485093132342525952";


bot.on("ready", () => {
    bot.user.setActivity("Rien faire", {type: "PLAYING"});
    console.log("[Hystiabot] Je suis actif (pour une fois)");
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

bot.on("messageDelete", message => {
	// Salon de logs
	if (!message.author.bot) {
		var embed = new Discord.RichEmbed();
		embed.setTitle(":x: Un message a été supprimé");
		embed.setColor("#FF0000");
		embed.setThumbnail(message.member.user.avatarURL);
		embed.setTimestamp();
		embed.addField("Utilisateur:", message.author);
		embed.addField("ID de l'utilisateur:", message.member.id);
		embed.addField("Message:", "```" + message.content + "```");
		embed.addField("ID du message:", message.id);
		embed.addField("Salon:", message.channel);
		embed.addField("ID du salon:", message.channel.id);

		bot.channels.get(logs).send({embed});
	};
	
});


bot.login(process.env.BOT_TOKEN);
