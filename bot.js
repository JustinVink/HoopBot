const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready daddy!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'Who-is-fat') {
    	message.reply('GoDed for sure');
  	};
});

client.on('message', message => {
    if (message.content === 'blup') {
    	message.reply('blob');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
