const repo = require('../repositories/discordRPGBot-repository');
const { prefix } = require('../config.json');

module.exports = {
	name: 'summary',
	description: `Gives a summary of your character profile. Example: ${prefix}summary`,
	args: false,
	usage: '',
	cooldown: 10,
	aliases: ['s'],
	execute(message) {
		repo.getPlayerCharacter(message.author.id)
			.then(response => {
				if(response.data) {
					const embed = {
						'title': `**${response.data.name} - Level ${response.data.currentLevel} ${response.data.race} ${response.data.class}**\n\n`,
						'description': `---------------------------------------------------------------------
										
										**HP:       ${response.data.currentHP} / ${response.data.maxHP}**

										**XP:       ${response.data.currentXP}**

										**Gold:     ${response.data.gold}**

										---------------------------------------------------------------------`,
						'color': 15245542,
						'thumbnail': {
							'url': response.data.profileImageUrl ? response.data.profileImageUrl : response.data.classImageUrl,
						},
						'fields': [
							{
								'name': 'Strength',
								'value': response.data.totalStrongMod,
								'inline': true,
							},
							{
								'name': 'Speed',
								'value': response.data.totalFastMod,
								'inline': true,
							},
							{
								'name': 'Smarts',
								'value': response.data.totalSmartMod,
								'inline': true,
							},
							{
								'name': 'Toughness',
								'value': response.data.totalToughMod,
								'inline': true,
							},
						],
					};
					message.channel.send({ embed });
				} else {
					message.channel.send('Uh oh. We seem to have misplaced your character. Please try again in a moment. If the problem persists, contact me at thedudesincorporated@gmail.com.');
				}
			})
			.catch((error) => {
				message.channel.send(`${message.author} We encountered an error retrieving your character. What have you done?!\n${error.response.data}`);
			});
	},
};