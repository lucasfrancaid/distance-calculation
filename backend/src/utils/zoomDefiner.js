module.exports = function zoomDefiner(distance) {
    let distanceInt = distance.replace(',', '')
    distanceInt = parseInt(distanceInt, 10)
   
    if (distanceInt <= 10) return 13
    if (distanceInt > 10 && distanceInt <= 20) return 12
    if (distanceInt > 20 && distanceInt <= 50) return 11
    if (distanceInt > 50 && distanceInt <= 100) return 10
    if (distanceInt > 100 && distanceInt <= 200) return 9
    if (distanceInt > 200 && distanceInt <= 450) return 8
    if (distanceInt > 450 && distanceInt <= 800) return 7
    if (distanceInt > 800 && distanceInt <= 2000) return 6
    if (distanceInt > 2000 && distanceInt <= 4000) return 5
    if (distanceInt > 4000 && distanceInt <= 7500) return 4
    if (distanceInt > 7500) return 3
  }
  