const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

const app = express();
app.use(userRoutes);

app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port);



