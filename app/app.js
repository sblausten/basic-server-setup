const express = require('express');
const routes = require('./routes/index');
const app = express();
var port = process.env.PORT || 4000;

app.use('/', routes);

app.listen(port, function(){
	console.log("Express app started - listening on port 3000");
})

module.exports = app;