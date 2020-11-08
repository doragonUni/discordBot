module.exports = {
	name: 'beep',
	description: 'Beep!',
	execute(message) {
		message.channel.send('Boop.').then(sentMessage => {
			sentMessage.react('⬆');
			sentMessage.react('⬇');
			
		});
	},
};

