'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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

app.get('/api/images', (req, res) => {
  let images = [
  {
    id: 1,
    title: "this is item 1",
    description: "",
    photo: ""
  },
  {
    id: 2,
    title: "this is item 2",
    description: "",
    photo: ""
  },
  {
    id: 3,
    title: "this is item 3",
    description: "",
    photo: ""
  },
  {
    id: 4,
    title: "this is item 4",
    description: "",
    photo: ""
  },
  {
    id: 5,
    title: "this is item 5",
    description: "",
    photo: ""
  },
  {
    id: 6,
    title: "this is item 6",
    description: "",
    photo: ""
  }
  ];
  res.json(images);
})

app.listen(3333);
console.log('Listening on localhost:3333');
