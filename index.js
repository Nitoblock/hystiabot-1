const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
    bot.user.setActivity('preparation du serveur',{type: "PLAYING"}).catch(console.error)

client.on('message', async msg => {
  if (msg.content === 'test') {
    const channel = await message.guild.channels.create('foo');
    await channel.setParent('481207199939559425'); 
    console.log(channel.parentID);
  }
})




});



bot.login(process.env.BOT_TOKEN);
