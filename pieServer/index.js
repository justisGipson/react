require('dotenv').config();

const express = require('express');
const app = express();
const pies = require('./controllers/piecontroller')
const sequelize = require('./db');
const bodyParser = require('body-parser')
const user = require('./controllers/usercontroller')

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`))

app.use(express.static(__dirname + '/public'))
console.log(__dirname)

app.use('/pies', pies)

sequelize.sync();

app.use(bodyParser.json())

app.use('/auth', user)

app.use(require('./middleware/headers'))