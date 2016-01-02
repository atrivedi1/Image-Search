var express = require('express');
var app = express();


var port = process.env.PORT || 3000;

app.use(express.static('client'))


app.listen(port,function(){
  console.log("Listening at localhost:" + port);
});
