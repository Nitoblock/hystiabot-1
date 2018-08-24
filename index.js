const Discord = require("discord.js");
const bot = new Discord.Client();
const logs = "482471046222708737";


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
	
	if (command == "/help") {
    var embed = new Discord.RichEmbed();
    embed.setColor(0xFFBB00);
    embed.setTitle("Liste des commandes");
    embed.addField("/help", "Permet d’avoir la liste des commandes");
    embed.addField("/ping", "Permet de récupérer le ping du bot");
    embed.addField("/web", "Permet d'avoir le lien du site");
    if (message.member.hasPermission("ADMINISTRATOR")) embed.addField("/annonce [texte]", "Permet de faire une annonce sur le serveur");
    if (message.member.hasPermission("ADMINISTRATOR"))embed.addField("/ban @Utilisateur", "Commande de bannissement");
    if (message.member.hasPermission("ADMINISTRATOR"))embed.addField("/tempban @Utilisateur", "Commande de banissement temporaire");
    if (message.member.hasPermission("ADMINISTRATOR"))embed.addField("/mute @Utilisateur", "Commande de mute");
    if (message.member.hasPermission("ADMINISTRATOR"))embed.addField("/tempmute @Utilisateur", "Commande de mute temporaire");
    if (message.member.hasPermission("ADMINISTRATOR"))embed.addField("/promote @Uitlisateur", "Promote");
    if (message.member.hasPermission("ADMINISTRATOR"))embed.addField("/say [texte]", "Permet de faire parlé le bot");
    message.channel.send({embed}).then(msg => {msg.delete(10000)});
    message.delete();
}
});


bot.login(process.env.BOT_TOKEN);
