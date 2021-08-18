/*
const fs = require("fs");
module.exports = {
    name: 'condition',
    description: 'condition!',
    execute(message, args) {
        fs.readdir("../commands/", (err, files) => {
            const commandFolder = fs.readdirSync('./commands');

            if(err) console.error(err);

            let cmdfiles = files.filter(f => f.split(".").pop() === "js");

            const commandFolder = fs.readdirSync('./commands');
            if(cmdfiles.length <= 0) {
                console.log("No commands to load!");
                return;
            }

            let namelist = "";
            let desclist = "";
            let usage = "";

            let result = jsfiles.forEach((f, i) => {
                let props = require(`./${f}`);
                namelist = props.help.name;
                desclist = props.help.description;
                usage = props.help.usage;
            };

            message.author.send(`**${namelist}** \n${desclist} \n${usage}`);
        });
    },
};
*/
