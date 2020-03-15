const { Router } = require('express');
const DistanceCalculation = require('./controllers/DistanceCalculation');

const routes = Router();

routes.post('/Distance', DistanceCalculation.distanceAPI);

module.exports = routes;