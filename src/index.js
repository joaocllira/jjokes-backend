const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const server = require('http').Server(app);

mongoose.connect(
    // 'mongodb://jcll:jcll123@ds223685.mlab.com:23685/comm-esp',
    'mongodb://localhost:27017/jjokes',
    {
        useNewUrlParser: true
    }
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Database connected!");
});

app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(require('./routes'));

server.listen(3500, () => {
    console.log('Server started on port 3500');
});
