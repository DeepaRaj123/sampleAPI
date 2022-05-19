const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

const app = express();
app.use(userRoutes);

app.use(bodyParser.json());

app.listen(3000);



