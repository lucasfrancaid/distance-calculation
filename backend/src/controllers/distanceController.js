const { zoomConfig, centerConfig } = require('../helpers/mapConfig');
const GoogleApiClient = require("../services/googleApi");
const DistanceCalculationEntity = require("../entities/DistanceCalculationEntity");

async function distanceCalculation(request, response) {
  try {
    const { origins, destinations, mode } = request.body;
    const client = new GoogleApiClient();
    const distanceMatrix = await client.distanceMatrixAPI(origins, destinations, mode)
    const geocodingOrigin = await client.geocodingAPI(origins)
    const geocodingDestination = await client.geocodingAPI(destinations)

    const entity = new DistanceCalculationEntity(
      distanceMatrix.distance.text,
      distanceMatrix.duration.text,
      geocodingOrigin,
      geocodingDestination,
      zoomConfig(distanceMatrix.distance.text),
      centerConfig(geocodingOrigin, geocodingDestination),
    )
    
    return response.json(entity)

  } catch (error) {
    console.log('ERROR:', error)
    return response.status(500).json({message: error})
  }
}

module.exports = { distanceCalculation }