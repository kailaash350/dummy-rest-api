var express = require('express');  
var app = express();  
var fs = require("fs");  
var bodyParser = require('body-parser');  

app.use(function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","GET");  
    next();  
  });  

  app.use(bodyParser.urlencoded({  
    extended: true  
}));  
  
app.use(bodyParser.json());  
  
app.get('/articleList', function (req, res) {  
   fs.readFile( __dirname + "/" + "article.json", 'utf8', function (err, data) {  
       res.end( data );  
   });  
})  
app.get('/sectionList', function (req, res) {  
    try {
        fs.readFile( __dirname + "/" + "section.json", 'utf8', function (err, data) {  
            res.end( data );  
        });  
        
    } catch (error) {
        res.send("500")
    }
 }) 
 app.get('/liveNews', function (req, res) {  
    fs.readFile( __dirname + "/" + "liveNews.json", 'utf8', function (err, data) {  
        res.end( data );  
    });  
 }) 
 app.get('/ads', function (req, res) {  
    fs.readFile( __dirname + "/" + "ads.json", 'utf8', function (err, data) {  
        res.end( data );  
    });  
 }) 

var server = app.listen(process.env.PORT || 8000, function () {  
  
    var host = server.address().address  
    var port = server.address().port  
    
    console.log("Example app listening at http://%s:%s", host, port)  
    
  })  