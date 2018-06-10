const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/config');

const app = express();

app.listen(config.port,()=>{
    console.log('Server started on port :' + config.port);
});