const repo = require('../repositories/discordRPGBot-repository');
const { prefix } = require('../config.json');

module.exports = {
	name: 'list-actions',
	description: `Shows the available actions for your active player character. Example: ${prefix}list-actions`,
	args: false,
	usage: '',
	cooldown: 10,
	aliases: ['la'],
	execute(message) {
		repo.getPlayerCharacterActions(message.author.id)
			.then((response) => {
				if(response.data) {
					let descriptionText = '';

					response.data.forEach((action, index) => {
						descriptionText += `**${index + 1} - ** ${action}\n\n`;
					});

					const embed = {
						'title': 'Here are your available actions. \nTo choose which action to take, use the following command:\n`!do <number from below>`',
						'description': `---------------------------------------------------------------------

									${descriptionText}`,
						'color': 15245542,
					};
					message.channel.send({ embed });
				} else {
					message.channel.send('Uh oh. We seem to have misplaced your character. Please try again in a moment. If the problem persists, contact me at thedudesincorporated@gmail.com.');
				}
			})
			.catch((error) => {
				message.channel.send(`${message.author} We encountered an error retrieving your character.\nIf the problem persists, contact me at thedudesincorporated@gmail.com.\n${error.response.data}`);
			});
	},
};