describe('第一次单元测试',function(){
	it('算数的结果总是比较容易预测',function(){
		expect(1+2).toEqual(3);
	});
	it('再测一下不通过的',function(){
		expect(1+2).toEqual(2);
	});
});