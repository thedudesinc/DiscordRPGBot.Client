const repo = require('../repositories/discordRPGBot-repository');
const { prefix } = require('../config.json');

module.exports = {
	name: 'create',
	description: `Create your character. Be sure to include commas. Example: \`${prefix}create <character name>, <character class>, <character race>\``,
	args: true,
	usage: '<character name>, <character class>, <character race>',
	cooldown: 3,
	aliases: ['c'],
	execute(message, args) {
		repo.createPlayerCharacter(message.author.id, args[0], args[1], args[2])
			.then(() => {
				message.channel.send(`${message.author}\nYour character has been created! Use \`!s\` or \`!summary\` to view a summary of your new character.`);
			})
			.catch((error) => {
				message.channel.send(`${message.author} We encountered an error creating your character. Try again.\nIf the problem persists, contact me at thedudesincorporated@gmail.com.\n${error.response.data}`);
			});
	},
};