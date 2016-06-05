var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/test', function (req, res) {
  res.send('Hello again - test is working');
});

app.get('/', function (req, res) {
  res.send(generateAddressesInItaly());
});

app.listen(3000, function () {
  console.log('Accepting HTTP requests on port 3000');
});

function generateAddressesInItaly() {
	var numberOfAddresses = chance.integer({
		min: 0,
		max: 23
	});
	
	console.log(numberOfAddresses);
	
	var addresses = [];
	
	// generate unassociated elements (for addresses) in Italy
	for (var i = 0; i < numberOfAddresses; i++) {
		var country = 'it';
		var state = chance.state({
			country: country,
			full: true
		});
		var city = chance.city({
			country: country
		});
		var postal = chance.postal({
			country: country
		});
		var street = chance.street({
			country: country
		});
		
		addresses.push({
			country: country,
			state: state,
			city: city,
			postal: postal,
			street: street
		});
	}
	
	console.log(addresses);
	
	return addresses;
}