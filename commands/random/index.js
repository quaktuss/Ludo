module.exports = {
    name: 'random',
    description: 'random!',
    execute(message, args) {
        const winner = message.guild.members.cache.random().user;
        message.channel.send(`Congratulations! ${winner} won **NOTHING** HAHAHAHAHAAAAAAAAAAAAAAAA`);
    },
};
