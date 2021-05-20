const express = require('express');
const passport = require('passport');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const app = express();

require('./models/users.model');
require('./services/passport.services');

const cookieSession = require('cookie-session');

// Connection to MongoDB
const uri = keys.mongoURL;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => console.log(err.message))

// Cookie config
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

// Enabling passport to use cookie
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth.routes')(app);


const port = (process.env.PORT || 5000);
app.listen(port, () => console.log('Server is up'));
