
let homepage = require('../pages/homepage');

describe('Demo calci test',function(){
    it('addition test',function(){

        //browser.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('4');
        //element(by.model('second')).sendKeys('4');
       // element(by.css('[ng-click="doAddition()"]')).click();
       homepage.get('http://juliemr.github.io/protractor-demo/');

       homepage.enterFirstNumber('4');

       homepage.enterSecondNumber('3');

       homepage.clickGo();

       homepage.verifyResult('7');

       browser.sleep(2000)

       // let result = element(by.cssContainingText('.ng-binding', '8'));

        //expect(result.getText()).toEqual('8')
       

    });
});