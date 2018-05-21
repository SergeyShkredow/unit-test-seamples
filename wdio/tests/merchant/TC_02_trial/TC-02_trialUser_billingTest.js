describe('trialUser_billing: => ', function() {

    beforeEach(function (done) {

        browser.windowHandleSize({width: 1280, height: 800});
        browser.url('/#/login');
        browser.call(done);
    });

    it('Login account for trialUser_billing ', function () {

        browser.click('#email');
        browser.setValue('#email', 'hwk28866@xoixa.com');
        var email = browser.getValue('#email');
        browser.click('#password');
        browser.setValue('#password', 'Qwerty22');
        browser.click('#login_btn');
        browser.url('/#/billing-invoices');
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

    describe('SeamplessChex: TestCase: trialUser_billing: => ', function() {

        beforeEach(function (done) {

            browser.click('#billing');
            browser.pause(2000);
            browser.call(done);

        });

        it('should be visible elements title and div in the header', function () {

            assert(browser.isVisible('h1=Billing') === true, 'ERROR: no visible title Billing');
            assert(browser.isVisible('h3=Payment Method') === true, 'ERROR: no visible title Payment Method');
        });

        it('should click on the button ADD BACKUP visible popup with fields', function () {

            var stateAddBackUpCard = browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div' +
                '/div/div/div/div/div[2]/div[2]/div/div/span/a/span');

            if( stateAddBackUpCard !== true) {
                this.skip();
            }

            browser.click('span=ADD BACKUP CARD');
            browser.pause(3000);

            assert(browser.isVisible('label=Cardholder Name') === true, 'ERROR: not visible CardholderNameLabel');
            assert(browser.isVisible('//*[@id="update_or_add_credit_card"]/div[1]/div[2]/label') === true, 'ERROR: not visible BillingCountryLabel');
            assert(browser.isVisible('label=Billing Address') === true, 'ERROR: not visible BillingAddressLabel');
            assert(browser.isVisible('label=Card Number') === true, 'ERROR: not visible CardNumberLabel');
            assert(browser.isVisible('label=Expires On') === true, 'ERROR: not visible ExpiresOnLabel');
            assert(browser.isVisible('label=CVC') === true, 'ERROR: not visible CVCLabel');


            assert(browser.isVisible('#card_name') === true, 'ERROR: not visible card_nameInput');
            assert(browser.isVisible('#s2id_card_country') === true, 'ERROR: not visible s2id_card_countrySelect');
            assert(browser.isVisible('#card_address1') === true, 'ERROR: not visible card_address1Input');
            assert(browser.isVisible('#card_city') === true, 'ERROR: not visible card_cityInput');
            assert(browser.isVisible('#card_state') === true, 'ERROR: not visible card_stateInput');
            assert(browser.isVisible('#card_zip') === true, 'ERROR: not visible card_zipInput');
            assert(browser.isVisible('#card_number') === true, 'ERROR: not visible card_numberInput');
            assert(browser.isVisible('#card_exp_month') === true, 'ERROR: not visible card_exp_monthInput');
            assert(browser.isVisible('#card_exp_year') === true, 'ERROR: not visible card_exp_yearInput');
            assert(browser.isVisible('#card_cvc') === true, 'ERROR: not visible card_cvcInput');

            assert.equal(browser.isVisible('/html/body/div[1]/div/div/div/div[3]/button[2]'), true, 'ERROR: no visible buttonAdd');
            assert.equal(browser.isVisible('button=Close'), true, 'ERROR: no visible buttonClose');

            browser.click('button=Close');
            browser.pause(2000);
        });

        it('should be add new card all fields VALID at click ', function () {

            var stateAddBackUpCard = browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div' +
                '/div/div/div/div/div[2]/div[2]/div/div/span/a/span');

            if( stateAddBackUpCard !== true) {
                this.skip();
            }

            browser.click('span=ADD BACKUP CARD');
            browser.pause(2000);

            browser.click('#card_name');
            browser.setValue('#card_name', 'Test Card Trial');
            browser.pause(1000);
            browser.click('#s2id_card_country');
            browser.pause(2500);
            browser.setValue('.select2-focused', 'united states');
            browser.pause(3000);
            browser.click('.select2-match');
            browser.pause(3000);
            browser.setValue('#card_address1', '49 street');
            browser.pause(1000);
            browser.setValue('#card_city', 'NY');
            browser.pause(1000);
            browser.setValue('#card_state', 'NY');
            browser.pause(1000);
            browser.setValue('#card_zip', '04505');
            browser.pause(1000);
            browser.setValue('#card_number', '4242424242424242');
            browser.pause(1000);
            browser.setValue('#card_exp_month', '02');
            browser.pause(1000);
            browser.setValue('#card_exp_year', '19');
            browser.pause(1000);
            browser.setValue('#card_cvc', '055');
            browser.pause(1000);

            browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]/span');
            browser.pause(5000);
            browser.click('button=Close');
            browser.pause(2000);

            assert(browser.isVisible('button=Make Primary') === true, 'ERROR: not visible button Make Primary');
            assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div/div/div[2]' +
                '/div[2]/div/div[3]/button[1]') === true, 'ERROR: not visible button Delete');
            assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div/div/div[2]' +
                '/div[2]/div/div[3]/button[2]') === true, 'ERROR: not visible button Update');

            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div/div/div[2]/div[2]/div/div' +
                '[3]/button[1]');
            browser.pause(1000);
            browser.click('button=Yes');
            browser.pause(4000);

        });
    });
});