require('dotenv/config');
const googleMapsClient = require('@google/maps').createClient({ key: process.env.GOOGLE_API_KEY, Promise: Promise});

module.exports = {

    distanceMatrixAPI(request) {
        const { origins, destinations, mode } = request.body
        return googleMapsClient.distanceMatrix({ origins, destinations, mode }).asPromise()
    },
      
    geocodingAPI(request) {
        const address = request
        return googleMapsClient.geocode({ address }).asPromise()
    }
}