var app = require('express')();
var express = require('express');
var jsonParser = require('body-parser').json();
var cookieParser = require('cookie-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = " mongodb://lift:lift@ds019471.mlab.com:19471/lift"

app.use(express.static('./public'));
app.use(cookieParser());

function User(user){
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.username = user.username;
  this.pass = user.pass;
  this.workoutPlan = 0;
  this.goal = "";
  this.weight = user.weight;
  this.height = user.height;
  this.age = user.age;
  this.pic = user.pic;
}


app.post('/login', jsonParser, function(req, res) {
  var user = req.body;
  MongoClient.connect(url, function(err, db){
    if (err){
      res.sendStatus(503);
      db.close();
    }else{
      db.collection('users').find(user).toArray(function(err, docs){
        if(err){
          res.sendStatus(404)
          db.close();
        }else{
          res.cookie('remember', true, {expires: new Date(Date.now()+ 900000)})
          res.cookie('id', docs[0]._id);
          res.cookie('user', docs[0].username);
          res.sendStatus(200);
          db.close();
        }
      })
    }
  })
});

app.post('/user', jsonParser, function(req, res) {
  var user = new User(req.body);
  MongoClient.connect(url, function(err, db){
    if (err){
      res.sendStatus(503);
      db.close();
    }else{
      db.collection('users').insert([user], function(err, docs){
        if(err){
          res.sendStatus(404)
          db.close();
        }else{
          res.cookie('remember', true, {expires: new Date(Date.now()+ 900000)})
          res.cookie('id', docs[0]._id);
          res.cookie('user', docs[0].username);
          res.sendStatus(200);
          db.close();
        }
      })
    }
  })
});

app.get('/user', function(req, res) {
  var user = {
    _id:ObjectID(req.cookies.id);
  };
  MongoClient.connect(url, function(err,db){
    if(err){
      res.sendStatus(503);
      db.close();
    }else{
      db.collection('users').find(user).toArray(function(err, docs){
        if (err){
          throw err;
        }else{
          res.send(docs[0]);
          db.close();
        }
      })
    }
  })
});
