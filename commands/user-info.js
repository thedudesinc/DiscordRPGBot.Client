module.exports = {
	name: 'user-info',
	description: 'Gets user information using !user-info.',
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};