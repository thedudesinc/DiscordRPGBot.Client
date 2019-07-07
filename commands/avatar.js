const { prefix } = require('../config.json');

module.exports = {
	name: 'avatar',
	description: `Displays the avatar of all mentioned users. Example: ${prefix}avatar @User#123 @OtherUser#123`,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
		});

		// send the entire array of strings as a message
		// by default, discord.js will `.join()` the array with `\n`
		message.channel.send(avatarList);
	},
};