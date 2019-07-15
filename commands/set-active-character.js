const repo = require('../repositories/discordRPGBot-repository');
const { prefix } = require('../config.json');

module.exports = {
	name: 'set-active-character',
	description: `Sets which of your characters is active. Example: \`${prefix}set-active-character 1\`\nTo get the character number, use \`${prefix}list-characters.\``,
	args: true,
	usage: '<number of the character to set as active>',
	cooldown: 3,
	aliases: ['sac'],
	execute(message, args) {
		repo.setActiveCharacter(message.author.id, args[0])
			.then((response) => {
				const embed = {
					'title': 'You have set the following character as active.\n',
					'description': `${response.data.name}, Level ${response.data.currentLevel} ${response.data.race} ${response.data.class}`,
					'color': 15245542,
				};
				message.channel.send({ embed });
			})
			.catch((error) => {
				message.channel.send(`${message.author} We encountered an error retrieving your characters.\nIf the problem persists, contact me at thedudesincorporated@gmail.com.\n${error.response.data}`);
			});
	},
};