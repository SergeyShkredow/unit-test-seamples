describe('SeamplessChex: Create check trial Signature => ', function() {

    beforeEach(function (done) {

        browser.windowHandleSize({width: 1280, height: 800});
        browser.url('/#/login');
        browser.call(done);

    });

    it('Login account Merchant for Trial user ', function () {

        browser.click('#email');
        browser.setValue('#email', 'hwk28866@xoixa.com');
        var email = browser.getValue('#email');
        browser.click('#password');
        browser.setValue('#password', 'Qwerty22');
        browser.click('#login_btn');
        browser.url('/#/plan-upgrade');
        browser.waitForVisible('.introjs-skipbutton',5000);
        browser.click('.introjs-skipbutton');
        browser.pause(2000);
        browser.click('#account-dropdown');
        browser.waitForExist('#header_member_since',5000);
        var res = browser.getText('#header_member_since');
        var arr = res.split('\n');
        var resArr = arr[0];
        assert.equal(resArr, email, "ERROR: Login is not equal with username=>>");
        browser.click('#account-dropdown');
    });

    describe('SeamplessChex: TestCase: trial create check Basic: => ', function () {

        beforeEach(function (done) {

            browser.url('#/payment-links');
            browser.call(done);
        });

        it('should be create Check type e44c/1/0 page', function () {

            browser.click('span=History');
            browser.pause(2000);
            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div[2]/div/div[1]/div/' +
                'div[3]/table/tbody/tr[1]/td[1]/a');
            browser.pause(5000);

            var bankUrl = browser.windowHandles();
            var bankUrlAuth = bankUrl.value[1];

            browser.window(bankUrlAuth);
            var bankUrlNew = browser.getUrl();
            assert.deepInclude(bankUrlNew, 'e44c/1/0');

            var headerText = browser.getText('.pay-link-payment-to-header');
            assert.include(headerText, 'Make A Payment To :');

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

            var placeAmount = browser.getValue('#memo');
            if (placeAmount === '') {
                assert.equal(browser.getAttribute('#check_amount', 'placeholder'), 'Check Amount');
            }

            assert.equal(browser.getAttribute('#routing_number', 'placeholder'), 'Routing #');
            assert.equal(browser.getAttribute('#account_number', 'placeholder'), 'Account Number #');
            assert.equal(browser.getAttribute('#confirm_account_number', 'placeholder'), 'Confirm Account #');


            assert.equal(browser.isVisible('.pay-link-payment-to-header'), true, 'ERROR: is not visible header');
            assert.equal(browser.isVisible('label=Account Holder Name:'), true, 'ERROR: not label Account Holder =>>');
            assert.equal(browser.isVisible('label=Email:'), true, 'ERROR: not label email =>>');
            assert.equal(browser.isVisible('label=Phone:'), true, 'ERROR: not label phone =>>');
            assert.equal(browser.isVisible('label=Check Number:'), true, 'ERROR: not label check_number =>>');
            assert.equal(browser.isVisible('label=Check Amount:'), true, 'ERROR: not label check_amount =>>');
            assert.equal(browser.isVisible('label=Memo'), true, 'ERROR: not label memo ==>');
            assert.equal(browser.isVisible('label=Routing Number:'), true, 'ERROR: not label routing_number =>>');
            assert.equal(browser.isVisible('label=Account Number:'), true, 'ERROR: not label account_number =>>');
            assert.equal(browser.isVisible('label=Confirm Account Number:'), true, 'ERROR: not label Confirm =>>');

            assert.equal(browser.isVisible('#name'), true, 'ERROR: not field Account Holder =>>');
            assert.equal(browser.isVisible('#email'), true, 'ERROR: not field email =>>');
            assert.equal(browser.isVisible('#phone'), true, 'ERROR: not field phone =>>');
            assert.equal(browser.isVisible('#check_number'), true, 'ERROR: not field check_number =>>');
            assert.equal(browser.isVisible('#check_amount'), true, 'ERROR: not field check_amount =>>');
            assert.equal(browser.isVisible('#memo'), true, 'ERROR: not field memo =>>');
            assert.equal(browser.isVisible('#routing_number'), true, 'ERROR: not field routing_number =>>');
            assert.equal(browser.isVisible('#account_number'), true, 'ERROR: not field account_number =>>');
            assert.equal(browser.isVisible('#confirm_account_number'), true, 'ERROR: not field confirm_account_number =>>');
            assert.equal(browser.isVisible('#address'), true, 'ERROR: not field address =>>');
            assert.equal(browser.isVisible('#city'), true, 'ERROR: not field city =>>');
            assert.equal(browser.isVisible('#state'), true, 'ERROR: not field state =>>');
            assert.equal(browser.isVisible('#zip'), true, 'ERROR: not field zip =>>');

            assert.equal(browser.isVisible('button=PAY'), true, 'ERROR: is not visible button PAY');

            browser.click('#name');
            browser.setValue('#name', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var nameFieldRes = browser.getText('span=Please Enter Account Holder Name');
            assert.include(nameFieldRes, 'Please Enter Account Holder Name', 'there is no window with require message');

            browser.setValue('#name', 'Test Trial Create Check');
            browser.pause(1000);
            browser.setValue('#phone', '0111001100');
            browser.pause(1000);
            browser.click('#memo');
            var memoEmpty = browser.getValue('#memo');
            if(memoEmpty === '') {
                browser.setValue('#memo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
                browser.pause(2000);

            }
            browser.setValue('#address', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var addressFieldRes = browser.getText('span=Please Enter Address');
            assert.include(addressFieldRes, 'Please Enter Address', 'there is no window with require message');

            browser.setValue('#address', '235 Euston Road');
            browser.pause(1000);
            browser.setValue('#city', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var cityFieldRes = browser.getText('span=Please Enter City');
            assert.include(cityFieldRes, 'Please Enter City', 'there is no window with require message');

            browser.setValue('#city', 'London');
            browser.pause(1000);
            browser.setValue('#state', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var stateFieldRes = browser.getText('span=Please Enter State');
            assert.include(stateFieldRes, 'Please Enter State', 'there is no window with require message');

            browser.setValue('#state', 'L');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var stateFieldValid = browser.getText('span=Please Enter valid State');
            assert.include(stateFieldValid, 'Please Enter valid State', 'there is no window with require message');

            browser.setValue('#state', 'LN');
            browser.pause(1000);
            browser.setValue('#zip', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var zipFieldRes = browser.getText('span=Please Enter Zip Code');
            assert.include(zipFieldRes, 'Please Enter Zip Code', 'there is no window with require message');

            browser.setValue('#zip', '5478');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var zipFieldValid = browser.getText('span=Zip Code should be between 5 to 10 digits');
            assert.include(zipFieldValid, 'Zip Code should be between 5 to 10 digits', 'there is no window with require message');

            browser.setValue('#zip', '54789');
            browser.pause(1000);
            browser.setValue('#check_number', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var check_numberFieldRes = browser.getText('span=Please Enter Check Number');
            assert.include(check_numberFieldRes, 'Please Enter Check Number', 'there is no window with require message');

            var randomTest = Math.floor(Math.random() * 3000) + 10001;

            browser.setValue('#check_number', randomTest);
            browser.pause(2000);

            var amountEmpty = browser.getValue('#check_amount');
            if(amountEmpty === '') {
                browser.setValue('#check_amount', '');
                browser.pause(1000);
                browser.click('#memo');
                browser.pause(2000);
                var check_amountFieldRes = browser.getText('span=Please Enter Check Amount');
                assert.include(check_amountFieldRes, 'Please Enter Check Amount', 'there is no window with require message');

                browser.setValue('#check_amount', '5.01');
                browser.pause(1000);
            }

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