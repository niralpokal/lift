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
  this.planName = plan.planName;
  this.creator = plan.user;
  this.planLength = plan.planLength;
  this.day1 = new PlanTemplate(plan.day1);
  this.day2 = new PlanTemplate(plan.day2);
  this.day3 = new PlanTemplate(plan.day3);
  this.day4 = new PlanTemplate(plan.day4);
  this.day5 = new PlanTemplate(plan.day5);
  this.day6 = new PlanTemplate(plan.day6);
  this.day7 = new PlanTemplate(plan.day7);
  this.weeks = [];
  for (var i = 0; i<plan.planLength; i++){
    var object = {
      id:(i+1),
      name:"Week "+(i+1),
      workouts: []
    };
    this.weeks.push(object);
  }
}

function PlanTemplate(template){
  this.rest = template.rest;
  this.name = template.name;
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
        }else if (docs[0] == undefined) {
          res.sendStatus(401)
          db.close();
        }else {
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
          res.cookie('remember', true, {expires: new Date(Date.now()+ 900000)})
          res.sendStatus(200)
          db.close();
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
          res.send(docs);
          db.close();
        }
      })
    }
  })
});

app.put('/plan', jsonParser,  function(req, res) {
  var plan = {weeks: req.body}
  var id ={creator:ObjectID(req.cookies.id)}
  MongoClient.connect(url, function(err, db){
    if(err){
      res.sendStatus(503);
    }else {
      db.collection('plans').update(id, {$set:plan}, function(err, results){
        if (err){
          res.sendStatus(404);
          db.close();
        }else{
          res.sendStatus(200)
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
          res.sendStatus(200)
          db.close();
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
          res.send(docs);
          db.close();
        }
      })
    }
  })
});

app.get('/username/:id', function(req, res) {
  var x = req.params.id
  var user = {
    username:x
  }
  MongoClient.connect(url, function(err, db){
    if(err){
      res.sendStatus(503);
    }else{
      db.collection('users').find(user).toArray(function(err, docs){
        if(err){
          res.sendStatus(404);
          db.close();
        }else{
          res.send(docs);
          db.close();
        }
      })
    }
  })
});

if(!require.main.loaded){
  var port = process.env.PORT || 8080;
  app.listen(port, function(){});
}


module.exports = app;
