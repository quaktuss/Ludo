const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'return avatar of author',
    execute(message, args) {
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.MessageEmbed()
            .setImage(user.displayAvatarURL({ dynamic: true, size: 256}));
        message.channel.send(avatarEmbed);
    }
}



