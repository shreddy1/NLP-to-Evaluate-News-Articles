const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
var bodyParser = require('body-parser');

var AYLIENTextAPI = require('aylien_textapi');
// set aylien API credentials
var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
});

app.post('/NLPAnalysis', function(req, res) {
    textapi.sentiment({
        'url': req.body.url,
    }, function(error, response) {
        if (error === null) {
            res.send(response);
        }
    });
});

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
});