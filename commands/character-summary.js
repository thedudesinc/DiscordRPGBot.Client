const repo = require("../repositories/discordRPGBot-repository");

module.exports = {
	name: 'summary',
	description: 'Gives a summary of your character profile. Example: !summary',
	args: false,
	usage: '',
	cooldown: 10,
	aliases: ['s'],
	execute(message) {
		repo.getPlayerCharacter(message.author.id)
			.then(response => {
				if(response.data) {
					message.channel.send(`Id: ${response.data.id}\nDiscordId: ${response.data.discordId}\nCharacter Name: ${response.data.characterName}`);
				} else {
					message.channel.send(`Uh oh. We seem to have misplaced your character.`);
				}
			})
			.catch((error) => {
				console.log(`=====================================================================================\n${error}`);
				message.channel.send(`${message.author} We encountered an error creating your character. It has been consumed by the void.`);
			});
	},
};