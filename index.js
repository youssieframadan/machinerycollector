var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const getData = require('./ScrapeData');
const product = require('./models/product');
var cors = require('cors');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

console.log("hi");

mongoose.connect("mongodb://localhost:27017/machinecollector",{useNewUrlParser:true,useUnifiedTopology: true})
        .then(() => console.log('mongoDB Connected'))
        .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 3000;

var Router = express.Router();

Router.get('/',(req,res)=>{
    res.json({message:'API IS WORKING'});
});

Router.get('/products',(req,res)=>{
    product.find({},function(err,products){
        res.json(products);
    });
})

app.use('/api',Router);

app.listen(port);
console.log('Connected to server on port: '+port);

getData();