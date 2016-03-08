var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('weather.html', { root:  'public' });
});

router.get('/getcity',function(req,res,next) {
  var myRe = new RegExp("^" + req.query.q);
  fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
    if(err) throw err;
    var cities = data.toString().split("\n");
    var jsonresult = [];
    for(var i = 0; i < cities.length; i++) {
      var result = cities[i].search(myRe); 
      if(result != -1) {
        jsonresult.push({city:cities[i]});
      } 
    }   
    res.status(200).json(jsonresult);        
  }) 
});

router.get('/test1.html', function(req, res, next) {
  res.sendFile('test1.html', { root: 'public' });
});

router.get('/test2.txt', function(req, res, next) {
  res.sendFile('test2.txt', { root: 'public' });
});

router.get('/test3.gif', function(req, res, next) {
  res.sendFile('test3.gif', { root: 'public' });
});

router.get('/test4.jpg', function(req, res, next) {
  res.sendFile('test4.jpg', { root: 'public' });
});

module.exports = router;
