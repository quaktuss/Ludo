const axios = require('axios');

module.exports = {
    name: 'wikihow',
    description: 'Redirection to a random wikihow',
    execute(message) {
        axios.get('https://fr.wikihow.com/Sp%C3%A9cial:Randomizer')
            .then((response) => {
                if (response.status === 200) {
                    const html = response.data;
                    let startPos = html.indexOf('<h1 id="section_0" ');
                    let endPos = html.indexOf(">C", startPos) + 5;
                    let url = html.substring(startPos + 45, endPos - 6)
                    message.channel.send(decodeURI(url))
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }
}