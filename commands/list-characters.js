const repo = require('../repositories/discordRPGBot-repository');
const { prefix } = require('../config.json');

module.exports = {
	name: 'list-characters',
	description: `List your created characters. Example: \`${prefix}list-characters\``,
	args: false,
	usage: '',
	cooldown: 3,
	aliases: ['lc'],
	execute(message) {
		repo.listPlayerCharacters(message.author.id)
			.then((response) => {
				let descriptionText = '';

				response.data.forEach((pc, index) => {
					descriptionText += `**${index + 1} - ** ${pc.name}, Level ${pc.currentLevel} ${pc.race} ${pc.class}\n\n`;
				});

				const embed = {
					'title': 'Here are your characters. \nTo select an active character, use the following command:\n`!set-active-character <number from below>`',
					'description': `---------------------------------------------------------------------

									${descriptionText}`,
					'color': 15245542,
				};
				message.channel.send({ embed });
			})
			.catch((error) => {
				message.channel.send(`${message.author} We encountered an error retrieving your characters.\nIf the problem persists, contact me at thedudesincorporated@gmail.com.\n${error.response.data}`);
			});
	},
};