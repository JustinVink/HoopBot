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
client.login(process.env.NDE2MzQ0NDA4MTQ2MDUxMDky.DXDOYg.hsR7Edu0NY7fao0b-9lQ_842edE);
