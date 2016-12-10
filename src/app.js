'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app = express();

var port = 3000;

app.get('/', function(req, res){
  res.send('<h1>Main route</h1>');
});

app.get('/blog/:title?', function(req, res){
  var title = req.params.title;
  if(title === undefined) {
    res.status(503);
    res.send('<h1>Blog route - Page under construction</h1>');
  } else {
    var post = posts[title];
    res.send(post);
  }
});

app.listen(port, function() {
  console.log(`Server listening at port: ${port}`);
});
