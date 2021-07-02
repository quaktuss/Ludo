module.exports = {
    name: 'ping',
    description: 'ping function test',

    execute(messagen args) {
        message.channel.send('pong');
    },
}