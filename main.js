const path = require('path');
const fs = require('fs');
// require the discord.js module
const Discord = require('discord.js');
require('dotenv').config();
// create a new Discord client
const client = new Discord.Client();
const prefix = '!!';

client.commands = new Discord.Collection();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const commandFolder = fs.readdirSync('./commands');

for (const folder of commandFolder) {
        const command = require(`./commands/${folder}/index.js`);
        client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});


client.login(process.env.TOKEN);