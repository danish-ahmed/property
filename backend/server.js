import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import middleWares from './middlewares';
import Promise from 'bluebird'

const app = express();
app.use(bodyParser.json())

var dburl = require('./config');


Promise.promisifyAll(require("mongoose"));
mongoose.connect(dburl.DB_URL)
    .then(() => console.log('Connected '))
    .catch(err => console.log(err));

//Dumy data
const properties = [
    {id:'212', title: 'My Property', type: 'rent', 'description':'aaaaaaaaaaa'},
    {id:'122', title: 'My Property', type: 'rent', 'description':'aaaaaaaaaaa'},
    {id:'222', title: 'My Property', type: 'rent', 'description':'aaaaaaaaaaa'}
]

app.get('/api/properties', (req, res) => {
    res.json({properties});
})
var apiRoutes = require('./modules')(app);

const Port = process.env.port || 3001;

app.listen(Port, () => {
    console.log('APP IS RUNNING on '+Port);
})