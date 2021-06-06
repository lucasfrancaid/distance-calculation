const { Router } = require('express');
const DistanceController = require('./controllers/distanceController');

const routes = Router();

routes.post('/distance', DistanceController.distanceCalculation);

module.exports = routes;