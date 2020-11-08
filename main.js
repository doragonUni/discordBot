const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();


const prefix = '$';
const token = 'Nzc0Njk3MjE1Nzc1MDgwNDc4.X6bjAQ.sT4NN6OGdrREhFAEFUM6RhI_l7U';


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command =  require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


// anuncia en consola cuando el bot esta activo
client.once('ready', () => {
    console.log('Anouncement Bot is On');
    client.user.setUsername('Doragon');
    client.user.setActivity('with my owner @Doragon');
    //<client>.user.setActivity('<activity>', { type: 'WATCHING' });
    //<client>.user.setActivity('<activity>', { type: 'LISTENING' });
    //<client>.user.setPresence({ activity: { name: '<activity>' }, status: 'idle' });
});

//here we add the command and the bot will send a message acording to the command, ONLY MESSAGE BY BOT
//es ineficiente eso si!
client.on('message', message => { 
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
    }
    
    if (command.args && !args.length) {
            let reply = `You didn't provide any arguments, ${message.author}!`;
            
            if (command.usage) {
                reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
            }    
            return message.channel.send(reply);
    }
            

    try {
        command.execute(message, args);
    } 
    catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
    }

});



//last line
client.login(token);

