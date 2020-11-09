module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	execute(message) {
		const prefix = '$' 
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const Discord = require('discord.js');

		if(!message.member.hasPermission("BAN_MEMBERS")) {
			return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
		}
		  
		if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
			return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
		}

		let target = message.mentions.members.first();
    
		if(!target) {
		  return message.channel.send(`**${message.author.username}**, Please mention the person who you want to ban`)
		}
		
		if(target.id === message.author.id) {
			return message.channel.send(`**${message.author.username}**, You can not kick yourself`)
		}
          
		let embed = new Discord.MessageEmbed()
		  .setTitle("Action: BAN")
		  .setDescription(`banned ${target} (${target.id})`)
		  .setColor("#ffb7c5")
		  .setThumbnail(target.user.displayAvatarURL())
		  .setFooter(`Banned by ${message.author.username}`);
		  
		message.channel.send(embed)
		  
		target.ban(args[1]);	
	}	
};