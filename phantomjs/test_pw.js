var loginPage = require('webpage').create();
var mainPage = require('webpage').create();

loginPage.open('http://new.prowork.oa.com/user/ghostmode/usname/robyi',function(){

	loginPage.render('pw_step0.png');
	loginPage.open('http://new.prowork.oa.com',function(){

		loginPage.render('pw_step1.png');

		loginPage.evaluate(function(){

			// loginPage.render('pw_step1.png');

			$('#task_table span[title=测试自动化测试]').parent().click();
			// loginPage.render('pw_step2.png');

			$('.popup .workrow input[name=detail]').val('来自phantomjs');
			// loginPage.render('pw_step3.png');

			$('.popup .ctrl button.dialog_ok_btn').click();
			// loginPage.render('pw_step4.png');

		});

		phantom.exit();

	});


})