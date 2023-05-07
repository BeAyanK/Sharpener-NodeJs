const http = require('http');

const path = require('path');
// const localStorage = require('node-localstorage');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const contactRoutes = require('./routes/contactus');

const errController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);

app.use(shopRoutes);

app.use(contactRoutes)

app.use(errController.get404);

app.listen(3000);
