const { prefix } = require('../config.json');

module.exports = {
	name: 'server',
	description: `Gets server information using ${prefix}server.`,
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};