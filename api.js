const http = require('https');

const options = {
	method: 'GET',
	hostname: 'mlb-data.p.rapidapi.com',
	port: null,
	path: '/json/named.org_game_type_date_info.bam?game_type=\'L\'&season=\'2017\'',
	headers: {
		'X-RapidAPI-Key': 'efe7d8fe91mshcb6c94cebf62c73p1d8ea1jsneb40a6badcaa',
		'X-RapidAPI-Host': 'mlb-data.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();