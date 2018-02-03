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

app.post('/message',function (req,res){
	const obj={
		   user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
	}
	let answer;
	if(content=='안녕'){
		answer='안녕하세요'
	}
	else {
		answer='처리되지 않은 값입니다.'
	}
	let message = {
		"message":{
				"text": answer
		},
		"keyboard":{
			"type": "buttons",
			"buttons":[
				"메뉴1",
				"메뉴2",
				"메뉴3"
			]
		}
	}
	res.set({
		'content-type': 'application/json'
	}).send(JSON.stringify(message));
});

let server = app.listen(3031, function(){
	console.log('server is running in 3031');
})