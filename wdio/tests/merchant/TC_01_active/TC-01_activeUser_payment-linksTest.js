describe('SeamplessChex: TestCase: activeUser_payment-links: => ', function() {

    beforeEach(function (done) {

        browser.windowHandleSize({width:1280,height:800});
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

    describe('SeamplessChex: TestCase: activeUser_payment-links: => ', function() {

        beforeEach(function (done) {

            browser.url('#/payment-links');
            browser.call(done);
        });

        it('should be visible label, input, select and titles payment-links', function () {

            assert(browser.isVisible('label=Pay to the Order of') === true, 'ERROR: is not visible Pay to the Order of');
            assert(browser.isVisible('label=Amount') === true, 'ERROR: is not visible Amount');
            assert(browser.isVisible('label=Add Fee') === true, 'ERROR: is not visible Add Fee');
            assert(browser.isVisible('label=Memo') === true, 'ERROR: is not visible Memo');
            assert(browser.isVisible('span=Bank Auth') === true, 'ERROR: is not visible Bank Auth');
            assert(browser.isVisible('span=ID') === true, 'ERROR: is not visible ID');
            assert(browser.isVisible('label=Basic Verification') === true, 'ERROR: is not visible Basic Verification');
            assert(browser.isVisible('span=Fund Confirmation') === true, 'ERROR: is not visible Fund Confirmation');
            assert(browser.isVisible('span=Signature Required') === true, 'ERROR: is not visible Signature Required');
            assert(browser.isVisible('label=Thank You Page Redirect URL') === true, 'ERROR: is not visible Thank You Page Redirect URL');
            assert(browser.isVisible('label=Copy and paste payment link and send to customer via email or embed into your website') === true,
                'ERROR: is not visible Copy and paste payment ....');
            assert(browser.isVisible('button=Create Payment Link') === true, 'ERROR: is not visible Create Payment Link');
            assert(browser.isVisible('button=Copy') === true, 'ERROR: is not visible Copy');

            assert(browser.isVisible('h1=Payment Links') === true, 'ERROR: is not visible Payment Links');
            assert(browser.isVisible('span=Create') === true, 'ERROR: is not visible Create');
            assert(browser.isVisible('span=History') === true, 'ERROR: is not visible History');

            var selectList = $$('#pay_to_the_order_of>option');
            assert.isAbove(selectList.length, 0, 'ERROR: in the list less one points =>>');
            assert.equal(browser.isVisible('#amount'), true, 'ERROR: not field amountField =>>');
            assert.equal(browser.isVisible('#add_fee'), true, 'ERROR: not field add_feeField =>>');
            assert.equal(browser.isVisible('#memo'), true, 'ERROR: not field memoField =>>');
            assert.equal(browser.isVisible('#input_url'), true, 'ERROR: not field input_urlField =>>');
            assert.equal(browser.isVisible('#generateUrl'), true, 'ERROR: not field generateUrlField =>>');
        });

        it('should be checking state fields Placeholder, checkboxes, copy and paste payment-links', function () {

            assert.equal(browser.getAttribute('#amount', 'placeholder'), 'Enter Amount (optional)', 'ERROR: amountPlaceholder is not in field =>>');
            assert.equal(browser.getAttribute('#add_fee', 'placeholder'), 'Add Fee (optional)', 'ERROR: add_feePlaceholder is not in field =>>');
            assert.equal(browser.getAttribute('#memo', 'placeholder'), 'Enter Memo (optional)', 'ERROR: memoPlaceholder is not in field =>>');
            assert.equal(browser.getAttribute('#input_url', 'placeholder'), 'https://www.google.com/thank_you_url', 'ERROR: input_urlPlaceholder is not' +
                ' in field =>>');
            assert.equal(browser.getAttribute('#generateUrl', 'disabled'), 'true', 'ERROR: field copy and paste not disabled =>>');
            var stateCheckboxID = browser.getAttribute('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div[2]' +
                '/div/form/div[6]/div/span/md-checkbox', 'disabled');
            assert.equal(stateCheckboxID, 'true', 'ERROR: State checkbox ID not disabled =>>');

            var stateCheckboxBasicVerification = browser.getAttribute('//*[@id="mainContainer"]/div/div[3]/section[2]/div/' +
                'div/div/div/div/div[2]/div/form/div[7]/div/md-checkbox', 'aria-checked');
            assert.equal(stateCheckboxBasicVerification, 'true', 'ERROR: Basic Verification not checked=true =>>');

            var stateSignatureRequired = browser.getAttribute('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div' +
                '/div/div/div[2]/div/form/div[9]/div/span/md-checkbox', 'disabled');
            assert.equal(stateSignatureRequired, 'true', 'ERROR: State Signature Required not disabled =>>');
        });

        it('should be click label ID appears popup payment-links', function () {

            browser.click('span=ID');
            browser.pause(2000);
            browser.isVisible('/html/body/div[1]/div/div');
            browser.click('button=Close');
        });

        it('should be click label Signature Required appears popup payment-links', function () {

            browser.click('span=Signature Required');
            browser.pause(2000);
            browser.isVisible('/html/body/div[1]/div/div');
            browser.click('button=Subscribe');
        });

        it('should be click bookmark History - visible tables and titles payment-links', function () {

            var checkTableList1 = [
                'Url',
                'Amount',
                'Fee',
                'Memo',
                'Signature Enable',
                'Link Accessed',
                'Checks Created',
                'Created At',
                'Thank You Url',
                'Action'
            ];
            var checkTableList2 = [
                'Url',
                'Lead ID',
                'Amount',
                'Fee',
                'Memo',
                'ID',
                'Link Accessed',
                'Checks Created',
                'Created At',
                'Thank You Url',
                'Action'
            ];

            browser.click('span=History');
            browser.pause(2000);
            browser.getText('h3=Payment Links');
            browser.getText('h3=Bank Auth Links');

            var tableList1 = browser.getText('#table_payment_links th');
            assert.deepEqual(tableList1, checkTableList1, 'not all fields match');
            var tableList2 = browser.getText('#table_bank_auth_links th');
            assert.deepEqual(tableList2, checkTableList2, 'not all fields match');
        });

        it('should be visible link History pagination blocks visible payment-links', function () {

            browser.click('span=History');
            browser.pause(1000);

            var page = browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div[2]/div/div[1]' +
                '/div/div[3]/div/div/div[2]/ul');
            assert.equal(page, true, 'ERROR: not visible first block pagination =>>');

            var page1 = browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div[2]/div/div' +
                '[2]/div/div[3]/div/div/div[2]/ul');
            assert.equal(page1, true, 'ERROR: not visible last block pagination =>>');
        });

        it('should be visible delete link and link URl for each row in the table Payment Links' +
            'and .fa-external-link go to 2205/0/0 page', function () {

            browser.click('span=History');
            browser.pause(2000);

            var linkPay = $$('#table_payment_links .fa-external-link');
            var deleteLinkPay = $$('#table_payment_links .button-delete-link');

            var emptyBankPayment = browser.getText('#table_payment_links td');

            if (emptyBankPayment === 'List empty') {
                assert.equal(emptyBankPayment, 'List empty');
                console.log('Table Payment links List empty');
            } else {
                assert.deepEqual(linkPay.length, deleteLinkPay.length, 'ERROR: no match in the fields of the tables   =>>');

                browser.click('#table_payment_links .fa-external-link');
                browser.pause(5000);

                var bankUrlPayNoSign = browser.windowHandles();
                var bankUrlPayItemNoSign = bankUrlPayNoSign.value[1];
                browser.window(bankUrlPayItemNoSign);
                var bankUrlPayItemNoSignNew = browser.getUrl();

                assert.deepInclude(bankUrlPayItemNoSignNew, '2205/0/0');
                browser.close();
                browser.pause(2000);
            }
        });

        it('should be create and delete list item table Payment Links ', function () {

            browser.setValue('#amount', '8');
            browser.pause(1500);
            browser.setValue('#add_fee', '18');
            browser.pause(1500);
            browser.setValue('#memo', 'Test Payment Links');
            browser.pause(1500);
            browser.click('button=Create Payment Link');
            browser.pause(3500);

            browser.click('span=History');
            browser.pause(1500);
            browser.click('//*[@id="table_payment_links"]/tbody/tr[1]/td[10]/a/i');
            browser.pause(3500);
            assert(browser.isVisible('.md-transition-in') === true, 'ERROR: not visible modalDelete');
            browser.click('button=Yes');
            browser.pause(2000);
            assert(browser.isVisible('.alert-success') === true, 'ERROR: not visible alert window');
        });

        it('should be create and delete list item table Bank Auth Links ', function () {

            browser.setValue('#amount', '9');
            browser.pause(1500);
            browser.setValue('#add_fee', '19');
            browser.pause(1500);
            browser.setValue('#memo', 'Test Bank links');
            browser.pause(1500);
            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div[2]/div/form/div[5]' +
                '/div/md-checkbox');
            browser.pause(1500);
            browser.click('button=Create Payment Link');
            browser.pause(3500);

            browser.click('span=History');
            browser.pause(3000);

            browser.scroll(0, 850);
            browser.pause(2000);
            browser.click('//*[@id="table_bank_auth_links"]/tbody/tr[1]/td[11]/a/i');
            browser.pause(1500);
            assert(browser.isVisible('.md-transition-in') === true, 'ERROR: not visible modalDelete');
            browser.click('button=Yes');
            browser.pause(2000);
            assert(browser.isVisible('.alert-success') === true, 'ERROR: not visible alert window');
        });

        it('should be visible delete link and link URl for each row in the table Bank Auth Links ' +
            'and .fa-external-link go to 2205/0/1 page', function () {

            browser.scroll(0, -400);
            browser.click('span=History');
            browser.pause(2000);

            var emptyBank = browser.getText('#table_bank_auth_links td');
            var link = $$('#table_bank_auth_links .fa-external-link');
            var deleteLink = $$('#table_bank_auth_links .fa-close');
            if (emptyBank === 'List empty') {
                assert.equal(emptyBank, 'Table Bank Auth is list empty');
            } else {
                assert.equal(link.length, deleteLink.length, 'ERROR: no match in the fields of the tables  =>>');

                browser.click('#table_bank_auth_links .fa-external-link');
                browser.pause(5000);

                var bankUrl = browser.windowHandles();
                var bankUrlAuth = bankUrl.value[1];

                browser.window(bankUrlAuth);
                var bankUrlNew = browser.getUrl();
                browser.pause(3000);
                assert.deepInclude(bankUrlNew, '2205/0/1');
                browser.close();
                browser.pause(2000);
            }
        });

        it('Click links Learn More payment-links', function () {

            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div[2]/div/' +
                'form/div[6]/div/span/span/a');
            browser.pause(2000);

            var arrUrl = browser.windowHandles();
            browser.window(arrUrl.value[1]);
            assert(browser.getUrl() === 'http://dev-portal.seamlesschex.com/#/enhanced-verification-plans',
                'ERROR: is not match with link enhanced-verification-plans');
            browser.close();
        });
    });

});