describe('Seampless Test Case: trialUser_viewOurPlans Merchant ', function() {

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

        browser.url('/#/merchantPage-documents');
        browser.pause(4000);
        browser.click('.introjs-skipbutton');
        browser.pause(2000);

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

        describe('trialUser_ViewOurPlans test cases: =>', function() {

            beforeEach(function (done) {
                browser.url('/#/activate');
                browser.pause(3000);
                browser.call(done);
            });

            it('should be visible title and div blocks ', function () {

                assert(browser.isVisible('.content-header=Select your plan') === true, 'ERROR: not visible titleViewOur')
            });


            it('should be visible title and div blocks Starter', function () {

                assert.equal( browser.isVisible('h4=Starter'), true, 'ERROR: not visible starterVisible');
                assert.equal( browser.isVisible('p=For Freelancers'), true, 'ERROR: not visible headingsVisible');
                assert.equal( browser.isVisible('p=Manual Check Entry'), true, 'ERROR: not visible manualVisible');
                assert.equal( browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[1]/div/div[1]/p[4]'), true, 'ERROR: not visible apiVisible');
                assert.equal( browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[1]/div/div[1]/p[5]'), true, 'ERROR: not visible signatureVisible');
                assert.equal( browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[1]/div/button'), true, 'ERROR: not visible buttonChooseVisible');
            });

            it('should be visible title and div blocks Pro', function () {

                assert.equal( browser.isVisible('h4=Pro'), true, 'ERROR: not visible proVisible');
                assert.equal( browser.isVisible('p=For Small Businesses'), true, 'ERROR: not visible headingsVisible');
                assert.equal( browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[3]/div/div[1]/p[3]/span'), true, 'ERROR: not visible paymentVisible');
                assert.equal( browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[2]/div/div[1]/p[4]'), true, 'ERROR: not visible apiVisible');
                assert.equal( browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[2]/div/div[1]/p[5]'), true, 'ERROR: not visible signatureVisible');
                assert.equal( browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[2]/div/button'), true, 'ERROR: not visible buttonChooseVisible');
            });

            it('should be visible title and div blocks Premium', function () {

                assert(browser.isVisible('.content-header=Select your plan') === true, 'ERROR: not visible titleViewOur');
                assert(browser.isVisible('h4=Premium') === true, 'ERROR: not visible premiumVisible');
                assert(browser.isVisible('p=For Large Businesses') === true, 'ERROR: not visible headingsVisible');
                assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[3]/div/div[1]/p[3]/span/b') === true, 'ERROR: not visible paymentVisible');
                assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[3]/div/div[1]/p[4]') === true, 'ERROR: not visible apiVisible');
                assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[1]/div/div[1]/p[5]') === true, 'ERROR: not visible signatureVisible');
                assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[3]/div/button') === true, 'ERROR: not visible buttonChooseVisible');
            });

            it('should be visible title and div blocks Enterprise', function () {

                assert(browser.isVisible('h4=Enterprise') === true, 'ERROR: not visible enterpriseVisible');
                assert(browser.isVisible('p=For 75+ checks/mo') === true, 'ERROR: not visible headingsVisible');
                assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[4]/div/div[1]/p[3]/b') === true, 'ERROR: not visible paymentVisible');
                assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[2]/div/div[1]/p[4]') === true, 'ERROR: not visible apiVisible');
                assert(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[2]/div/div[1]/p[5]') === true, 'ERROR: not visible signatureVisible');
                assert(browser.isVisible('a=Contact us') === true, 'ERROR: not visible buttonContactUsVisible');
            });

            it('should be click on the button Learn ... go to enhanced-verification-plans', function () {

                browser.click('a=Learn about our Enhanced Verification Plans');
                var linkButtonClick =  browser.getUrl();
                assert.equal(linkButtonClick, 'http://dev-portal.seamlesschex.com/#/enhanced-verification-plans',
                    'link is not true');
                browser.pause(2000);
                browser.back();
            });

            it('should be visible form credit-card-authorisation', function () {

                assert.equal(browser.isVisible('.wrapp-credit-card-authorisation'), true, 'ERROR: is not visible form');
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

            it('should be activate new plan with card ', function () {

                browser.setValue('#card_name', '');
                browser.pause(1000);
                browser.setValue('#card_number', '5105 105');
                browser.pause(1000);
                browser.setValue('#card_exp_month', '');
                browser.pause(1000);
                browser.setValue('#card_exp_year', '');
                browser.pause(1000);
                browser.setValue('#card_cvc', '208');
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
                // browser.debug();
                var selectPlan = browser.getText('.alert-danger>span');
                assert.equal(selectPlan, 'Please select Plan', 'ERROR: not visible alert window with text Error');
                browser.scroll('.content', 0, -200);
                // browser.debug();
                browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/flash-message/div/div/div/span[1]');
                browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[1]/div[1]/div/button');
                browser.pause(1500);
                browser.click('button=Activate Plan');

                var cardholder = browser.getText('.alert-danger>span');
                assert.equal(cardholder, 'Please enter Cardholder Name', 'ERROR: not visible alert window with text Error');
                browser.setValue('#card_name', 'Test card');
                browser.click('button=Activate Plan');
                browser.pause(1500);

                var billingAdress = browser.getText('.alert-danger>span');
                assert.equal(billingAdress, 'Please enter Billing Address', 'ERROR: not visible alert window with text Error');
                browser.setValue('#card_address1', 'Test card');
                browser.setValue('#card_city', 'NY');
                browser.setValue('#card_state', 'NY');
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

                browser.setValue('#card_number', '5105105105105100');
                browser.pause(1500);

                // AFTER CHECK BUTTON ACTIVATE PLAN - Comments THIS
                //     // browser.click('button=Activate Plan');

        });

        it('should be at select list (number Card) all fields disabled', function () {

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

        });
});