let express = require('express');
let app = express();
let cors = require('cors');

  app.get('/keyboard', function (req, res) {
		const menu = {
			type: 'buttons',
			buttons: ["메뉴1", "메뉴2", "메뉴3"]
		};
		res.set({
			'content-type': 'application/json'
		}).send(JSON.stringify(menu));
		// res.send('hello world');
	});


let server = app.listen(3031, function(){
	console.log('server is running in 3031');
})