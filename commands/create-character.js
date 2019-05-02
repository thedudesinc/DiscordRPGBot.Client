const repo = require("../repositories/discordRPGBot-repository");

module.exports = {
	name: 'create',
	description: 'Create your character. Example: !create <character name>',
	args: true,
	usage: '<character name>',
	cooldown: 10,
	aliases: ['c'],
	execute(message, args) {
		repo.createPlayerCharacter(message.author.id, args[0])
			.then(response => {
				message.channel.send(`${message.author}\nYour character has been created!`);
			})
			.catch((error) => {
				console.log(`=====================================================================================\n${error}`);
				message.channel.send(`${message.author} We encountered an error creating your character. It has been consumed by the void.`);
			});
	},
};