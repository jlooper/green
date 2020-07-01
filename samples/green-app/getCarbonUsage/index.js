module.exports = async function (context, req) {
	const axios = require('axios');
	const region = req.query.region || (req.body && req.body.region);
	console.log(region);
	var config = {
		method: 'get',
		url: 'https://api.co2signal.com/v1/latest?countryCode=US-NEISO',
		headers: {
			'auth-token': 'c099158761a3a563',
		},
	};

	axios(config)
		.then(function (response) {
			context.res = { body: response.data };
			context.done();
		})
		.catch(function (error) {
			context.res = { body: response.data };
			context.done();
		});
};
