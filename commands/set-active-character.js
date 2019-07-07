const repo = require('../repositories/discordRPGBot-repository');
const { prefix } = require('../config.json');

module.exports = {
	name: 'set-active-character',
	description: `Sets which of your characters is active. Example: ${prefix}set-active-character 1\nTo get the character number, use the ${prefix}list-characters command.`,
	args: true,
	usage: '<number of the character to set as active>',
	cooldown: 3,
	aliases: ['lc'],
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
				message.channel.send(`${message.author} We encountered an error retrieving your characters. WHAT HAVE YOU DONE?!\n${error.response.data}`);
			});
	},
};