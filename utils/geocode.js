const request = require("request")

const geoCode =(adresse, callback)=>{
        const urlGeocode = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ adresse +".json?access_token=pk.eyJ1IjoiaWx5YXNhaGphcmkiLCJhIjoiY2tlcjJocmM1MngzbjJzcGNoZ29xaTF2MyJ9.x4OJBfXJtOgEf9IXOWnUqg&limit=1";
        
        request({ url: urlGeocode}, (error, response) =>{
            const data = JSON.parse(response.body);
            callback({
                lantitude : data.features[0].center[0],
                longitude : data.features[0].center[1]
            })
            // console.log(dataInfo)
        })
    }

module.exports= geoCode