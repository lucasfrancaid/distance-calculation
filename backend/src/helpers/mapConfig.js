function centerConfig(origins, destinations) {
  let center = { 
    lat: (origins.lat + destinations.lat) / 2, 
    lng: (origins.lng + destinations.lng) / 2 
  }
  return center
}

function zoomConfig(distance) {
  let distanceInt = distance.replace(',', '')
  distanceInt = parseInt(distanceInt, 10)
  
  switch(true) {
    case distanceInt <= 10:
      return 13
    case distanceInt > 10 && distanceInt <= 20:
      return 12
    case distanceInt > 20 && distanceInt <= 50:
      return 11
    case distanceInt > 50 && distanceInt <= 100:
      return 10
    case distanceInt > 100 && distanceInt <= 200:
      return 9
    case distanceInt > 200 && distanceInt <= 450:
      return 8
    case distanceInt > 450 && distanceInt <= 800:
      return 7
    case distanceInt > 800 && distanceInt <= 2000:
      return 6
    case distanceInt > 2000 && distanceInt <= 4000:
      return 5
    case distanceInt > 4000 && distanceInt <= 7500:
      return 4
    case distanceInt > 7500:
      return 3
  }
}

module.exports = { centerConfig, zoomConfig }