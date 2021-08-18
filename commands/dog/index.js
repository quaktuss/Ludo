const random = require("catsndogs");
module.exports = {
    name: 'dog',
    description: 'random dog img',
    async execute(message) {
        const file = await random.dog();
        message.channel.send(file);
    }
}