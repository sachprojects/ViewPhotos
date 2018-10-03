const request = require("request");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const key = 'afaca5b01abb45e0ac749fffa756cc60';

//app.use(express.static(__dirname, '/dist'));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/:searchTag', (req, res) => {
    var searchTag = req.params.searchTag;
    request({
        url: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${searchTag}&per_page=48&format=json&nojsoncallback=1`,
        json: true,
    }, (error, response, body) => {
        if (error) return res.status(400).send(err);

        res.status(200).send(body);
    });
});

app.all('*', (req, res) => {
    request({
        url: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&per_page=48&format=json&nojsoncallback=1`,
        json: true,
    }, (error, response, body) => {
        if (error) return res.status(400).send(err);

        res.status(200).send(body);
    });
});

app.listen(port, () => {
    console.log(`Started server at port ${port}`);
});