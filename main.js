const fs = require('fs');
// require the discord.js module
const Discord = require('discord.js');
require('dotenv').config();
// create a new Discord client
const client = new Discord.Client();
const prefix = process.env.PREFIX;
client.commands = new Discord.Collection();
const Twitter = require('twit');
const twitterConf = {
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
}
const twitterClient = new Twitter(twitterConf);

//Say when Ludo is online
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
        message.channel.send('La commande ne fonctionne pas camarade. <@193330775452549121> est nul en programmation..');
    }
});


/*** MEDIAVENIR TWEET SCRAPPING ***/
// Specify destination channel ID below :: 1214315619031478272
const dest = '880491113062989895';
// Create a stream to follow tweets
const Mediavenir = twitterClient.stream('statuses/filter', {
    follow: '1214315619031478272', // @Mediavenir's twitterID
});
Mediavenir.on('tweet', tweet => {
    if (tweet.in_reply_to_status_id
        || tweet.in_reply_to_status_id_str
        || tweet.in_reply_to_user_id
        || tweet.in_reply_to_user_id_str
        || tweet.in_reply_to_screen_name) return true;
    if (tweet.retweeted_status) return true;

    const twitterMessage = `${tweet.user.name} (@${tweet.user.screen_name}) tweeted this: https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
    client.channels.cache.get(dest).send(twitterMessage);
    return false;
});


/*** CONFESSFANTASM TWEET SCRAPPING ***/
// Specify destination channel ID below
const confessionDest = '883679812974161951';
// Create a stream to follow tweets
const Confessfantasm = twitterClient.stream('statuses/filter', {
    follow: '1222195059891875846', // @_Confessfantasm's twitterID
});
Confessfantasm.on('tweet', tweet => {
    if (tweet.in_reply_to_status_id
        || tweet.in_reply_to_status_id_str
        || tweet.in_reply_to_user_id
        || tweet.in_reply_to_user_id_str
        || tweet.in_reply_to_screen_name) return true;
    if (tweet.retweeted_status) return true;

    const twitterMessage = `${tweet.user.name} (@${tweet.user.screen_name}) tweeted this: https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
    client.channels.cache.get(confessionDest).send(twitterMessage);
    return false;
});

/*** CONFLITSFRANCE TWEET SCRAPPING ***/
// Specify destination channel ID below :: 1214315619031478272
// Create a stream to follow tweets
const ConflitsFrance = twitterClient.stream('statuses/filter', {
    follow: '971820228', // @Conflitsfrance's twitterID
});
ConflitsFrance.on('tweet', tweet => {
    if (tweet.in_reply_to_status_id
        || tweet.in_reply_to_status_id_str
        || tweet.in_reply_to_user_id
        || tweet.in_reply_to_user_id_str
        || tweet.in_reply_to_screen_name) return true;
    if (tweet.retweeted_status) return true;

    const twitterMessage = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
    client.channels.cache.get(dest).send(twitterMessage);
    return false;
});
//token
client.login(process.env.TOKEN);
