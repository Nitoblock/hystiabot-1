const Discord = require('discord.js')
const botconfig = require("./botconfig.json");

const fs = require("fs");
const bot = new Discord.Client()

var token = ('NDUyMTUxNzg2MTM3MDU5MzI4.DgbfEQ.9zePsWm0Mo82JYoqBxKr3tf1E2c')

bot.on('ready', function () {
    bot.user.setGame('preparation du serveur').catch(console.error)
})




bot.on('message', function (message){
    if (message.content === '/ping') {
        message.channel.send('pong')
    }

})

bot.on('message', function (message){
    if (message.content === '/ip') {
        message.channel.send('play.hystiacraft.fr')
    }

})

bot.on('message', function (message){
        if (message.content === '%help') {
            message.channel.send('/ip et /ping + /report @user reason')

bot.on('message' , function (message) {
        if   (message.channel.send('et pour les modo') {
              message.channel.send('/ban @user reason + /kick @user reason')
        }


}
        }
    })


bot.on('message', function (message){
    if (message.content === '/youtube:a') {
        message.channel.send('https://www.youtube.com/channel/UChqcVImLZ-WFVsPKyGrpEhw')
    }

})

bot.on('message', function (message){
    if (message.content === '/youtube:n') {
        message.channel.send('https://www.youtube.com/channel/UCY1FthpjWrjM7bxzq1cTReg')
    }

})

bot.on('message', function (message){
    if (message.content === '/youtube:d') {
        message.channel.send('https://www.youtube.com/channel/UCPUCygKjjtg4wdyk2TU-NDA')
    }

})

bot.on('message', function (message){
    if (message.content === '/youtube:h') {
        message.channel.send('https://www.youtube.com/channel/UC0zUfA7nUpCfg4WfCmr5V6A')
    }

})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;




});
