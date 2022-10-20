require('dotenv').config({
    path: 'settings.env'
});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use('/api', routes);

server.listen(process.env.PORT)