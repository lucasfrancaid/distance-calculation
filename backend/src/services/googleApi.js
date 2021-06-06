const { Client } = require('@googlemaps/google-maps-services-js');

class GoogleApiClient {
  constructor () {
    this.client = new Client({});
    this.apiKey = process.env.GOOGLE_API_KEY;
    this.timeout = 3000;
  }

  distanceMatrixAPI(origins, destinations, mode) {
    return new Promise((resolve, reject) => {
      this.client.distancematrix({
        params: {
          origins: [origins],
          destinations: [destinations],
          mode,
          key: this.apiKey
        },
        timeout: this.timeout
      })
      .then(response => resolve(response.data.rows[0].elements[0]))
      .catch(error => {
        console.log('ERROR:', error)
        reject();
      })
    })
  }

  geocodingAPI(address) {
    return new Promise((resolve, reject) => {
      this.client.geocode({
        params: {
          address,
          key: this.apiKey
        },
        timeout: this.timeout
      })
      .then(response => resolve(response.data.results[0].geometry.location))
      .catch(error => {
        console.error('ERROR:', error)
        reject();
      })
    })
  }

}

module.exports = GoogleApiClient;