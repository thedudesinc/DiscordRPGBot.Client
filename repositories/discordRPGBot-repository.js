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
		return axios.get(`${apiUrl}PlayerCharacter/${encodeURI(discordId)}`, { httpsAgent: agent });
	},
	createPlayerCharacter(discordId, name, characterClass, race) {
		return axios.post(`${apiUrl}PlayerCharacter`, { discordId, name, class: characterClass, race }, { httpsAgent: agent });
	},
	listPlayerCharacters(discordId) {
		return axios.get(`${apiUrl}PlayerCharacter/GetAllByDiscordId/${encodeURI(discordId)}`, { httpsAgent: agent });
	},
	setActiveCharacter(discordId, orderId) {
		return axios.get(`${apiUrl}PlayerCharacter/SetActiveCharacterByOrderedName/${encodeURI(discordId)}/${encodeURI(orderId)}`, { httpsAgent: agent });
	},
};