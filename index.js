const Discord = require('discord.js')
const bot = new Discord.Client()


  bot.on("ready" , () => {
    bot.user.setPresence({ game: { name: 'En Développement ', type: 0} })
    console.log("Le bot a bien été connecté !");
});

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !')
  }
})

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "pandagaming").send(` Bienvenue sur PanthersGaming! Passez un bon moment ici! ${member}`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "pandagaming").send(`${member} vien de quitter du serveur PanhersGaming`)
})
