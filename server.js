var express = require('express');
var app = express();
var path = require('path');

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
