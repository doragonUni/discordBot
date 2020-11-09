const Discord = require('discord.js');
module.exports = {
	name: "pfp",
    description: "profile pic embed ver and it reacts with 2 emojis for the people to press.",
    usage: "$pfp",
    accessableby: "Members",
    aliases: ['avatar', 'profilepic', 'pic'],
	execute(message) {   
            var pfpMember = message.mentions.members.first() || message.member;
            // we can just put the member object into the string here, that will tag the person
            //message.channel.send(`Here is ${pfpMember}'s pfp :)`);
            const avatarEmbed = new Discord.MessageEmbed()
                .setColor('#ffb7c5')
                .setAuthor(pfpMember.user.username)
                .setImage(pfpMember.user.displayAvatarURL());
            
            message.channel.send(avatarEmbed).then(sentMessage => {
                sentMessage.react('😍');
                sentMessage.react('🤢');
            }); 
    }
};