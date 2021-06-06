const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const PORT = process.env.APP_PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/ping', (request, response) => {
    return response.send({
        message: 'pong'
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`)
});