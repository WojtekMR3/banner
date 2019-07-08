var express = require('express');
var app = express();
var count = 0;

var online = 0;

app.get("/", function(req, res) {
    res.send(count.toString() + " Online ppl: " + online);
    count++;
});

app.listen(3000);

function onlineRelania () {
  online = Math.floor(Math.random() * (100 - 1)) + 1;
  setTimeout(onlineRelania, 1000);
}
console.log("started!");
onlineRelania();
