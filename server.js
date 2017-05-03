var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/index.html', function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
});

app.get('/:timestamp', function(request, response) {
	var timestamp = request.params.timestamp;
	response.json(getTimestampJSON(timestamp));
});

function getTimestampJSON(timestamp) {
	var result = {
		unix: null,
		natural: null
	};

	var date;
	if (!isNaN(parseInt(timestamp))) {
		// timestamp is a valid number, it may be a unix timestamp.
		date = new Date(parseInt(timestamp*1000));
	} else {
	    // timestamp is not a valid number, it may be a natural language date.
		date = new Date(timestamp);
	}

	if (!isNaN(date.getTime())) {
	    // date.getTime() returns the unix timestamp.
		// if it where an invalid date, this would be NaN
		result.unix = date.getTime()/1000;
		result.natural = getNaturalDate(date);
	}

	return result;
}

function getNaturalDate(date) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}


app.listen(port, function(){
    console.log('Server is listening on port ' + port + '!');
});
