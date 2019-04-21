const roller = require('roller');

module.exports = {
	name: 'dice',
	description: 'Rolls a dice using the standard ndx format. Example: !dice 1d10',
	args: true,
	usage: '1d10',
	cooldown: 10,
	aliases: ['roll'],
	execute(message, args) {
		const match_data = args[0].match(/([1-9][0-9]*)d([1-9][0-9]*)/);

		if (match_data) {
			const n_dice = parseInt(match_data[1], 10);
			const n_sides = parseInt(match_data[2], 10);

			if (n_dice > 10000) {
				message.channel.send(`${message.author} stop sending ludicrous numbers. Thanks.`);
				return;
			}

			console.log('rolling ' + n_dice + 'd' + n_sides);
			const dice = roller.roll(n_dice, n_sides);

			let message_content = '';
			let sum;

			if (n_dice > 1) {
				sum = dice.reduce(function(prev, curr) {
					return prev + curr;
				});

				message_content = `${message.author}\n${dice.join('\n')}\ntotal: ${sum}`;
			}
			else {
				message_content = `${message.author}\n ${dice[0]}`;
			}

			if (message_content.length > 2000) {
				const sum_message = `${message.author} the length of the response exceeds Discord's message length limit. However, the sum of the rolls was ${sum}`;

				message.channel.send(sum_message);
				return;
			}

			message.channel.send(message_content);
		}
	},
};