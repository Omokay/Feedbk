const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./services/passport.services');

const app = express();

require('./routes/auth.routes')(app);



app.listen(process.env.PORT || 5000);