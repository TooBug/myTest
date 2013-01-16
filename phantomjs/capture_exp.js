var page = require('webpage').create();

page.open('http://exp.qq.com',function(){

	page.render('exp.png');
	phantom.exit();

})