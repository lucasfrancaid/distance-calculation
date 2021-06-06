class DistanceCalculationEntity {
  constructor (distance, duration, origins, destinations, zoom, center) {
    this.distance = distance
    this.duration = duration
    this.origins = {
      lat: origins.lat,
      lng: origins.lng
    }
    this.destinations = {
      lat: destinations.lat,
      lng: destinations.lng
    }
    this.zoom = zoom
    this.center = {
      lat: center.lat,
      lng: center.lng
    }
  }
}

module.exports = DistanceCalculationEntity