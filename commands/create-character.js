const repo = require('../repositories/discordRPGBot-repository');

module.exports = {
	name: 'create',
	description: 'Create your character. Example: !create <character name> <character class> <character race>',
	args: true,
	usage: '<character name> <character class> <character race>',
	cooldown: 3,
	aliases: ['c'],
	execute(message, args) {
		repo.createPlayerCharacter(message.author.id, args[0], args[1], args[2])
			.then(() => {
				message.channel.send(`${message.author}\nYour character has been created! Use \`!s\` or \`!summary\` to view a summary of your new character.`);
			})
			.catch((error) => {
				console.log(`=====================================================================================\n${error}`);
				message.channel.send(`${message.author} We encountered an error creating your character. It has been consumed by the void.`);
			});
	},
};