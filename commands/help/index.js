const fs = require("fs");
module.exports = {
    name: 'help',
    async run(client, message, args) {
        const commandFiles = fs.readdirSync('./commands');
        const cmdmap = commandFiles.map(files => `${files}`).join(' | Working\n')
        const embed = new discord.MessageEmbed()
            .setDescription(cmdmap)
        message.channel.send(embed)
    }
}