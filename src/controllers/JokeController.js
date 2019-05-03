const Model = require('../models/Joke');

module.exports = {
    async createJoke(req, res) {  
        var joke = new Model.Joke(req.body);

        joke.createdAt = new Date();

        await joke.save(function (err, objetoSalvo) {
            if (err) return console.error(err);
        });
        
        console.log(joke); 

        return res.json(joke);
    },

    async getJoke(req, res) {
        var {id} = req.body;

        var joke = null;

        await Model.Joke.findById(id, (err, resultado) => {
            if (err) return console.error(err);
            joke = resultado;
        });

        console.log(joke);

        return res.json(joke);
    },

    async getAllJokes(req, res) {
        var jokes = [];

        await Model.Joke.find((err, resultado) => {
            if (err) return console.error(err);
            jokes = resultado;
        });

        console.log(jokes);

        return res.json(jokes);
    }
};