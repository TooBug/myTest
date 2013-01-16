var page = require('webpage').create();

page.open('http://exp.qq.com',function(){
	page.onConsoleMessage = function(msg){
		console.log('来自页面console的消息是：'+msg);
	};

	page.evaluate(function(){
		console.log($('#product .text b:eq(0)').text());
	});
	phantom.exit();

})