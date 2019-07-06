const axios = require('axios');
const https = require('https');
const dotenv = require('dotenv');
dotenv.config();
const apiUrl = process.env.API_URL;

const agent = new https.Agent({
	rejectUnauthorized: false,
});

module.exports = {
	getPlayerCharacter(discordId) {
		return axios.get(`${apiUrl}playercharacter/${encodeURI(discordId)}`, { httpsAgent: agent });
	},
	createPlayerCharacter(discordId, name, characterClass, race) {
		return axios.post(`${apiUrl}playercharacter`, { discordId, name, class: characterClass, race }, { httpsAgent: agent });
	},
};