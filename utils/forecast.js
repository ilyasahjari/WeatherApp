const request = require('request')

const forcast=(lantitude, longitude, callback)=>{
    const forcastUrl = "http://api.weatherstack.com/current?access_key=f0e948eba850cc281b485379b039e39b&query="+ longitude +"," + lantitude;
    
    request({url: forcastUrl}, (error, response)=>{
        const data = JSON.parse(response.body)
        //console.log(data);
        callback
            ({
                temperature : data.current.temperature,
                name : data.location.name,
                region : data.location.region
            });
    })

}

module.exports = forcast