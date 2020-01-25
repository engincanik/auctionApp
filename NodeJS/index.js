const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var bidController = require('./controllers/bidController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors( {origin: 'http://localhost:4200' } ));
//Listen on port 3000
app.listen(3000, () => console.log('Server started at port: 3000'));
app.use('/bids', bidController); 