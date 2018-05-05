const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NDMyMjIxNzIyNTE1NzM0NTQ4.DaqJ3Q.LqggSoCvrKoX7Op3cdDgL1tKTQU')


  bot.login('NDMyMjIxNzIyNTE1NzM0NTQ4.DaqJ3Q.LqggSoCvrKoX7Op3cdDgL1tKTQU');

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
    member.guild.channels.find("name", "pandagaming").send(` Bienvenue sur PandaGaming! Passez un bon moment ici! ${member}`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "pandagaming").send(`${member} vien de quitter du serveur PandaGaming`)
})

bot.on('guildMemberAdd' , member => {
    var role = member.guild.roles.find('name','Membres' );
    member.addRole(role)
})
