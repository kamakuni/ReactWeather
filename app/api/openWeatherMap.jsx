var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=5cae901deb4686eb1279652f494308f3';

module.exports = {
    getTemp: function(location){
        var encodedLoction = encodeURIComponent(location);
        var requireUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLoction}`;

        return axios.get(requireUrl).then(function(res){
            if(res.data.cod && res.data.messgae) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}
