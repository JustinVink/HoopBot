const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDE2MzQ0NDA4MTQ2MDUxMDky.DXDUww.b8C2zha1jY8bYiIsqnwN0fyy3LU);
