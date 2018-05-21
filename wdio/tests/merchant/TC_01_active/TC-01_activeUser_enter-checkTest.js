describe('SeamplessChex: TestCase: activeUser_enter-check: => ', function() {

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
        browser.url('/#/enter-check');
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

    describe('SeamplessChex: TestCase: activeUser_enter-check: => ', function() {

        beforeEach(function (done) {

            browser.url('/#/enter-check');
            browser.pause(2000);
            browser.call(done);
        });

        it('should be visible Titles enter-check', function () {

            assert.equal(browser.isVisible('.content-header'), true, 'no title Enter');
            assert.equal(browser.isVisible('.enter-check-header-hight h3'), true, 'no sub title Enter Customers Check Information');
        });

        it('should be visible fields label, input, checkbox, button in enter-check ', function () {

            assert.equal(browser.isVisible('label=Account Holder Name:'), true, 'ERROR: not label Account Holder =>>');
            assert.equal(browser.isVisible('label=Email:'), true, 'ERROR: not label email =>>');
            assert.equal(browser.isVisible('label=Phone:'), true, 'ERROR: not label phone =>>');
            assert.equal(browser.isVisible('label=Check Number:'), true, 'ERROR: not label check_number =>>');
            assert.equal(browser.isVisible('label=Check Amount:'), true, 'ERROR: not label check_amount =>>');
            assert.equal(browser.isVisible('label=Memo:'), true, 'ERROR: not label memo ==>');
            assert.equal(browser.isVisible('label=Routing Number:'), true, 'ERROR: not label routing_number =>>');
            assert.equal(browser.isVisible('label=Account Number:'), true, 'ERROR: not label account_number =>>');
            assert.equal(browser.isVisible('label=Confirm Account'), true, 'ERROR: not label Confirm =>>');

            assert.equal(browser.isVisible('#name'), true, 'ERROR: is not visible input Account Holder =>>');
            assert.equal(browser.isVisible('#email'), true, 'ERROR: is not visible input email =>>');
            assert.equal(browser.isVisible('#phone'), true, 'ERROR: is not visible input phone =>>');
            assert.equal(browser.isVisible('#check_number'), true, 'ERROR: is not visible input check_number =>>');
            assert.equal(browser.isVisible('#check_amount'), true, 'ERROR: is not visible input check_amount =>>');
            assert.equal(browser.isVisible('#memo'), true, 'ERROR: is not visible input memo =>>');
            assert.equal(browser.isVisible('#routing_number'), true, 'ERROR: is not visible input routing_number =>>');
            assert.equal(browser.isVisible('#account_number'), true, 'ERROR: is not visible input account_number =>>');
            assert.equal(browser.isVisible('#confirm_account_number'), true, 'ERROR: is not visible input confirm_account_number =>>');
            assert.equal(browser.isVisible('#enable_basic_verification'), true, 'ERROR: checkboxBasic is not Visible =>>');
            assert.equal(browser.isVisible('#enable_fund_confirmation'), true, 'ERROR: checkboxFund is not Visible =>>');
            assert.equal(browser.isVisible('#signature_not_required'), true, 'ERROR: checkboxSignature is not Visible =>>');
            assert.equal(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/form/div/div[3]' +
                '/div/label[1]/md-checkbox', 'aria-checked'), true, 'ERROR: is not visible checkboxEmail =>>');
            assert.equal(browser.isVisible('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/form/div/div[3]' +
                '/div/label[3]/md-checkbox'), true, 'ERROR: is not visible checkboxAddress =>>');


            var checkboxSignatureActive = browser.getAttribute('#signature_not_required', 'aria-checked');
            assert.equal(checkboxSignatureActive, 'true', 'ERROR: checkbox Signature not TC_01_active in default =>>');

            var checkboxEmailActive = browser.getAttribute('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/form/div/div[3]' +
                '/div/label[1]/md-checkbox', 'aria-checked');
            assert.equal(checkboxEmailActive, 'true', 'ERROR: checkbox Email not TC_01_active in default =>>');

            assert.equal(browser.isVisible('#save_check'), true, 'ERROR: no visible buttonSave =>>');
            assert.equal(browser.isVisible('#btn_cancel_enter_check'), true, 'ERROR: no visible buttonCancel =>>');
            assert.equal(browser.isVisible('.check-image-wrapper.check-for-admin'), true, 'ERROR: not visible div with class=check-image-wrapper check-for-admin =>>');
        });

        it('should be behavior checkboxes in enter-check', function () {

            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/form/div/div[3]/div/label[1]/md-checkbox');
            browser.pause(2000);
            var stateEmail = browser.getAttribute('#email', 'disabled');
            assert.equal(stateEmail, 'true', 'ERROR: email is not disabled =>>');

            var stateAddress = browser.getAttribute('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/form/div/div[3]' +
                '/div/label[3]/md-checkbox', 'aria-checked');
            if (stateAddress) {
                assert.equal(browser.isVisible('#address'), true, 'ERROR: not field address =>>');
                assert.equal(browser.isVisible('#city'), true, 'ERROR: not field city =>>');
                assert.equal(browser.isVisible('#state'), true, 'ERROR: not field state =>>');
                assert.equal(browser.isVisible('#zip'), true, 'ERROR: not field zip =>>');
            } else {
            }
            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/form/div/div[3]' +
                '/div/label[3]/md-checkbox');
            browser.pause(1000);

            var stateEmailNext = browser.getAttribute('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/form/div/' +
                'div[3]/div/label[1]/md-checkbox', 'aria-checked');
            assert.equal(stateEmailNext, 'true', 'ERROR: not true checkbox Email =>>');
        });

        it('should the button Cancel move /#/dashboard Enter-check', function () {

            browser.click('#btn_cancel_enter_check');
            browser.pause(3000);
            var dashboardLink = browser.getUrl();
            assert.equal(dashboardLink, 'http://dev-portal.seamlesschex.com/#/dashboard', 'is not move #/dashboard')
        });

        it('should be check the form submission with valid fields Enter-check', function () {

            browser.setValue('#name', 'test Active');
            browser.pause(1000);
            browser.setValue('#email', 'test@test.com');
            browser.pause(1000);
            browser.setValue('#phone', '099998888');
            browser.pause(1000);
            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/form/div/div[3]/div/label[3]/md-checkbox');
            browser.pause(1000);
            browser.setValue('#address', '51 street');
            browser.pause(1000);
            browser.setValue('#city', 'New York');
            browser.pause(1000);
            browser.setValue('#state', 'NY');
            browser.pause(1000);
            browser.setValue('#zip', '05205');
            browser.pause(1000);
            var random = Math.floor(Math.random() * 3000) + 10001;

            browser.setValue('#check_number', random);
            browser.pause(1000);
            browser.setValue('#check_amount', '5.00');
            browser.pause(1000);
            browser.setValue('#memo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
            browser.setValue('#routing_number', '024000024');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            browser.click('button=Enter Anyway');
            browser.pause(2000);
            browser.setValue('#account_number', '11112');
            browser.pause(1000);
            browser.setValue('#confirm_account_number', '11112');
            browser.pause(4000);
            browser.click('#save_check');
            browser.pause(2000);
            var url = browser.getUrl();
            assert.equal(url, 'http://dev-portal.seamlesschex.com/#/dashboard', 'no click on the button Save ');
        });

        it('should be checking each field for validity Enter-check', function () {

            browser.setValue('#name', '');
            browser.pause(1000);
            browser.click('#email');
            browser.pause(2000);
            var nameFieldRes = browser.getText('span=Please Enter Account Holder Name');
            assert.include(nameFieldRes, 'Please Enter Account Holder Name', 'there is no window with require message');

            browser.setValue('#name', 'test');
            browser.pause(1000);
            browser.setValue('#email', '');
            browser.pause(1000);
            browser.setValue('#phone', '099998888');
            browser.pause(1000);
            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/form/div/div[3]/div/label[3]/md-checkbox');
            browser.setValue('#address', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var addressFieldRes = browser.getText('span=Please Enter Address');
            assert.include(addressFieldRes, 'Please Enter Address', 'there is no window with require message');

            browser.setValue('#address', 'Something');
            browser.pause(1000);
            browser.setValue('#city', '');
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
            browser.setValue('#memo', '');
            browser.pause(1000);
            browser.setValue('#routing_number', '');
            browser.pause(1000);
            browser.click('#memo');
            browser.pause(2000);
            var routing_numberFieldNull = browser.getText('span=Please Enter Check Routing Number');
            assert.include(routing_numberFieldNull, 'Please Enter Check Routing Number',
                'there is no window with require message');

            browser.setValue('#routing_number', '255255255');
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
            var memoFieldValid = browser.getText('span=Please Enter Check Description');
            assert.include(memoFieldValid, 'Please Enter Check Description',
                'there is no window with require message');

            browser.setValue('#memo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
            browser.pause(2000);
            browser.click('#save_check');
            browser.pause(2000);
            var emailFieldValid = browser.getText('span=Please Enter Email');
            assert.include(emailFieldValid, 'Please Enter Email',
                'there is no window with require message');

            browser.setValue('#email', 'test@gmail.com');
            browser.pause(1000);
            browser.click('#save_check');
            browser.pause(2000);
            var nameFieldValid = browser.getText('span=First and Last names must be at least 2, and max 40 characters each');
            assert.include(nameFieldValid, 'First and Last names must be at least 2, and max 40 characters each',
                'there is no window with require message');

            browser.setValue('#name', 'test Active');
            var checkNew = browser.getValue('#check_number');
            browser.pause(1000);
            browser.click('#save_check');
            browser.pause(4000);
            var urlValid = browser.getUrl();
            assert.equal(urlValid, 'http://dev-portal.seamlesschex.com/#/dashboard');

            var checkDashboard = browser.getText('table>tbody>tr>td');
            assert.include(checkDashboard, checkNew, 'ERROR: not create new check');
            browser.back();
        });

        it('should be go to page  dashboard by click button Cancel', function () {

            browser.url('/#/enter-check');
            browser.pause(2000);

            browser.click('#btn_cancel_enter_check');
            browser.pause(2000);
            var btnClick = browser.getUrl();
            assert.equal(btnClick, 'http://dev-portal.seamlesschex.com/#/dashboard', 'ERROR: is not endpoint #/dashboard =>>');
        });

        it('should be open new page http://dev-portal.seamlesschex.com/#/enhanced-verification-plans ', function () {

            browser.click('.fa-question-circle-o');
            browser.pause(3000);

            var arrUrl = browser.windowHandles();
            var arrUrlItem = arrUrl.value[1];
            browser.window(arrUrlItem);
            assert(browser.getUrl() === 'http://dev-portal.seamlesschex.com/#/enhanced-verification-plans', 'ERROR: is not match with link');
        });
    });
});