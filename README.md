<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/lucasfrancaid/DistanceCalculation">
    <img src="web/public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Distance Calculation</h3>

  <p align="center">
    Calculate the distance between two addresses!
    <br />
    <a href="https://distance-calculation.netlify.com/"><strong>https://distance-calculation.netlify.com/</strong></a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [DistanceCalculationAPI](#using-the-distancecalculationapi)
* [License](#license)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About the project

<a href="https://github.com/lucasfrancaid/DistanceCalculation"><img src="web/public/favicon.ico" alt="Logo" width="15" height="15"></a>
[Distance Calculation](https://distance-calculation.netlify.com/)

This project was created to calculate the distance between two addresses, and return the view of the distance, travel time and the origin and destination markers(pin) on the map.

<strong>API's used</strong>
* [Distance Matrix](https://developers.google.com/maps/documentation/distance-matrix/intro?hl=pt-br) from Google Maps API
* [Geocoding](https://developers.google.com/maps/documentation/geocoding/start?hl=pt-br) from Google Maps API

It is important to note that when thinking about some new features, I was able to do a search in which I can use the Directions API to return distance, duration, latitude and longitude, in addition to the polylines, which allow me to define in addition to the markers, the way to be traveled between origin and destination. (But it is for a next project...)

### Built With
* [Node.js](https://nodejs.org/)
* [ReactJS](https://reactjs.org/)
* [Express](https://expressjs.com/)
* [Google Maps](https://github.com/googlemaps/google-maps-services-js)



<!-- USING THE API -->
## Using the DistanceCalculationAPI

It is possible to consume the DistanceCalculation API for this project by sending as <strong>parameters</strong>: 
* <strong>origins</strong> (source address) 
* <strong>destinations</strong> (destination address) 
* <strong>mode</strong> (walking, driving or bicycling)

Make a request (POST) in https://distance-calculation.herokuapp.com/Distance
<p>Example:
<pre><code>{
	"origins": "São Paulo, SP",
	"destinations": "Rio de Janeiro, RJ",
	"mode": "driving"
}</code></pre></p>

<p>The return will come with the following <strong>properties</strong>:
<pre><code>{
  "distance": "434 km",
  "duration": "5 hours 34 mins",
  "origins": {
    "lat": -23.5505199,
    "lng": -46.63330939999999
  },
  "destinations": {
    "lat": -22.9068467,
    "lng": -43.1728965
  },
  "zoom": 8,
  "center": {
    "lat": -23.2286833,
    "lng": -44.90310294999999
  }
}</code></pre></p>



<!-- LICENSE -->
## License

Distributed under the MIT License.



<!-- CONTACT -->
## Contact

Lucas França - https://www.linkedin.com/in/lucasfrancaid/



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/lucasfrancaid
