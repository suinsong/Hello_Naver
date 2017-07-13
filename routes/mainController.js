var request = require('request');
var naver_secret = require('./naver_secret.js')

module.exports =(app)=>{
	
	app.get('/',(req,res)=>{
		res.render('index')
	})
	
	
	app.post('/naver/book',(req,res)=>{
		
		let searchBook=req.body.searchBook
		
		// naver API 조회하기 위한 설정
		
		api_url = 'https://openapi.naver.com/v1/search/book.json';
		api_url += '?query='+ encodeURI(searchBook)
		
		// 옵션
		api_url += '&display='+20;
		
		var options ={
				url : api_url,
				headers : {
					'X-Naver-Client-Id': naver_secret.client_id,
					'X-Naver-Client-Secret': naver_secret.client_secret
				}
		};
		request.get(options,(err,response,result)=>{
			
			// 네이버에서 정상적으로 결과를 보내면
			if(!err && response.statusCode ==200){
				let result_json = JSON.parse(result).items
				
				// res.json(result_json)
				res.render('bookBox',{books:result_json})
				
			}else{
				res.status(response.statusCode).end();
				console.log(response.statusCode)
			}
		})
	})
	
	
	
	app.post('/naver/movie',(req,res)=>{
		

		let searchBook=req.body.searchBook
		
		// naver API 조회하기 위한 설정
		
		api_url = 'https://openapi.naver.com/v1/search/movie.json';
		api_url += '?query='+ encodeURI(searchBook)
		
		// 옵션
		api_url += '&display='+20;
		
		var options ={
				url : api_url,
				headers : {
					'X-Naver-Client-Id': naver_secret.client_id,
					'X-Naver-Client-Secret': naver_secret.client_secret
				}
		};
		request.get(options,(err,response,result)=>{
			
			// 네이버에서 정상적으로 결과를 보내면
			if(!err && response.statusCode ==200){
				let result_json = JSON.parse(result).items
				
				// res.json(result_json)
				res.render('bookBox',{books:result_json})
				
			}else{
				res.status(response.statusCode).end();
				console.log(response.statusCode)
			}
		})
	})
		
		
		

	app.post('/naver/news',(req,res)=>{
		

		let searchBook=req.body.searchBook
		
		// naver API 조회하기 위한 설정
		
		api_url = 'https://openapi.naver.com/v1/search/news.json';
		api_url += '?query='+ encodeURI(searchBook)
		
		// 옵션
		api_url += '&display='+20;
		
		var options ={
				url : api_url,
				headers : {
					'X-Naver-Client-Id': naver_secret.client_id,
					'X-Naver-Client-Secret': naver_secret.client_secret
				}
		};
		request.get(options,(err,response,result)=>{
			
			// 네이버에서 정상적으로 결과를 보내면
			if(!err && response.statusCode ==200){
				let result_json = JSON.parse(result).items
				
				// res.json(result_json)
				res.render('bookBox',{books:result_json})
				
			}else{
				res.status(response.statusCode).end();
				console.log(response.statusCode)
			}
		})
	})
		
		
		
	
}