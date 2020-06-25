const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
//const productRoutes= require('./routes/products');
//const servicesRoutes= require('./routes/services');
//const aboutRoutes= require('./routes/aboutUs');
const cors= require('cors');
const port = 8080;
const app = express();
app.use(cors());
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('views'));
app.get('/',(req,res)=>{
    res.render('index.html');
    //console.log(sheet1)
    
    //res.json(compiledData);
})

app.listen(port, ()=>{
    console.log('Server is up on port: ',port);
});