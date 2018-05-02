const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NDMyMjIxNzIyNTE1NzM0NTQ4.DaqJ3Q.LqggSoCvrKoX7Op3cdDgL1tKTQU')


  bot.login('NDMyMjIxNzIyNTE1NzM0NTQ4.DaqJ3Q.LqggSoCvrKoX7Op3cdDgL1tKTQU');

  bot.on("ready" , () => {
    bot.user.setPresence({ game: { name: 'Développement ', type: 0} })
    console.log("Le bot a bien été connecté !");
});

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !')
  }
})
