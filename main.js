const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!!';

require('dotenv').config();

// const prefix = process.env.PREFIX;
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // If the message is "ping"
    if (command === 'ping') message.channel.send('pong');

    // If the message is random user ping
    if (command === 'random') {
        const winner = message.guild.members.cache.random().user;
        message.channel.send(`Congratulations! ${winner} won NOTHING`);
    }
});


client.login(process.env.TOKEN)

