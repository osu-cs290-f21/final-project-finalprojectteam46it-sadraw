var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')
var postData = require('./postData.json')
console.log("==postData:", postData)

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/', function (req, res, next){
  if(postData){
  var postInfo = {
    posts: postData,
  }
  res.status(200).render('homePage', postInfo)
} else {
  //res.status(200).sendFile(path.join(__dirname, 'public', 'index.html')); // change later
  next()
}
});

// If none of previous found, 404 Page
app.get("*", function (req, res) {
  res.status(404).render('404', {
    path: req.url
  })
});

// Open the port for listening and start the server on port 3000
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
