const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jimp = require('jimp');

const config = require('./config/config');

const app = express();

//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

jimp.read("img/lena.jpg", function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)            // resize
        .quality(60)                 // set JPEG quality
        .greyscale()                 // set greyscale
        .write("lena-small-bw.jpg"); // save
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(config.port,()=>{
    console.log('Server started on port :' + config.port);
});