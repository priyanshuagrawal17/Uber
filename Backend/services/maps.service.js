const axios = require('axios');

module.exports.getAddressCoordinates = async (address) => {
    try {
        const response = await axios.get('https://api.ola.maps/v1/geocode', {
            params: {
                address: address
            },
            headers: {
                'Authorization': `Bearer ${process.env.OLA_MAPS_API}`
            }
        });

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to get coordinates for the provided address.');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if(!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.OLA_MAPS_API;
    const url = `https://api.ola.maps/v1/directions?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;

     try{
        const response = await axios.get(url);
        if(response.data.status === 'OK') {
 
             if(response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
                throw new Error('No route found between the provided locations.');
             }

            return response.data.rows[ 0 ].elements[ 0 ];
        }
        else {
            throw new Error('Unable to get distance and time for the provided locations.');
        }

     
    } catch (err){
        console.log(err);
        throw err;
     }
}

module.exports.getAutoCompleteSuggestions = async (input) => { 
    if (!input) {
        throw new Error('query is required for autocomplete suggestions');
    }

    const apiKey = process.env.OLA_MAPS_API;
    const url = `https://api.ola.maps/v1/autocomplete?input=${encodeURIComponent(input)}`;
    
    try{
        const response = await axios.get(url);
        if (response.data.status === 'OK'){
            return response.data.predictions;
        }else{
            throw new Error('Unable to fetch autocomplete suggestions');
        }
    }catch(err){
        console.error(err);
        throw err;
    }
}