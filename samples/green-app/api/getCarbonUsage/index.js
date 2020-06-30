module.exports = async function (context, req) {
	const axios = require('axios');
	const region = req.query.region || (req.body && req.body.region);
	console.log(region);
	axios
		.get('api.co2signal.com/v1/latest', {
			params: {
				countryCode: region,
				headers: {
					'auth-token': 'c099158761a3a563',
				},
			},
		})
		.then(function (response) {
			console.log(response);
			if (error == null) {
				context.res = { body: response.data };
				context.done();
			} else {
				context.res = { body: error };
				context.done();
			}
		});
};
