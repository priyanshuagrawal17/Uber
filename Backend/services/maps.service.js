const axios = require('axios');
const captainModel = require('../models/captain.model');

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
    if (!apiKey) {
        throw new Error('OLA_MAPS_API key is missing from environment variables.');
    }
    const url = `https://api.ola.maps/v1/directions?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;

     try{
        const response = await axios.get(url, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
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
        console.error("Error fetching directions from OLA Maps: ", err.response ? err.response.data : err.message);
        throw new Error("Failed to get directions from maps service.");
     }
}

module.exports.getAutoCompleteSuggestions = async (origin, destination) => { 
    // Use the last non-empty value as the input for suggestions
    const input = destination && destination.trim().length > 0 ? destination : origin;
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

module.exports.getCaptainsInTheRadius = async (lat, lng, radius) => {
    // radius in km
    const captains = await captainModel.find({
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [lng, lat]
                },
                $maxDistance: radius * 1000 // Convert km to meters
            }
        }
    });
    return captains;
}