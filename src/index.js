export default {
  async fetch(request) {
	const clientIp = request.headers.get('CF-Connecting-IP') || 'Unknown IP';
	const country = request.headers.get('CF-IPCountry') || 'Unkown country';
	const data = {
		ip: clientIp,
		message: "success",
		country: {
			code: request.cf.country,
			name: country,
		},
		cf: request.cf,
	};
	return Response.json(data);
  },
};
