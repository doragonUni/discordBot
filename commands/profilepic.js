const Discord = require('discord.js');
module.exports = {
	name: "profilepic",
    description: "profile pic embed ver.",
    usage: "$pic",
    accessableby: "Members",
    aliases: ['pic'],
	execute(message) {  	
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ffb7c5')
        .setImage(message.author.avatarURL())
        .setTimestamp()
    message.channel.send(exampleEmbed);
    }
};