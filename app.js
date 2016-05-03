var app = require('express')();
var express = require('express');
var jsonParser = require('body-parser').json();
var cookieParser = require('cookie-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = "mongodb://lift:lift@ds019471.mlab.com:19471/lift"
var url2 = "mongodb://localhost:27017/lift"

app.use(express.static('./public/'));
app.use(cookieParser());

function CreateUser(user){
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.username = user.username;
  this.metric = user.metric;
  this.pass = user.pass;
  this.workoutPlan = [];
  this.goal = "";
  this.weight = user.weight;
  this.height = user.height;
  this.age = user.age;
}

function CreatePlan(plan){
  this.planName = plan.name;
  this.creator = plan.user;
  this.length = plan.length;
  this.week = {
    firstDay: new PlanTemplate(plan.day1),
    secondDay: new PlanTemplate(plan.day2),
    thirdDay: new PlanTemplate(plan.day3),
    fourthDay: new PlanTemplate(plan.day4),
    fifthDay: new PlanTemplate(plan.day5),
    sixthDay: new PlanTemplate(plan.day6),
    seventhDay: new PlanTemplate(plan.day7),
  }
  this.users = plan.users;
}

function PlanTemplate(template){
  this.rest = template.rest;
  this.date = 0;
  this.mood = "";
  this.notes = "";
  this.exercises = template.exercises;
}

app.post('/login', jsonParser, function(req, res) {
  var user = req.body;
  MongoClient.connect(url, function(err, db){
    if (err){
      res.sendStatus(503);
    }else{
      db.collection('users').find(user).toArray(function(err, docs){
        if(err){
          res.sendStatus(404)
          db.close();
        }else{
          db.close();
          res.cookie('remember', true, {expires: new Date(Date.now()+ 900000)})
          res.cookie('id', docs[0]._id);
          res.cookie('user', docs[0].username);
          res.sendStatus(200);
        }
      })
    }
  })
});

app.delete('/login', function(req, res){
  res.clearCookie('id');
  res.clearCookie('user');
  res.clearCookie('remember')
  res.sendStatus(200)
})

app.post('/user', jsonParser, function(req, res) {
  var user = new CreateUser(req.body);
  MongoClient.connect(url, function(err, db){
    if (err){
      res.sendStatus(503);
    }else{
      db.collection('users').insert([user], function(err, results){
        if(err){
          res.sendStatus(404)
          db.close();
        }else{
          res.cookie('remember', true, {expires: new Date(Date.now()+ 900000)})
          res.cookie('id', results.ops[0]._id);
          res.cookie('user', results.ops[0].username);
          res.sendStatus(200);
          db.close();
        }
      })
    }
  })
});

app.get('/user', function(req, res) {
  var user = {
    _id:ObjectID(req.cookies.id)
  };
  MongoClient.connect(url, function(err,db){
    if(err){
      res.sendStatus(503);
    }else{
      db.collection('users').find(user).toArray(function(err, docs){
        if (err){
          res.sendStatus(404);
          db.close();
        }else{
          res.cookie('remember', true, {expires: new Date(Date.now()+ 900000)})
          res.cookie('id', docs[0]._id);
          res.cookie('user', docs[0].username);
          res.send(docs[0]);
          db.close();
        }
      })
    }
  })
});

app.put('/user', jsonParser, function(req,res){
  var id = {
    _id:ObjectID(req.cookies.id)
  }
  var user = req.body;
  MongoClient.connect(url, function(err, db){
    if(err){
      res.sendStatus(503)
    }else{
      db.collection('users').update(id, {$set:user},function(err, results){
        if(err){
          res.sendStatus(404);
          db.close();
        }else{
          res.sendStatus(200);
          db.close();
        }
      })
    }
  })
})

app.delete('/user', function(req,res){
  var user = {
    _id:ObjectID(req.cookies.id)
  }
  MongoClient.connect(url, function(err, db){
    if(err){
      res.sendStatus(503);
    }else{
      db.collection('users').remove(user, function(err, results){
        if (err){
          res.sendStatus(404);
          db.close();
        }else{
          res.clearCookie('id');
          res.clearCookie('user');
          res.clearCookie('remember')
          res.sendStatus(200);
          db.close();
        }
      })
    }
  })
});

app.post('/plan', jsonParser, function(req, res) {
  req.body.user = ObjectID(req.cookies.id);
  var plan = new CreatePlan(req.body)
  MongoClient.connect(url, function(err,db){
    if(err){
      res.sendStatus(503);
    }else {
      db.collection('plans').insert([plan], function(err, results){
        if(err){
          res.sendStatus(404)
          db.close();
        }else{
          db.close();
          res.cookie('remember', true, {expires: new Date(Date.now()+ 900000)})
          res.sendStatus(200)
        }
      })
    }
  })
});

app.get('/plan', function(req, res) {
  var plan = {
    creator:ObjectID(req.cookies.id)
  }
  MongoClient.connect(url, function(err, db){
    if(err){
      res.sendStatus(503);
    }else {
      db.collection('plans').find(plan).toArray(function(err, docs){
        if (err){
          res.sendStatus(404);
          db.close();
        }else{
          res.send(docs[0]);
          db.close();
        }
      })
    }
  })
});

app.delete('/plan', jsonParser, function(req, res) {
  var plan = req.body;
  MongoClient.connect(url, function(err, db){
    if(err){
      res.sendStatus(503);
    }else{
      db.collection('plans').remove(plan, function(err, results){
        if(err){
          res.sendStatus(404)
          db.close();
        }else{
          db.close();
          res.sendStatus(200)
        }
      })
    }
  })
});

app.get('/exercise/:id/', function(req, res) {
  var x = req.params.id
  var exercise = {
    id:new RegExp(''+x+'', 'i')
  }
  MongoClient.connect(url, function(err, db){
    if(err){
      res.sendStatus(503);
    }else{
      db.collection('workouts').find(exercise).toArray(function(err, docs){
        if(err){
          res.sendStatus(404);
          db.close();
        }else{
          db.close();
          res.send(docs);
        }
      })
    }
  })
});

if(!require.main.loaded){
  var server = app.listen(8080)
}

module.exports = app;
