const repo = require('../repositories/discordRPGBot-repository');
const { prefix } = require('../config.json');

module.exports = {
	name: 'do',
	description: `Executes a specific action for your character. Example: \`${prefix}do 1\`\nTo get the action number, use \`${prefix}list-actions\``,
	args: true,
	usage: '<number of the action to execute>',
	cooldown: 3,
	aliases: [],
	execute(message, args) {
		repo.doAction(message.author.id, args[0])
			.then((response) => {
				message.channel.send(`${message.author}: ${response.data}`);
			})
			.catch((error) => {
				message.channel.send(`${message.author} We encountered an error retrieving your characters. \nIf the problem persists, contact me at thedudesincorporated@gmail.com.\n${error.response.data}`);
			});
	},
};