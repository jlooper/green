module.exports = async function (context, req) {
	const axios = require('axios');
	const region = req.query.region || (req.body && req.body.region);
	console.log(region);

	var config = {
		method: 'get',
		url: 'https://api.co2signal.com/v1/latest?countryCode=' + region + '',
		headers: {
			'auth-token': 'c099158761a3a563',
		},
	};

	try {
		const { data } = await axios(config);
		context.log(data);
		// do something with the data
		return data;
	} catch (err) {
		context.log(err);
		// do something with the error
	}
};
