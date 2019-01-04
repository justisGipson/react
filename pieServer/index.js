const express = require('express');
const app = express();
const pies = require('./controllers/piecontroller')
const sequelize = require('./db');
const bodyParser = require('body-parser')

require('dotenv').config();

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`))

app.use(express.static(__dirname + '/public'))
console.log(__dirname)


app.use('/pies', pies)
// app.get('/pies', (req, res) => res.send('I love pie!'))

sequelize.sync();
// sequelize.sync({force: true});
app.use(bodyParser.json())