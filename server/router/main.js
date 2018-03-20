let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/keyboard', function (req, res) {
	const menu = {
		type: 'text'
	};
	res.set({
		'content-type': 'application/json'
	}).send(JSON.stringify(menu));
	// res.send('hello world');
});
function generateRan(low,high){
  let range = high - low + 1;
  return Math.floor(Math.random() * range);
}
app.post('/message',function (req,res){
  let user_key = decodeURIComponent(req.body.user_key); // user's key
  let type = decodeURIComponent(req.body.type); // message type
  let content = decodeURIComponent(req.body.content); // user's message
  const sejin=['더세진세진','28뽀모세진','개발해라, 세진!', '../sejin1.jpg'];
  let ranNum = generateRan(0,3);
	let ans,flag=1;
	if(content.includes('안녕'))	ans='안녕하세요'
	else if(content.includes('hello'))  ans='hello there'
		else if(content.includes('경영'))	ans='토마토맛토 vs 토맛토마토'
	else if(content.includes('재호'))	ans='크 꿀팁 감사~'	
	else if(content.includes('윤수'))	ans='정윤수 바보'
	else if(content.includes('영수'))	ans='노드마스터'
	else if(content.includes('정연'))	ans='아 형들 너무 보고싶어요 ㅠ'
	else if(content.includes('우찬'))	ans='한 번 해병대는 영원한 해병대'
	else if(content.includes('대호'))	ans='리액트마스터'
	else if(content.includes('완수'))	ans='호에엥'
	else if(content.includes('지수'))       ans='안녕하십니까 큰형님'
	else if(content.includes('석호'))       ans='썩고서코푸코'	
	else if(content.includes('병욱'))       ans='유니티 싫어요 언리얼 좋아요'
	else if(content.includes('민재'))       ans='안녕 민재야!'
	else if(content.includes('예본'))       ans='예본쓰 하이!'
	else if(content.includes('세진')) {
		if(ranNum == 3){
			type="photo";
		}		
		ans=sejin[ranNum];

	}
else if(content=='입력 방법')	{
		ans='입력방법은 ...'
		flag=2;
		console.log('input 입력 방법');
	}
	else if(content=='메뉴2')	ans='메뉴2에요!'
	else if(content=='메뉴3')	ans='메뉴3입니다~'
	else ans='처리되지 않은 값입니다.'	
	
	let message = {
		"message":{
			"text": ans
		}
		
	}
	let message2 = {
		"message":{
				"buttons":[
			"입력 방법",
			"메뉴2",
			"메뉴3"
			]
		}
	}
	if(flag==1){
		res.set({
			'content-type': 'application/json'
		}).send(message);
	}
	else{
		res.set({
			'content-type': 'application/json'
		}).send(message2);
	}
});
app.post('/friend', function(req, res){
	let user_key = decodeURIComponent(req.body.user_key);
	let message = {
		"message":{
			"text": "안녕하세요 토마토맛토입니다."
		}
	}
console.log('친구추가됨');
	res.set({
		'content-type': 'application/json'
	}).send(message);
});
let server = app.listen(3031, function(){
	console.log('server is running in 3031');
})
