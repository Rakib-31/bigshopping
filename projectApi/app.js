var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./Research');
//connect to mongoose
mongoose.connect('mongodb://localhost/restfulapi');
var db = mongoose.connection;

app.get('/', function(req,res){
    res.send('Hello b world');
});
app.get('/research', function(req,res){
    res.send('Nothing working');
    Genre.getGenres(function(err, genres){
        res.send('everything not working');
        if (err)
          throw err;
        res.json(genres);
       // res.send(geners);
      });
      
    //res.send('A list will be shown which contains three elements.Departments,Researcher/contributor,Statistics');
});

app.get('/research/departments', function(req,res){
    res.send('Departments list will be shown');
});

app.get('/research/researcher', function(req,res){
    res.send('List of researcher name will be shown');
});

app.get('/research/statistics', function(req,res){
    res.send('Statistics will be shown based on total publications and members contribution');
});

app.listen(2000);
console.log('Running on port 2000');