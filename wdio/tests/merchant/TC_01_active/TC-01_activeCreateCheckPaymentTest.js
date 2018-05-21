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

        it('should be create Check type 2205/0/0 page', function () {

            browser.click('span=History');
            // browser.scroll('.content', 0, -600);
            browser.pause(2000);
            browser.click('#table_payment_links .fa-external-link');
            browser.pause(5000);

            var bankUrl = browser.windowHandles();
            var bankUrlAuth = bankUrl.value[1];

            browser.window(bankUrlAuth);
            var bankUrlNew = browser.getUrl();
            assert.deepInclude(bankUrlNew, '2205/0/0');

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

            assert.equal(browser.isVisible('label=Account Holder Name:'), true, 'ERROR: not label Account Holder =>>');
            assert.equal(browser.isVisible('label=Email:'), true, 'ERROR: not label email =>>');
            assert.equal(browser.isVisible('label=Phone:'), true, 'ERROR: not label phone =>>');
            assert.equal(browser.isVisible('label=Check Number:'), true, 'ERROR: not label check_number =>>');
            assert.equal(browser.isVisible('label=Check Amount:'), true, 'ERROR: not label check_amount =>>');
            assert.equal(browser.isVisible('label=Memo'), true, 'ERROR: not label memo ==>');
            assert.equal(browser.isVisible('label=Routing Number:'), true, 'ERROR: not label routing_number =>>');
            assert.equal(browser.isVisible('label=Account Number:'), true, 'ERROR: not label account_number =>>');
            assert.equal(browser.isVisible('label=Confirm Account Number:'), true, 'ERROR: not label Confirm Account =>>');

            assert.equal(browser.isVisible('#name'), true, 'ERROR: is not visible input Account Holder =>>');
            assert.equal(browser.isVisible('#email'), true, 'ERROR: is not visible input email =>>');
            assert.equal(browser.isVisible('#phone'), true, 'ERROR: is not visible input phone =>>');
            assert.equal(browser.isVisible('#address'), true, 'ERROR: is not visible input address =>>');
            assert.equal(browser.isVisible('#city'), true, 'ERROR: is not visible input city =>>');
            assert.equal(browser.isVisible('#state'), true, 'ERROR: is not visible input state =>>');
            assert.equal(browser.isVisible('#zip'), true, 'ERROR: is not visible input zip =>>');
            assert.equal(browser.isVisible('#check_number'), true, 'ERROR: is not visible input check_number =>>');
            assert.equal(browser.isVisible('#check_amount'), true, 'ERROR: is not visible input check_amount =>>');
            assert.equal(browser.getAttribute('#check_amount', 'disabled'),'true', 'ERROR: is not disable this field');
            assert.equal(browser.isVisible('#memo'), true, 'ERROR: is not visible input memo =>>');
            assert.equal(browser.isVisible('#routing_number'), true, 'ERROR: is not visible input routing_number =>>');
            assert.equal(browser.isVisible('#account_number'), true, 'ERROR: is not visible in  put account_number =>>');
            assert.equal(browser.isVisible('#confirm_account_number'), true, 'ERROR: nis not visible input confirm_account_number =>>');
            assert.equal(browser.isVisible('button=PAY'), true, 'ERROR: is not visible button PAY');

            assert.equal(browser.getAttribute('#name', 'placeholder'), 'Account Holder Name');
            assert.equal(browser.getAttribute('#email', 'placeholder'), 'Enter Your Email to Get Receipt');
            assert.equal(browser.getAttribute('#phone', 'placeholder'), 'Phone');
            assert.equal(browser.getAttribute('#address', 'placeholder'), 'Address');
            assert.equal(browser.getAttribute('#city', 'placeholder'), 'City');
            assert.equal(browser.getAttribute('#state', 'placeholder'), 'State');
            assert.equal(browser.getAttribute('#zip', 'placeholder'), 'Zip');
            var placeMemo = browser.getValue('#memo');
            if (placeMemo === '') {
                assert.equal(browser.getAttribute('#memo', 'placeholder'), 'Memo');

            }
            assert.equal(browser.getAttribute('#check_number', 'placeholder'), 'Check Number');
            assert.equal(browser.getAttribute('#routing_number', 'placeholder'), 'Routing #');
            assert.equal(browser.getAttribute('#account_number', 'placeholder'), 'Account Number #');
            assert.equal(browser.getAttribute('#confirm_account_number', 'placeholder'), 'Confirm Account #');

            var random = Math.floor(Math.random() * 3000) + 10001;

            browser.setValue('#name', 'test Active Create Check');
            browser.pause(1000);
            browser.setValue('#email', 'test@test.com');
            browser.pause(1000);
            browser.setValue('#phone', '0111001100');
            browser.pause(1000);
            browser.setValue('#address', '49 street');
            browser.pause(1000);
            browser.setValue('#city', 'New York');
            browser.pause(1000);
            browser.setValue('#state', 'NY');
            browser.pause(1000);
            browser.setValue('#zip', random);
            browser.pause(1000);
            browser.setValue('#check_number', random);
            browser.pause(1000);
            browser.setValue('#memo', 'Test Payment links');
            browser.setValue('#routing_number', '024000024');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            browser.click('button=Enter Anyway');
            browser.pause(2000);
            browser.setValue('#account_number', '11112');
            browser.pause(1000);
            browser.setValue('#confirm_account_number', '11112');

                //realize the functional for iframe !!!!!!!!!!!!

                // var my_frame = browser.getAttribute('iframe', 'src');
                // var my_frame = $('iframe');
                // browser.frame(my_frame.value);
                // browser.click('#recaptcha-anchor');

            browser.pause(2000);
            browser.click('#save_check');
            browser.pause(2000);
            var stateCaptcha = browser.getText('.alert-danger');
            assert.include(stateCaptcha, 'Invalid Captcha Answer', 'there is no window with require message');
            browser.pause(3000);
            browser.close();
            browser.pause(1500);

        });

        it('should be create Check type 2205/0/0 page', function () {

            browser.click('span=History');
            browser.pause(2000);
            browser.click('#table_payment_links .fa-external-link');
            browser.pause(5000);

            var bankUrl = browser.windowHandles();
            var bankUrlAuth = bankUrl.value[1];

            browser.window(bankUrlAuth);

            browser.click('#name');
            browser.setValue('#name', '');
            browser.pause(1000);
            browser.click('#email');
            browser.pause(2000);
            var nameFieldRes = browser.getText('span=Please Enter Account Holder Name');
            assert.include(nameFieldRes, 'Please Enter Account Holder Name', 'there is no window with require message');

            browser.setValue('#name', 'Test Active Create Check');
            browser.pause(1000);
            browser.setValue('#email', '');
            browser.pause(1000);
            browser.setValue('#phone', '0111001100');
            browser.pause(1000);
            browser.setValue('#address', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var addressFieldRes = browser.getText('span=Please Enter Address');
            assert.include(addressFieldRes, 'Please Enter Address', 'there is no window with require message');

            browser.setValue('#address', '53 street');
            browser.pause(1000);

            var memoEmpty = browser.getValue('#memo');
               if(memoEmpty === '') {
                var memoFieldValid = browser.getText('span=Please Enter Check Description');
                assert.include(memoFieldValid, 'Please Enter Check Description',
                    'there is no window with require message');
                browser.setValue('#memo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
                browser.pause(2000);

            }

            browser.click('#city', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var cityFieldRes = browser.getText('span=Please Enter City');
            assert.include(cityFieldRes, 'Please Enter City', 'there is no window with require message');

            browser.setValue('#city', 'New York');
            browser.pause(1000);
            browser.setValue('#state', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var stateFieldRes = browser.getText('span=Please Enter State');
            assert.include(stateFieldRes, 'Please Enter State', 'there is no window with require message');

            browser.setValue('#state', 'N');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var stateFieldValid = browser.getText('span=Please Enter valid State');
            assert.include(stateFieldValid, 'Please Enter valid State', 'there is no window with require message');

            browser.setValue('#state', 'NY');
            browser.pause(1000);
            browser.setValue('#zip', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var zipFieldRes = browser.getText('span=Please Enter Zip Code');
            assert.include(zipFieldRes, 'Please Enter Zip Code', 'there is no window with require message');

            browser.setValue('#zip', '0520');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var zipFieldValid = browser.getText('span=Zip Code should be between 5 to 10 digits');
            assert.include(zipFieldValid, 'Zip Code should be between 5 to 10 digits', 'there is no window with require message');

            browser.setValue('#zip', '05205');
            browser.pause(1000);
            browser.setValue('#check_number', '');
            browser.pause(1000);
            browser.click('#email');
            browser.pause(2000);
            var check_numberFieldRes = browser.getText('span=Please Enter Check Number');
            assert.include(check_numberFieldRes, 'Please Enter Check Number', 'there is no window with require message');

            var randomTest = Math.floor(Math.random() * 3000) + 10001;

            browser.setValue('#check_number', randomTest);
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
            browser.click('#memo');
            browser.pause(2000);
            browser.click('button=Enter Anyway');
            browser.pause(2000);
            browser.setValue('#account_number', '');
            browser.pause(1000);
            browser.click('#memo');
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
            var emailFieldValid = browser.getText('span=Please Enter Email');
            assert.include(emailFieldValid, 'Please Enter Email',
                'there is no window with require message');

            browser.setValue('#email', 'test@gmail.com');
            browser.pause(1000);
            browser.click('#save_check');
            browser.pause(2000);
            });
    });
});