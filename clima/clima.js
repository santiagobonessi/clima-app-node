const axios = require('axios');

const getClima = async(lat, lng) => {
    
    const units = 'metric';
    const appid = '32f843d833c38373032f825c4a92418a';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=${units}`);

    return resp.data.main.temp;
}

module.exports = {
    getClima,
}