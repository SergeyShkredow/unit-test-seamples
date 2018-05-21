describe('SeamplessChex: TestCase: unpaidUser_billing Merchant: => ', function() {

    beforeEach(function (done) {

        browser.windowHandleSize({width: 1280, height: 800});
        browser.url('/#/login');
        browser.call(done);
    });

    it('Login account Merchant for billing User ', function () {

        browser.click('#email');
        browser.setValue('#email', 'unpaid78@xoixa.com');
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

    describe(' unpaidUser_billing test cases: =>', function() {

        beforeEach(function (done) {
            browser.url('/#/billing-invoices');
            browser.pause(3000);
            browser.call(done);
        });

        it('should be visible elements title and div in the header', function () {

            assert(browser.isVisible('h1=Billing') === true, 'ERROR: no visible title Billing');
            assert(browser.isVisible('h3=Payment Method') === true, 'ERROR: no visible title Payment Method');
            assert(browser.isVisible('button=Update') === true, 'ERROR: no visible buttonUpdate');
            assert(browser.isVisible('span=Primary') === true, 'ERROR: no visible spanPrimary');
        });

        it('should click on the button Update visible popup with label and input', function () {

            browser.click('button=Update');
            browser.pause(3000);

            assert(browser.isVisible('//*[@id="update_or_add_credit_card"]/div[1]/div[1]/label') === true, 'ERROR: no visible titleUpdate');
            assert(browser.isVisible('//*[@id="update_or_add_credit_card"]/div[1]/div[1]/label') === true, 'ERROR: no visible CardholderLabel');
            assert(browser.isVisible('//*[@id="update_or_add_credit_card"]/div[1]/div[2]/label') === true, 'ERROR: no visible billingCountryLabel');
            assert(browser.isVisible('//*[@id="update_or_add_credit_card"]/div[1]/div[3]/label') === true, 'ERROR: no visible billingAddressLabel');
            assert(browser.isVisible('//*[@id="update_or_add_credit_card"]/div[2]/label') === true, 'ERROR: no visible cardNumberLabel');
            assert(browser.isVisible('//*[@id="update_or_add_credit_card"]/div[3]/label') === true, 'ERROR: no visible expiresLabel');
            assert(browser.isVisible('//*[@id="update_or_add_credit_card"]/div[4]/label') === true, 'ERROR: no visible cvcLabel');

            assert(browser.isVisible('#card_name') === true, 'ERROR: no visible cardholderInput');
            assert(browser.isVisible('#s2id_card_country') === true, 'ERROR: no visible billingCountryInput');
            assert(browser.isVisible('#card_address1') === true, 'ERROR: no visible billingAddressStreetInput');
            assert(browser.isVisible('#card_city') === true, 'ERROR: no visible billingAddressCityInput');
            assert(browser.isVisible('#card_state') === true, 'ERROR: no visible cardStateInput');
            assert(browser.isVisible('#card_zip') === true, 'ERROR: no visible cardZipInput');
            assert(browser.isVisible('#card_number') === true, 'ERROR: no visible cardNumberInput');
            assert(browser.isVisible('#card_exp_month') === true, 'ERROR: no visible expiresMonthInput');
            assert(browser.isVisible('#card_exp_year') === true, 'ERROR: no visible expiresYearInput');
            assert(browser.isVisible('#card_cvc') === true, 'ERROR: no visible cardCvcInput');
            assert(browser.isVisible('button=Close') === true, 'ERROR: no visible buttonClose');
            assert(browser.isVisible('/html/body/div[1]/div/div/div/div[3]/button[2]') === true, 'ERROR: no visible buttonUpdate');

            browser.click('button=Close');
            browser.pause(1500);
        });

        it('should click on the button Update expect updating data card', function () {

            var arrCard = [
                '4242424242424242', '4000056655665556', '2223003122003222',
                '5200828282828210', '6200000000000005', '6011111111111117',
                '6011000990139424', '3566002020360505', '5105105105105100'
            ];

            var randomNumber = arrCard[Math.floor(Math.random()*arrCard.length )];
            var randomMonth = Math.floor(Math.random()*(12-1) + 1);
            var randomYear = Math.floor(Math.random()*(21-19) + 19);
            var randomCvc = Math.floor(Math.random()*(999-101) + 100);

            browser.click('button=Update');
            browser.pause(3000);

            assert(browser.getValue('#card_name') === '', 'ERROR: no empty cardholderInput');
            assert(browser.getValue('#card_address1') === '', 'ERROR: no visible billingAddressStreetInput');
            assert(browser.getValue('#card_city') === '', 'ERROR: no visible billingAddressCityInput');
            assert(browser.getValue('#card_state') === '', 'ERROR: no visible cardStateInput');
            assert(browser.getValue('#card_zip') === '', 'ERROR: no visible cardZipInput');
            assert(browser.getValue('#card_number') === '', 'ERROR: no visible cardNumberInput');
            assert(browser.getValue('#card_exp_month') === '', 'ERROR: no visible expiresMonthInput');
            assert(browser.getValue('#card_exp_year') === '', 'ERROR: no visible expiresYearInput');
            assert(browser.getValue('#card_cvc') === '', 'ERROR: no visible cardCvcInput');

            browser.setValue('#card_name', 'test Card New');
            browser.click('#s2id_card_country');
            browser.pause(1500);
            browser.setValue('.select2-focused', 'austri');
            browser.pause(2000);
            browser.click('.select2-match');
            browser.pause(2000);
            browser.setValue('#card_address1', 'Something street');
            browser.setValue('#card_city', 'NY');
            browser.setValue('#card_state', 'NY');
            browser.setValue('#card_zip', '11050');
            browser.setValue('#card_number', randomNumber);
            browser.setValue('#card_exp_month', randomMonth);
            browser.setValue('#card_exp_year', randomYear);
            browser.setValue('#card_cvc', randomCvc);
            browser.pause(2000);
            browser.click('button=Update');
            browser.pause(2500);
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

        it('should be add new card all fields VALID at click ', function () {

            browser.click('span=ADD BACKUP CARD');
            browser.pause(3000);

            browser.setValue('#card_name', 'Test Card Unpaid');
            browser.pause(1000);
            browser.click('#s2id_card_country');
            browser.pause(2500);
            browser.setValue('.select2-focused', 'austri');
            browser.pause(3000);
            browser.click('.select2-match');
            browser.pause(3000);
            browser.setValue('#card_address1', 'Something Street');
            browser.pause(1000);
            browser.setValue('#card_city', 'NY');
            browser.pause(1000);
            browser.setValue('#card_state', 'NY');
            browser.pause(1000);
            browser.setValue('#card_zip', '04505');
            browser.pause(1000);
            browser.setValue('#card_number', '5555555555554444');
            browser.pause(1000);
            browser.setValue('#card_exp_month', '02');
            browser.pause(1000);
            browser.setValue('#card_exp_year', '19');
            browser.pause(1000);
            browser.setValue('#card_cvc', '055');
            browser.pause(1000);

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

        it('should visible table and table fields, checkboxes and download for each column ' +
            'work field - input', function () {

            var tableHeadersTemplate = [ '', 'Date', 'Amount', 'Status', 'Invoice', 'Action' ];

            var tableHeaders = browser.getText('.responsive-table th');
            assert.deepEqual(tableHeaders, tableHeadersTemplate, 'ERROR: is not all fields visible');

            var tableRow = browser.getText('.responsive-table tr');
            var tableCheckbox = browser.getAttribute('md-checkbox', 'role');

            var tableDownload = browser.isVisible('.responsive-table .fa-download');

            assert.equal(tableDownload.length, tableCheckbox.length-1, 'ERROR: not for every checkbox there is download');
            assert.equal(tableRow.length, tableCheckbox.length, 'ERROR: not for every field is the checkbox visible');

            browser.setValue('#input_search', 'incorrect value');
            browser.pause(3000);

            var empty = browser.getText('.responsive-table td');
            assert.equal(empty, 'List empty', 'ERROR: not visible text List empty');

            browser.click('#input_search');
            browser.setValue('#input_search', '02/03');
            browser.pause(2000);

            var inputSearchData = browser.getValue('#input_search');
            var tableRowSearch = browser.getText('.responsive-table tr');

            var tableRowSearchStr = tableRowSearch.join(' ');
            assert.include(tableRowSearchStr, inputSearchData, 'no value found');

            browser.click('#input_search');
            browser.setValue('#input_search', '22');
            browser.pause(2000);

            var inputSearchPay = browser.getValue('#input_search');
            assert.include(tableRowSearchStr, inputSearchPay, 'no value found');
        });

        it('should visible pagination block', function () {

            assert(browser.isVisible('.pagination-first') === true, 'ERROR: not visible paginationField');
        });
    });
});