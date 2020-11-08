module.exports = {
    //STATUS": PENDING FOR REVIEW BUGS
	name: 'pfp',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'fotoperfil', 'avatar'],
	execute(message) {
		message.reply(message.author.displayAvatarURL());
	},
};