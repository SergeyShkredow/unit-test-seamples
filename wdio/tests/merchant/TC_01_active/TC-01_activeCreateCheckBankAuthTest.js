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
            browser.pause(2000);
            browser.click('#table_bank_auth_links .fa-external-link');
            browser.pause(5000);

            var bankUrl = browser.windowHandles();
            var bankUrlAuth = bankUrl.value[1];

            browser.window(bankUrlAuth);
            var bankUrlNew = browser.getUrl();
            assert.deepInclude(bankUrlNew, '2205/0/1');

            var headerText = browser.getText('.pay-link-payment-to-header');
            assert.include(headerText, 'Make A Payment To :');

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
            browser.pause(2000);
            browser.waitForExist('#plaid-link-iframe-1');

            assert.equal(browser.isVisible('#plaid-link-iframe-1'), true, 'ERROR: is not visible form Select your bank');
            browser.keys('\uE00C');

            browser.pause(2000);
            assert.equal(browser.isVisible('#button-bank-not-listed'), true, 'ERROR: is not visible form Select your bank');
            browser.click('#button-bank-not-listed');
            browser.pause(1000);

            var bankUrlNewPath= browser.getUrl();
            assert.deepInclude(bankUrlNewPath, '2205/0/0', 'ERROR: no correct link');

            assert.equal(browser.isVisible('//*[@id="mainContainer"]/div/div[1]/div/section[2]/div/div/flash-message/div/div'),
                true, 'ERROR: is not visible alert Record Not found');
            browser.click('//*[@id="mainContainer"]/div/div[1]/div/section[2]/div/div/flash-message/div/div/div');
            browser.pause(1000);
            assert.equal(browser.isVisible('label=Draw Signature'), true, 'ERROR: not visible button Draw Signature');


            browser.click('#name');
            browser.setValue('#name', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var nameFieldRes = browser.getText('span=Please Enter Account Holder Name');
            assert.include(nameFieldRes, 'Please Enter Account Holder Name', 'there is no window with require message');

            browser.setValue('#name', 'Test Active Create Check');
            browser.pause(1000);
            browser.setValue('#phone', '0111001100');
            browser.pause(1000);
            browser.click('#memo');
            var memoEmpty = browser.getValue('#memo');
                if(memoEmpty === '') {
                    browser.setValue('#memo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
                    browser.pause(2000);

                }

            browser.setValue('#check_number', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var check_numberFieldRes = browser.getText('span=Please Enter Check Number');
            assert.include(check_numberFieldRes, 'Please Enter Check Number', 'there is no window with require message');

            var randomTest = Math.floor(Math.random() * 3000) + 10001;

            browser.setValue('#check_number', randomTest);
            browser.pause(1000);
            browser.setValue('#check_amount', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var check_amountFieldRes = browser.getText('span=Please Enter Check Amount');
            assert.include(check_amountFieldRes, 'Please Enter Check Amount', 'there is no window with require message');

            browser.setValue('#check_amount', '5.01');
            browser.pause(1000);
            browser.setValue('#routing_number', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var routing_numberFieldNull = browser.getText('span=Please Enter Check Routing Number');
            assert.include(routing_numberFieldNull, 'Please Enter Check Routing Number',
                'there is no window with require message');

            browser.setValue('#routing_number', '856445592');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            browser.isVisible('md-dialog');
            browser.pause(2000);
            browser.getText('h2=Routing Number');
            browser.getText('p=WARNING: There\'s no information Routing Number, please correct your input.');
            browser.click('button=Close');
            browser.pause(2000);
            var routing_numberFieldInvalid = browser.getText('span=There\'s no information Routing Number, please correct ' +
                'your input.');
            assert.include(routing_numberFieldInvalid, 'There\'s no information Routing Number, please correct your input.',
                'there is no window with require message');

            browser.setValue('#routing_number', '024000024');
            browser.pause(2000);
            browser.click('#account_number');
            browser.pause(2000);
            browser.click('button=Enter Anyway');
            browser.pause(2000);
            browser.setValue('#account_number', '');
            browser.pause(1000);
            browser.click('#confirm_account_number');
            browser.pause(1000);
            var account_numberFieldRes = browser.getText('span=Please Enter Check Account Number');
            assert.include(account_numberFieldRes, 'Please Enter Check Account Number',
                'there is no window with require message');

            browser.pause(2000);
            browser.setValue('#account_number', '11222');
            browser.pause(1000);
            browser.setValue('#confirm_account_number', '');
            browser.pause(2000);
            browser.click('#memo');
            var confirm_account_numberFieldRes = browser.getText('span=Please Enter Check confirm Account Number');
            assert.include(confirm_account_numberFieldRes, 'Please Enter Check confirm Account Number',
                'there is no window with require message');

            browser.setValue('#confirm_account_number', '59998');
            browser.pause(1000);
            browser.click('#memo');
            var confirm_account_numberFieldisValid = browser.getText('span=Account Number and Confirm Account Number must be same');
            assert.include(confirm_account_numberFieldisValid, 'Account Number and Confirm Account Number must be same',
                'there is no window with require message');

            browser.pause(2000);
            browser.setValue('#confirm_account_number', '11222');
            browser.pause(3000);
            browser.click('#save_check');
            browser.pause(2000);

        });
    });
});