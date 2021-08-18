/*
randomPuppy = require("random-puppy");
module.exports = {
    name: 'cat',
    description: 'random cat!',
    async execute(message) {
        const file = await randomPuppy('cats');
        message.channel.send(file);
    },
};
*/

const random = require("catsndogs");

module.exports = {
    name: 'cat',
    description: 'random cat img',
    async execute(message) {
        const file = await random.cat();
        message.channel.send(file);
    }

}
