console.log("server is starting")

var express = require('express'); //import the express package
var app = express();
var server = app.listen(3000, listening);

function listening() {
  console.log("listening...");
}

app.use(express.static('meow'))


app.get('/meow', sendCat)

function sendCat(request, response) {
  response.send("meow meow")
}

app.get('/meow!', sendEx)

function sendEx(request, response) {
  response.send("!!!")
}

app.get('/meowwwww', sendQ)

function sendQ(request, response) {
  response.send("meow...")
}

app.get('/meooow', sendCry)

function sendCry(request, response) {
  response.send("meow T_T")
}
