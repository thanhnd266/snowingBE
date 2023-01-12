
require('dotenv').config()
const express = require('express');
const connectToDB = require('./config/db');
const morgan = require('morgan');
const helmet = require('helmet');
const router = require('./routes');
const port = process.env.PORT || 8800;

const app = express();

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).send('Hello hello world');
})

//Routes
app.use(router);

connectToDB();

app.listen(port, () => {
    console.log('Listen to port', port);
})

