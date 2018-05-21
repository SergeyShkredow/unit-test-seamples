describe('Seampless noplanUser_viewOurPlans Merchant ', function() {

    beforeEach(function (done) {

        browser.windowHandleSize({width: 1280, height: 800});
        browser.url('/#/login');
        browser.call(done);
    });

    it('Login account Merchant for Unpaid User ', function () {

        browser.click('#email');
        browser.setValue('#email', 'noplan32254@xoixa.com');
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

        describe(' noplanUser_viewOurPlans test cases: =>', function () {

            beforeEach(function (done) {
                browser.url('/#/activate');
                browser.pause(3000);
                browser.call(done);
            });

            it('should be visible title and div blocks Premium', function () {

                assert(browser.isVisible('.content-header=Select your plan') === true, 'ERROR: not visible titleViewOur');
                assert(browser.isVisible('h4=Premium') === true, 'ERROR: not visible premiumVisible');
                assert(browser.isVisible('p=For Large Businesses') === true, 'ERROR: not visible headingsVisible');
                assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[1]/div/div[1]/p[3]/span/b') === true, 'ERROR: not visible paymentVisible');
                assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[1]/div/div[1]/p[4]') === true, 'ERROR: not visible apiVisible');
                assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[1]/div/div[1]/p[5]') === true, 'ERROR: not visible signatureVisible');
                assert(browser.isVisible('button=Choose plan') === true, 'ERROR: not visible buttonChooseVisible');
            });

        it('should be visible title and div blocks Enterprise', function () {

            assert(browser.isVisible('h4=Enterprise') === true, 'ERROR: not visible enterpriseVisible');
            assert(browser.isVisible('p=For 75+ checks/mo') === true, 'ERROR: not visible headingsVisible');
            assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[2]/div/div[1]/p[3]/b') === true, 'ERROR: not visible paymentVisible');
            assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[2]/div/div[1]/p[4]') === true, 'ERROR: not visible apiVisible');
            assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[2]/div/div[1]/p[5]') === true, 'ERROR: not visible signatureVisible');
            assert(browser.isVisible('a=Contact us') === true, 'ERROR: not visible buttonContactUsVisible');
        });

        it('should be visible on the button Learn ... go to enhanced-verification-plans', function () {

            assert(browser.isVisible('a=Learn about our Enhanced Verification Plans') === true, ' is not visible button learn');
        });

        it('should be visible label form credit-card-authorisation', function () {

            var formLabelTemplate = [
                'Use Saved Card',
                'Cardholder Name',
                'Billing Country',
                'Billing Country',
                '',
                'Billing Address',
                'Credit / Debit Card',
                'Expires On',
                'CVV',
                ''
            ];

            var formLabelVisible = browser.getText('#credit_card_info label');
            assert.deepEqual(formLabelVisible, formLabelTemplate, 'ERROR: is not visible all label in the form');
        });

        it('should be at select list (number Card) all fields disabled', function () {

            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[1]/div/button');
            browser.pause(1000);
            browser.click('#use_exist_card');
            browser.pause(1000);
            var selectItem = $('#use_exist_card').$$('option')[1];
            browser.elementIdClick(selectItem.ELEMENT);
            browser.pause(2000);

            assert(browser.getAttribute('#card_name', 'disabled') === 'true');
            assert(browser.getAttribute('#card_number', 'disabled') === 'true');
            assert(browser.getAttribute('#card_cvc', 'disabled') === 'true');
            assert(browser.getAttribute('#card_exp_year', 'disabled') === 'true');
            assert(browser.getAttribute('.select2-focusser', 'disabled') === 'true');
            assert(browser.getAttribute('#card_address1', 'disabled') === 'true');
            assert(browser.getAttribute('#card_city', 'disabled') === 'true');
            assert(browser.getAttribute('#card_state', 'disabled') === 'true');
            assert(browser.getAttribute('#card_zip', 'disabled') === 'true');


            // AFTER CHECK BUTTON ACTIVATE PLAN - Comments THIS
            // browser.click('button=Activate Plan');

        });

        it('should be add new card ', function () {

            browser.click('#use_exist_card');
            browser.pause(1500);
            var selectItem = $('#use_exist_card').$$('option')[0];
            browser.elementIdClick(selectItem.ELEMENT);
            browser.pause(2000);

            browser.setValue('#card_name', '');
            browser.pause(1000);
            browser.setValue('#card_number', '4444 5555');
            browser.pause(1000);
            browser.setValue('#card_exp_month', '');
            browser.pause(1000);
            browser.setValue('#card_exp_year', '');
            browser.pause(1000);
            browser.setValue('#card_cvc', '105');
            browser.pause(1000);
            browser.setValue('#card_address1', '');
            browser.pause(1000);
            browser.setValue('#card_city', '');
            browser.pause(1000);
            browser.setValue('#card_state', '');
            browser.pause(1000);
            browser.setValue('#card_zip', '02445');
            browser.pause(1000);

            browser.click('button=Activate Plan');
            browser.pause(2000);

            var cardholder = browser.getText('.alert-danger>span');
            assert.equal(cardholder, 'Please enter Cardholder Name', 'ERROR: not visible alert window with text Error');
            browser.setValue('#card_name', 'Test card');
            browser.pause(1000);
            browser.click('button=Activate Plan');
            browser.pause(1500);

            var billingAdress = browser.getText('.alert-danger>span');
            assert.equal(billingAdress, 'Please enter Billing Address', 'ERROR: not visible alert window with text Error');
            browser.setValue('#card_address1', 'Test card');
            browser.pause(1000);
            browser.setValue('#card_city', 'NY');
            browser.pause(1000);
            browser.setValue('#card_state', 'NY');
            browser.pause(1000);
            browser.click('button=Activate Plan');

            var mounthNull = browser.getText('.alert-danger>span');
            assert.equal(mounthNull, 'Please enter Expire Month', 'ERROR: not visible alert window with text Error');
            browser.setValue('#card_exp_month', '18');
            browser.pause(1500);
            browser.click('button=Activate Plan');

            var yearNull = browser.getText('.alert-danger>span');
            assert.equal(yearNull, 'Please enter Expire Year', 'ERROR: not visible alert window with text Error');
            browser.setValue('#card_exp_year', '17');
            browser.pause(1500);
            browser.click('button=Activate Plan');
            browser.pause(1500);

            var monthValid = browser.getText('.alert-danger>span');
            assert.equal(monthValid, 'Please enter valid month', 'ERROR: not visible alert window with text Error');
            browser.setValue('#card_exp_month', '10');
            browser.click('button=Activate Plan');
            browser.pause(1500);

            var yearValid = browser.getText('.alert-danger>span');
            assert.equal(yearValid, 'Please enter valid year', 'ERROR: not visible alert window with text Error');

            browser.setValue('#card_exp_year', '20');
            browser.pause(1500);

            browser.click('button=Activate Plan');
            browser.pause(2500);
            var cardNumber = browser.getText('.alert-danger>span');
            assert.equal(cardNumber, 'Your card number is incorrect.', 'ERROR: not visible alert window with text Error');

            browser.setValue('#card_number', '5555555555554444');
            browser.pause(1500);

            // AFTER CHECK BUTTON ACTIVATE PLAN - Comments THIS
            //     // browser.click('button=Activate Plan');

        })
    });
});