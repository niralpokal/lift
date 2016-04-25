var app = require('express')();
var express = require('express');
var jsonParser = require('body-parser').json();
var cookieParser = require('cookie-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = " mongodb://lift:lift@ds019471.mlab.com:19471/lift"

app.use(express.static('./public'));
app.use(cookieParser());

app.post('/login', jsonParser, function(req, res) {
  var user = req.body;
  MongoClient.connect(url, function(err, db){
    if (err){
      throw err;
    }else{
      db.collection('users').find(user).toArray(function(err, docs){
        if(err){
          throw err
        }else{
          res.cookie('remember', true, {expires: new Date(Date.now()+ 900000)})
          res.cookie('id', docs[0]._id);
          res.cookie('user', docs[0].username);
          res.send(docs[0]);
        }
      })
    }
  })

});

app.post('/singup', jsonParser, function(req, res) {

});
