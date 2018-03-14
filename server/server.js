'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Image = require('../src/models/image.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://jfleetham:rainbowasd123@ds029705.mlab.com:29705/rainbow');

const PORT = process.env.PORT || 8080;

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g https://prosper.auth0.com
        jwksUri: "https://fleetham.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'rainbow.com',
    issuer: 'https://fleetham.auth0.com/',
    algorithms: ['RS256']
});

app.get('/api', (req, res) => {
  res.json({ message: 'API Initalized! '});
})

//adding the /comments route to our /api router
app.get('/api/images', (req, res) => {
    Image.find(function(err, images) {
        if (err)
            res.send(err);
        //responds with a json object of our database comments.
        res.json(images)
    });
})
app.post('/api/images', (req, res) => {
    const image = new Image();
    //body parser lets us use the req.body
    image.title = req.body.title;
    image.description = req.body.description;
    image.photo = req.body.photo;
    image.save(function(err) {
        if (err)
            res.send(err);
        res.json({
            message: 'Image successfully added!'
        });
    });
});

app.put('/api/images/:image_id', (req, res) => {
  Image.findById(req.params.image_id, function(err, image) {
    if (err)
      res.send(err);
    (req.body.title) ? image.title = req.body.title: null;
    (req.body.description) ? image.description = req.body.description: null;
    (req.body.photo) ? image.photo = req.body.photo: null;
    image.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: 'Image has been updated'
      });

    });
  });
});

app.delete('/api/images/:image_id', (req, res) => {
  Image.remove({
    _id: req.params.image_id
  }, function(err, image) {
    if (err)
      res.send(err);
    res.json({
      message: 'Image has been deleted'
    })
  })
});
//Use our router configuration when we call /api
//...

app.listen(PORT);
console.log('Listening on localhost:3333');
