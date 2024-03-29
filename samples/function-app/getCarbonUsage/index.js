module.exports = async function (context, req) {
	const axios = require('axios');
	const region = req.query.region || (req.body && req.body.region);
	console.log(region);

	var config = {
		method: 'get',
		url: 'https://api.co2signal.com/v1/latest?countryCode=' + region + '',
		headers: {
			//use your own token please
			'auth-token': 'c099158761a3a563',
		},
	};

	try {
		const { data } = await axios(config);
		context.log(data);
		context.res = { body: data.data };
		// do something with the data
		return data;
	} catch (err) {
		context.log(err);
		context.res = { body: data };
		// do something with the error
	}
};
