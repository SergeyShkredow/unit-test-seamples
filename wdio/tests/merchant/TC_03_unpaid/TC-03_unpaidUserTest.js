describe('Seampless Test Case: unpaidUser Merchant : =>', function() {

    beforeEach(function (done) {

        browser.windowHandleSize({width: 1280, height: 800});
        browser.url('/#/login');
        browser.call(done);
    });

    it('Login account Merchant for Unpaid User ', function () {

        browser.click('#email');
        browser.setValue('#email', 'unpaid78@xoixa.com');
        var email = browser.getValue('#email');
        browser.click('#password');
        browser.setValue('#password', 'Qwerty22');
        browser.click('#login_btn');

        browser.url('/#/activate');
        browser.pause(4000);

        browser.click('#account-dropdown');
        browser.pause(2000);
        var res = browser.getText('#header_member_since');

        var arr = res.split('\n');
        var resArr = arr[0];
        assert.equal(resArr, email, "ERROR: Login is not equal with username=>>");
        browser.pause(2000);
        browser.click('#account-dropdown');
        browser.pause(2000);
    });



    it('should be visible list menu for Unpaid user ', function () {

        assert(browser.isVisible('#view_our_plans') === true, 'ERROR: not visible menu-list view our plans');
        assert(browser.isVisible('#account_step') === true, 'ERROR: not visible menu-list account step');
        assert(browser.isVisible('#billing') === true, 'ERROR: not visible menu-list billing');
        assert(browser.isVisible('.viwe_test_data') === true, 'ERROR: not visible view test data');
    });

    it('should be click button "Send" in modal-window for Unpaid user ', function () {

        browser.click('.btn_report_an_issue');
        browser.pause(1500);
        browser.setValue('#status_description', 'testing client side');

        browser.pause(1500);
        browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]');
        browser.pause(5000);
        assert(browser.isVisible('.md-dialog-content') === true, 'window modal dialog-content is not visible ');
        assert(browser.getText('.md-title') === 'Bug Report','window with title or does not match the name ');
        var content = browser.getText('.md-dialog-content-body');
        assert.equal(content, 'Your problem will be reviewed soon', 'ERROR: not match content-body');
        browser.click('button=Close');

    });

});