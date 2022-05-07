const Discord = require('discord.js');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const { Console } = require('console');





const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')





const prefix = '!';

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.once('ready', async () => {
    console.log('InspirationalQuoteBot is online!');
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

        let imageSent = false;

        try {

//             let random = Math.floor(Math.random() * 1000);
//             console.log(random);
//             fetch("http://www.reddit.com/r/pics/.json").then(r => r.json()).then((r) => {
//             r.data.children.forEach((i) => {
//        try{
//          message.channel.send(i + ".");
//        } catch (error){console.log(error.message)}
//  })})
            const quoteAPI = await fetch('https://api.kanye.rest').then(response => response.json());
            const quote = JSON.stringify(quoteAPI).toString().split('"');
            //while(!imageSent) {

            
                const imgJSON = await fetch('https://www.reddit.com/r/spaceporn/random/.json').then(response => response.json());
                //const imgJSON = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + random.toString() + '&api_key=if3uINFrgnm5tyWSPNYGGQfQeaLAnPxKM4WABVt4').then(response => response.json());
                const obj = JSON.stringify(imgJSON).toString().split('"');
                
                // for(let i = 180; i < 194; i ++) {
                //     message.channel.send(obj[i] + i);
                // }

                for(let i = 220; i < 226; i++) {

                    // if(obj[i].endsWith(".jpg") || obj[i].endsWith(".png")) {
                    //     message.channel.send(obj[i])
                    //     message.channel.send(quote[3])
                    //     imageSent = true;
                    //194
                        message.channel.send(obj[i])

                        thenum = "foo3bar5".match(/\d+/)[0] // "3"



                    //     // Write "Awesome!"
                    //     ctx.font = '12px Impact'
                    //     ctx.rotate(0.1)
                    //     ctx.fillText(quote[3], 50, 100)

                    //     // Draw line under text
                    //     var text = ctx.measureText(quote[3])
                    //     ctx.strokeStyle = 'rgba(0,0,0,0.5)'
                    //     ctx.beginPath()
                    //     ctx.lineTo(50, 102)
                    //     ctx.lineTo(50 + text.width, 102)
                    //     ctx.stroke()

                    //     // Draw cat with lime helmet
                    //     loadImage(obj[i]).then((image) => {
                    //     ctx.drawImage(image, 50, 0, 70, 70)

                    //     //console.log('<img src="' + canvas.toDataURL() + '" />')
                    //     })




                    //     const out = fs.createWriteStream('C:/Users/wayde/source/repos/Discord Projects/InspirationalQuoteBot' + '/test.png')
                    //     const stream = canvas.createPNGStream()
                    //     stream.pipe(out)
                    //     out.on('finish', () =>  console.log('The PNG file was created.'))








                    //}

                }
                

            //}
            
            // message.channel.send({files:[{ attachment: "https://i.imgur.com/a1dbgD0.jpeg" }]});

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

