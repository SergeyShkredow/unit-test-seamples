describe('SeamplessChex: TestCase: activeUser_payment-links: => ', function() {

    beforeEach(function (done) {

        browser.windowHandleSize({width: 1280, height: 800});
        browser.url('/#/login');
        browser.call(done);
    });

    it('Login account Merchant for Active user ', function () {

        browser.click('#email');
        browser.setValue('#email', 'uxk44934@xoixa.com');
        var email = browser.getValue('#email');
        browser.click('#password');
        browser.setValue('#password', 'Qwerty22');
        browser.click('#login_btn');
        browser.url('/#/payment-links');
        browser.pause(2000);
        browser.click('#account-dropdown');
        browser.pause(2000);
        var res = browser.getText('#header_member_since');
        var arr = res.split('\n');
        var resArr = arr[0];
        assert.equal(resArr, email, "ERROR: Login is not equal with username=>>");
        browser.click('#account-dropdown');
    });

    describe('SeamplessChex: TestCase: activeUser_payment-links: => ', function () {

        beforeEach(function (done) {

            browser.url('#/payment-links');
            browser.call(done);
        });

        it('should be create Check type 2205/0/1 page', function () {

            browser.click('span=History');
            // browser.scroll('.content', 0, -600);
            browser.pause(2000);
            browser.click('#table_bank_auth_links .fa-external-link');
            browser.pause(5000);

            var bankUrl = browser.windowHandles();
            var bankUrlAuth = bankUrl.value[1];

            browser.window(bankUrlAuth);
            var bankUrlNew = browser.getUrl();
            assert.deepInclude(bankUrlNew, '2205/0/1');

            browser.click('.btn_report_an_issue');
            browser.pause(2500);
            browser.setValue('#status_description', 'testing client side');
            browser.pause(1500);
            browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]');
            browser.pause(5000);
            assert.equal(browser.isVisible('.md-dialog-content'), true, 'window modal dialog-content is not visible ');
            var title = browser.getText('.md-title');
            assert.equal(title, 'Bug Report','window with title or does not match the name ');
            var content = browser.getText('.md-dialog-content-body');
            assert.equal(content, 'Your problem will be reviewed soon');
            browser.click('button=Close');
            browser.pause(1500);


            assert.equal(browser.getAttribute('#name', 'placeholder'), 'Account Holder Name');
            assert.equal(browser.getAttribute('#email', 'placeholder'), 'Enter your email address');
            var placeMemo = browser.getValue('#memo');
                if (placeMemo === '') {
                    assert.equal(browser.getAttribute('#memo', 'placeholder'), 'Memo');

                }

            assert.equal(browser.isVisible('span=Make a payment to:'), true, 'ERROR: is not visible header');
            assert.equal(browser.isVisible('h3=Enter Check Information'), true, 'ERROR: is not visible title');
            assert.equal(browser.isVisible('label=Account Holder Name:'), true, 'ERROR: is not visible Account Holder Name');
            assert.equal(browser.isVisible('label=Memo:'), true, 'ERROR: is not visible Memo');
            assert.equal(browser.isVisible('label=Email:'), true, 'ERROR: is not visible Email');
            assert.equal(browser.isVisible('label=Amount:'), true, 'ERROR: is not visible Amount');
            assert.equal(browser.getText('//*[@id="mainContainer"]/div/div[2]/div/section[2]/div/div/div/div[2]/div[2]/div[1]'),
                'For Your Security: All information provided is confidential. This transaction is tokenized all bank login ' +
                'credentials and information are not stored on our servers.', 'ERROR: is not visible For your security');
            assert.equal(browser.isVisible('button=PAY'), true, 'ERROR: is not visible button PAY');

            browser.click('button=PAY');
            browser.pause(3000);
                    // browser.click('.Navbar__button');

                    // assert.equal(browser.isVisible('#plaid-link-container'), true, 'ERROR: is not visible plaid-link-container');
                    //
                    // browser.click('.btn_report_an_issue');
                    // browser.pause(2500);
                    // browser.setValue('#status_description', 'testing client side');
                    // browser.pause(1500);
                    // browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]');
                    // browser.pause(7000);
                    // assert.equal(browser.isVisible('.md-dialog-content'), true, 'window modal dialog-content is not visible ');
                    // var title = browser.getText('.md-title');
                    // assert.equal(title, 'Bug Report','window with title or does not match the name ');
                    // var content = browser.getText('.md-dialog-content-body');
                    // assert.equal(content, 'Your problem will be reviewed soon');
                    // browser.click('button=Close');
       });
    });
});