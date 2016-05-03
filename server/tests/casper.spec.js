casper.test.begin('Lets test the Login Feature', function(test){
  casper.start('http://localhost:8080',5,  function(){

  }).then(function(){
    test.assertTextExists('Lift', 'The splash screen is displayed');
    this.capture('test1.png')
     this.click('#login');
  }).then(function(){
    this.wait(2000, function(){
      this.fillSelectors('form[name="loginForm"]', {
         'input[name="username"]':    'niralpokal',
         'input[name="pass"]':    'niral',
     }, false);
     this.capture('test2.png')
     this.click('#loginBtn')
     this.wait(1000,function(){
        this.capture('test3.png')
     })
    })
  }).then(function (){
    this.wait(10000, function(){
    test.assertUrlMatch(/#\/home/, 'we are at the home page')
    test.assertTextExists('Niral', 'The welcome screen is displayed');
    this.click('#logout')
    this.capture('test4.png')
  })
  }).run(function(){
    test.done();
  })
})
