const express = require('express');

const routes = express.Router();

const JokeController = require('./controllers/JokeController');

routes.get('/', (req, res) => {
    res.send("Bem vindo!");
});
routes.post('/joke/create', JokeController.createJoke);
routes.post('/joke/get', JokeController.getJoke);
routes.get('/joke/getAll', JokeController.getAllJokes);

module.exports = routes;
