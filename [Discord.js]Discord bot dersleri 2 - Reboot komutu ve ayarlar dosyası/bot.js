const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('Pong!' + client.ping + 'ms');
  }
  
    if (message.content === 'sa') {
    message.reply('as');
  }
  
  if (message.content === prefix + 'avatarım') {  
	message.channel.send(message.author.avatarURL);
  }
  
  if (message.content === prefix + 'reboot') {
	  
	  if (message.author.id === "muhteşim id niz") {
		  message.channel.send('[BOT]Yenden başlatılıyor...').then(msg => {
			  console.log('yeniden başlatılıyor')
			  process.exit(0);
		  });
	  } else 
		  message.channel.send('Maalesef bu komutu kullanamazsın. Benim yapımcım değilsin!')
  }
  
  
});

client.login(ayarlar.token);