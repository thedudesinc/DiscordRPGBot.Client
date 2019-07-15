const repo = require('../repositories/discordRPGBot-repository');
const { prefix } = require('../config.json');

module.exports = {
	name: 'set-character-image',
	description: `Set the thumbnail your character has when viewing its summary. URL Must not contain commas. Example: ${prefix}set-character-image <image-url>`,
	args: true,
	usage: '<url to image>',
	cooldown: 3,
	aliases: ['sci'],
	execute(message, args) {
		repo.setCharacterImage(message.author.id, args[0])
			.then(() => {
				message.channel.send(`${message.author}\nYour character's profile image has been set! Use \`!s\` or \`!summary\` to take a look.`);
			})
			.catch((error) => {
				message.channel.send(`${message.author} We encountered an error setting your character's image. Please try again!\nIf the problem persists, contact me at thedudesincorporated@gmail.com.\n${error.response.data}`);
			});
	},
};