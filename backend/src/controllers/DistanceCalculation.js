const {distanceMatrixAPI, geocodingAPI} = require('./googleAPI');
const zoomDefiner = require('../utils/zoomDefiner');
const centerDefiner = require('../utils/centerDefiner');

let DistanceCalculation = require('../models/DistanceCalculation')

module.exports = {
  async distanceAPI(request, response) {
    try {
      const distanceMatrix = await distanceMatrixAPI(request)
      const geocodingOrigin = await geocodingAPI(request.body.origins)
      const geocodingDestination = await geocodingAPI(request.body.destinations)

      DistanceCalculation = {
        distance: distanceMatrix.json.rows[0].elements[0].distance.text,
        duration: distanceMatrix.json.rows[0].elements[0].duration.text,
        origins: geocodingOrigin.json.results[0].geometry.location,
        destinations: geocodingDestination.json.results[0].geometry.location,
      }
      
      DistanceCalculation.zoom = zoomDefiner(DistanceCalculation.distance)
      DistanceCalculation.center = centerDefiner(DistanceCalculation.origins, DistanceCalculation.destinations)

      return response.json(DistanceCalculation)
    } catch (error) {
      console.log(error)
    }
  }
}
