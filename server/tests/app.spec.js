var request = require('request');
var chai = require('chai');
var assert = chai.assert;
var app = require('./app.js')
var RANDOMIZE = 0;
var server = app.listen(RANDOMIZE);
var port = server.address().port;
var request = request.defaults({jar:true});

describe('Lets test login routes', function(){
  it('I am making a new user', function(done){
    this.timeout(5000)
    request({
      method: 'POST',
      url: 'http://localhost:' + port+ '/user',
      json:{username:'tom', pass:'tom',firstName:'Tom', lastName:'Smith', weight:180, height:72, age:24, metric:'lbs' }
    }, function(err, response, body){
      if(!err && response.statusCode==200){
        done();
      }else if(err){
        throw(err);
      }
    })
  })
  it('I am geting the user info', function(done){
    this.timeout(5000)
    request({
      method: 'GET',
      url: 'http://localhost:'+ port+ '/user'
    },function(err, response, body){
      if(!err && response.statusCode==200){
        assert.isAtLeast(body.length, 1, 'we found something');
        done();
      }else if(err){
        throw(err);
      }
    })
  })
  it('I am logging out', function(done){
    this.timeout(5000)
    request({
      method: 'DELETE',
      url:'http://localhost:'+ port+ '/login'
    }, function(err, response, body){
      if(!err && response.statusCode==200){
        done();
      }else if(err){
        throw(err);
      }
    })
  })
  it('I am logging in', function(done){
    this.timeout(5000)
    request({
      method: 'POST',
      url:'http://localhost:'+ port+ '/login',
      json: {username: 'tom', pass:'tom'}
    }, function(err, response, body){
      if(!err && response.statusCode==200){
        assert.isAtLeast(body.length, 1, 'we found something');
        done();
      }else if(err){
        throw(err);
      }
    })
  })
  it('I am deleting the user', function(done){
    this.timeout(5000)
    request({
      method: 'DELETE',
      url:'http://localhost:'+ port+ '/user'
    }, function(err, response, body){
      if(!err && response.statusCode==200){
        done();
      }else if(err){
        throw(err);
      }
    })
  })
})
