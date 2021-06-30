const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

const prefix = process.env.PREFIX;


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
        // Send "pong" to the same channel
        message.channel.send('pong');
    }
});

client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'avatar') {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
    }
});

client.login(process.env.TOKEN)
