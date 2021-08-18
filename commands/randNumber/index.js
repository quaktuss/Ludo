module.exports = {
    name: 'randNumber',
    description: 'return number between 0 and ',
    execute(message, args) {
        var rating = Math.floor(Math.random() * 10) + 1;
        message.reply(`I rate you ${rating}/10`);
    },
};