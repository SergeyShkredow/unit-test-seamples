describe('Seampless lockedUser_billing Merchant', function() {

    beforeEach(function (done) {

        browser.windowHandleSize({width: 1280, height: 800});
        browser.url('/#/login');
        browser.call(done);
    });

    it('Login account for lockedUser_billing ', function () {

        browser.click('#email');
        browser.setValue('#email', 'lok26414@xoixa.com');
        var email = browser.getValue('#email');
        browser.click('#password');
        browser.setValue('#password', 'Qwerty22');
        browser.click('#login_btn');

        browser.url('/#/billing-invoices');
        browser.pause(2000);
        browser.click('#account-dropdown');
        browser.pause(2000);
        var res = browser.getText('#header_member_since');

        var arr = res.split('\n');
        var resArr = arr[0];
        assert.equal(resArr, email, 'ERROR: Login is not equal with username=>>');
        browser.pause(2000);
        browser.click('#account-dropdown');
        browser.pause(2000);
    });

    describe('lockedUser_billing test cases: =>', function () {

        beforeEach(function (done) {
            browser.url('/#/billing-invoices');
            browser.pause(3000);
            browser.call(done);

        });

        it('should be visible elements title and button in the header', function () {

            assert(browser.isVisible('h1=Billing') === true, 'ERROR: no visible title Billing');
            assert(browser.isVisible('h3=Payment Method') === true, 'ERROR: no visible title Payment Method');
            assert(browser.isVisible('//*[@id="mainContainer"]/div/div[1]/div[1]/header/nav/div[2]/a/span') === true, 'ERROR: no visible button View Our Plans');
        });

        it('should at click button View Our Plans go to page http://dev-portal.seamlesschex.com/#/activate ', function () {

            browser.click('//*[@id="mainContainer"]/div/div[1]/div[1]/header/nav/div[2]/a/span');
            browser.pause(2000);
            assert.equal(browser.getUrl('http://dev-portal.seamlesschex.com/#/activate'),
                'http://dev-portal.seamlesschex.com/#/activate', 'ERROR: no go to page http://dev-portal.seamlesschex.com/#/activate');
            browser.back();
            browser.pause(2000);
        });

        it('should at click menu Account go to page http://dev-portal.seamlesschex.com/#/activate ', function () {

            browser.click('#account_step');
            browser.pause(2000);
            assert.equal(browser.getUrl('http://dev-portal.seamlesschex.com/#/activate'),
                'http://dev-portal.seamlesschex.com/#/activate', 'ERROR: no go to page http://dev-portal.seamlesschex.com/#/activate');
            browser.back();
            browser.pause(2000);
        });

        it('should at two div block with spans', function () {

            browser.pause(2000);
            assert.equal(browser.isVisible('.bg-gray-light').length, 2);
            assert(browser.isVisible('h3=Payment Method') === true, 'ERROR: no visible title Payment Method');
            assert(browser.isVisible('button=Update') === true, 'ERROR: no visible buttonUpdate');
            assert(browser.isVisible('span=Primary') === true, 'ERROR: no visible spanPrimary');
            assert(browser.isVisible('a=ADD BACKUP CARD') === true, 'ERROR: no visible ADD BACKUP CARD');
        });

        it('should click on the button ADD BACKUP visible popup with fields', function () {

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

            var buttonAdd = browser.isVisible('/html/body/div[1]/div/div/div/div[3]/button[2]');
            assert.equal(buttonAdd, true, 'ERROR: no visible buttonAdd');

            var buttonClose = browser.isVisible('button=Close');
            assert.equal(buttonClose, true, 'ERROR: no visible buttonClose');

            browser.click('button=Close');
        });

        it('should be add new card all fields, check VALID at click ', function () {

            browser.click('span=ADD BACKUP CARD');
            browser.pause(3000);

            browser.setValue('#card_name', '');
            browser.pause(1000);
            browser.click('#s2id_card_country');
            browser.pause(2500);
            browser.setValue('.select2-focused', 'ugan');
            browser.pause(3000);
            browser.click('.select2-match');
            browser.pause(3000);
            browser.setValue('#card_address1', '');
            browser.pause(1000);
            browser.setValue('#card_city', '');
            browser.pause(1000);
            browser.setValue('#card_state', '');
            browser.pause(1000);
            browser.setValue('#card_zip', '04505');
            browser.pause(1000);
            browser.setValue('#card_number', '22230031');
            browser.pause(1000);
            browser.setValue('#card_exp_month', '');
            browser.pause(1000);
            browser.setValue('#card_exp_year', '');
            browser.pause(1000);
            browser.setValue('#card_cvc', '055');
            browser.pause(1000);

            browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]/span');
            browser.pause(2500);

            var cardholder = browser.getText('.alert-danger>span');
            assert.equal(cardholder, 'Please enter Cardholder Name', 'ERROR: not visible alert window with text Error');
            browser.setValue('#card_name', 'Test card NoPlan');
            browser.pause(1000);
            browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]/span');
            browser.pause(1500);

            var billingAdress = browser.getText('.alert-danger>span');
            assert.equal(billingAdress, 'Please enter Billing Address', 'ERROR: not visible alert window with text Error');
            browser.setValue('#card_address1', 'Address  NoPlan');
            browser.pause(1000);
            browser.setValue('#card_city', 'NY');
            browser.pause(1000);
            browser.setValue('#card_state', 'NY');
            browser.pause(1000);
            browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]/span');

            var mounthNull = browser.getText('.alert-danger>span');
            assert.equal(mounthNull, 'Please enter Expire Month', 'ERROR: not visible alert window with text Error');
            browser.setValue('#card_exp_month', '18');
            browser.pause(1500);
            browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]/span');

            var yearNull = browser.getText('.alert-danger>span');
            assert.equal(yearNull, 'Please enter Expire Year', 'ERROR: not visible alert window with text Error');
            browser.setValue('#card_exp_year', '17');
            browser.pause(1500);
            browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]/span');
            browser.pause(1500);

            var monthValid = browser.getText('.alert-danger>span');
            assert.equal(monthValid, 'Please enter valid month', 'ERROR: not visible alert window with text Error');
            browser.setValue('#card_exp_month', '10');
            browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]/span');
            browser.pause(1500);

            var yearValid = browser.getText('.alert-danger>span');
            assert.equal(yearValid, 'Please enter valid year', 'ERROR: not visible alert window with text Error');

            browser.setValue('#card_exp_year', '20');
            browser.pause(1500);

            browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]/span');
            browser.pause(2500);
            var cardNumber = browser.getText('.alert-danger>span');
            assert.equal(cardNumber, 'Your card number is incorrect.', 'ERROR: not visible alert window with text Error');

            browser.setValue('#card_number', '2223003122003222');
            browser.click('/html/body/div[1]/div/div/div/div[3]/button[2]/span');
            browser.pause(2500);
        });

        it('should be delete card at click Delete in div', function () {

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

        it('should visible input field, button Download, table', function () {

            browser.click('button=Download');
            browser.pause(3000);
            assert(browser.isVisible('.alertOut') === true, 'ERROR: not visible alert window');
            var textAlert = browser.getText('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/flash-message/div/div/span/span');
            assert.equal(textAlert, 'Please Select Invoice.', 'ERROR: not visible text Alert');

            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/flash-message/div/div/div/span[1]');
            browser.pause(2000);
        });

        // it('should visible table and table fields, checkboxes and download for each column ' +
        //     'work field - input', function () {
        //
        //     var tableHeadersTemplate = [ '', 'Date', 'Amount', 'Status', 'Invoice', 'Action' ];
        //     var tableHeaders = browser.getText('.responsive-table th');
        //     assert.deepEqual(tableHeaders, tableHeadersTemplate, 'ERROR: is not all fields visible');
        //
        //     var tableRow = browser.getText('.responsive-table tr');
        //     var tableCheckbox = browser.getAttribute('md-checkbox', 'role');
        //
        //     var tableDownload = browser.isVisible('.responsive-table .fa-download');
        //
        //     assert.equal(tableDownload.length, tableCheckbox.length-1, 'ERROR: not for every checkbox there is download');
        //     assert.equal(tableRow.length, tableCheckbox.length, 'ERROR: not for every field is the checkbox visible');
        //
        //     browser.setValue('#input_search', 'incorrect value');
        //     browser.pause(3000);
        //
        //     var empty = browser.getText('.responsive-table td');
        //     assert.equal(empty, 'List empty', 'ERROR: not visible text List empty');
        //
        //     browser.click('#input_search');
        //     browser.setValue('#input_search', '225');
        //     browser.pause(2000);
        //
        //     var inputSearch = browser.getValue('#input_search');
        //     var tableRowSearch = browser.getText('.responsive-table tr');
        //
        //     var tableRowSearchStr = tableRowSearch.join(' ');
        //     assert.include(tableRowSearchStr, inputSearch, 'no value found');
        // });

        it('should visible pagination block', function () {

            assert(browser.isVisible('.pagination-first') === true, 'ERROR: not visible paginationField');
        });
    });
});