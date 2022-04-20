//const Sequelize = require('sequelize');
//const sqlite3 = require('sqlite3').verbose();
const Discord = require('discord.js');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const { Console } = require('console');
//const schedule = require('node-schedule');

const prefix = '!';

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
//const badWords = ['fuck', 'shit', 'cunt', 'cock', 'dick', 'bitch', 'bastard', 'damn', 'dammit', 'ass', 'hell', 'pussy', 'whore', 'slut', 'piss', 'tit', 'cum', 'fag'];
//const goodWords = ['frick', 'crap', 'good fellow', 'penis', 'penis', 'female dog', 'child of unwed parents', 'darn', 'darn it', 'bum', 'heck', 'vagina', 'promiscuous woman', 'promiscuous woman', 'pee', 'breast', 'semen', 'bundle of twigs'];

// const sequelize = new Sequelize('database', 'user', 'password', {
//     host: 'localhost',
//     dialect: 'sqlite',
//     logging: false,
//     storage: 'database.sqlite',
// });

// const User = sequelize.define('User', {
//     userID : {
//         type: Sequelize.INTEGER,
//     },
//     userName : {
//         type: Sequelize.STRING,
//     },
//     guildID: {
//         type: Sequelize.INTEGER,
//     },
//     prayersSent: {
//         type: Sequelize.INTEGER,
//         defaultValue: 0
//     },
//     // weeklySinCount: {
//     //     type: Sequelize.INTEGER,
//     //     defaultValue: 0
//     // },
//     // monthlySinCount: {
//     //     type: Sequelize.INTEGER,
//     //     defaultValue: 0
//     // },
//     // yearlySinCount: {
//     //     type: Sequelize.INTEGER,
//     //     defaultValue: 0
//     // },
//     totalSinCount: {
//         type: Sequelize.INTEGER,
//         defaultValue: 0
//     },
//     praiseCount: {
//         type: Sequelize.INTEGER,
//         defaultValue: 0
//     },
//     thoughtsAndPrayersCount: {
//         type: Sequelize.INTEGER,
//         defaultValue: 0
//     },
//     versesRead: {
//         type: Sequelize.INTEGER,
//         defaultValue: 0
//     }
// });
// client.on("ready", () => {
    
//     console.log('=============Guild: ' + Guilds)
// });

client.once('ready', async () => {
    console.log('InspirationalQuoteBot is online!');

    // const clientList = client.members.cache
    //client.user.setStatus("invisible");
    // clientList.array.forEach(element => {
    //     createUser(element, this.guild.id)
    // });

    // Get the Guild and store it under the variable "list"
//     const list = client.guilds.get("905232633200525422"); 

// // Iterate through the collection of GuildMembers from the Guild getting the username property of each member 
//     list.members.forEach(member => console.log(member.user.username)); 

    //User.sync();
    //{ force: true } USE THIS INSIDE USER.SYNC() TO RESET DATABASE, PROCEED WITH CAUTION
});

// client.on('message', message => {   
//     let bBadWords = false;
//     const messageContent = message.content.toLowerCase();
//     const words = messageContent.split(' ');
//     let count = 0;

//     if(!message.author.bot) {

//         for(let i = 0; i < words.length; i++) {

//             for(let j = 0; j < badWords.length; j++) {

//                 if(words[i].includes(badWords[j])) {

//                     words[i] = words[i].replaceAll(badWords[j], goodWords[j]);
//                     bBadWords = true;
//                     count++;
//                 }
//             }
//         }

//         let newMessage = words.join(' ');

//         if(bBadWords) {

//             if(count > 15) {
//                 message.channel.send("Woah there " + message.author.username + "! That's a lot of profanity! Too much to count for God's internal databases!")
//                 return;
//             }

//             if(newMessage.length > 1920) {
//                 newMessage = newMessage.substr(0, 1920);
//             } 

//             message.channel.send('That is a bad word ' + message.author.username + "! \nInstead, try saying \"" + newMessage + "\"");
//             UpdateCountDB(message.author.id, message.author.username, message.guild.id, 'sin', count);
//         }

//     }

// }); 

// async function createUser(userID, userName, guildID) {

//     try {
//         const user = await User.create({
//             userID: userID,
//             userName: userName,
//             guildID: guildID              
//         });

//     }
//     catch (error) {
//         console.log(error);
//     }

// }
// async function UpdateCountDB(userID, userName, guildID, type, count) {

//     const user = await User.findOne({ where: { userID: userID, guildID: guildID }});

//     if(user) {
//         if(type === 'sin') {
//             //user.increment('weeklySinCount', {by: count});
//             // user.increment('monthlySinCount', {by: count});
//             // user.increment('yearlySinCount', {by: count});
//             user.increment('totalSinCount', {by: count});
//         }
//         if(type === 'praise') {
//             user.increment('praiseCount');
//         }
//         if(type === 'verse') {
//             user.increment('versesRead');
//         }
//         if(type === 'thoughtsAndPrayers') {
//             user.increment('thoughtsAndPrayersCount');
//         }
//         if(type === 'pray') {
//             user.increment('prayersSent');
//         }
//     } else {
//         createUser(userID, userName, guildID);
//         const newUser = await User.findOne({ where: { userID: userID, guildID: guildID }});
//         UpdateCountDB(userID, userName, guildID, type, count);
//     }
// }

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help') {
        const helpEmbed = new Discord.MessageEmbed().setTitle("List of Holy Commands").setDescription("\n!praise: Praises our Lord and Saviour!\n!verse: Get a random Bible passage!\n!pray @mention: Send a friend a Thought and Prayer!\n!stats: See your Level and Statistics!");
        message.channel.send({embeds: [helpEmbed]});
    }

    if(command === 'praise') {
        message.channel.send("Praise the Lord!");
        //UpdateCountDB(message.author.id, message.author.username, message.guild.id, 'praise');
    }
    if(command === 'pic') {

        try {
            //const imgJSON = await fetch('https://images-api.nasa.gov/search?q=earth').then(response => response.json());
            //const obj = JSON.stringify(imgJSON, null, 2).toString().split('"');  

            message.channel.send({files:[{ attachment: "https://i.imgur.com/a1dbgD0.jpeg" }]});

            // let passageLocation = obj[3] + " " + obj[7] + ":" + obj[11]; 
            // let passage = obj[15]; 
            // let sendOff = "This is the Word of the Lord. Praise be to God.";

            // const embed = new Discord.MessageEmbed().setTitle(passageLocation).setDescription(passage).setFooter(sendOff);
            //message.channel.send({embeds: [embed]});

        } catch(error) {
            console.log("Error fetching image")
            console.log(error);
        }
        //UpdateCountDB(message.author.id, message.author.username, message.guild.id, 'verse');
    }

});

fs.readFile('./token', 'utf8', function(err, data) {
    if(err) throw err;
    client.login(data);
});

