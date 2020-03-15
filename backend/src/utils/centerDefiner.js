module.exports =  function centerDefiner(origins, destinations) {
    let center = { 
      lat: (origins.lat + destinations.lat) / 2, 
      lng: (origins.lng + destinations.lng) / 2 
    }
    return center
  }