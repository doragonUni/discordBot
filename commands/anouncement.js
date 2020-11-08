const Discord = require('discord.js');
module.exports = {
	name: "anouncement",
    description: "Embed anouncement.",
    usage: "$here",
    accessableby: "Members",
    aliases: ['anuncio'],
	execute(message) {  	
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ffb7c5')
        .setTitle('Torneo de Minecraft HG')
        .setURL('https://ggtorneos.cl/')
        .setAuthor('Doragon', 'https://i.imgur.com/DGUOGYp.jpg', 'https://www.twitch.tv/dragonsenpaidesu')
        .setDescription('@everyone chicos tenemos el medio torneo pal miercoles a las 20:00')
        .setThumbnail('https://i2.wp.com/ggtorneos.cl/wp-content/uploads/2020/09/Logo_1.png?fit=300%2C238&ssl=1')
        .setTimestamp()
        .setFooter('DoragonBot', 'https://i.imgur.com/DGUOGYp.jpg');
    
    message.channel.send(exampleEmbed);
    }
};