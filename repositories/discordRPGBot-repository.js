const axios = require('axios');
const https = require('https');
const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

const agent = new https.Agent({  
    rejectUnauthorized: false
});

module.exports = {
    getPlayerCharacter(discordId) {
        return axios.get(`${apiUrl}playercharacter/${encodeURI(discordId)}`, { headers: { "X-API-KEY": apiKey }, httpsAgent: agent });
    },
    createPlayerCharacter(discordId, characterName) {
        return axios.post(`${apiUrl}playercharacter`, { discordId, characterName }, { headers: { "X-API-KEY": apiKey }, httpsAgent: agent });
    }
}