import Page from '../../../pages/merchantPage/page'
import LoginPage from '../../../pages/merchantPage/login.page'

const page = new Page()

describe('SeamplessChex: TestCase: accountActiveUser Merchant: => ', function() {


        before(() => {
            browser.windowHandleSize({width: 1280, height: 800})
            // console.log('TEST RUN')
        });

    beforeEach(function (done) {

        browser.windowHandleSize({width:1280,height:800});
        browser.url('/#/login');
        browser.call(done);
    });

    it('Login account Merchant for Active user ', function () {

        // it('should deny access with wrong creds', function () {
        //     LoginPage.open();
        //     LoginPage.username.setValue('uxk44934@xoixa.com');
        //     LoginPage.password.setValue('Qwerty22');
        //     LoginPage.submit();
        //     console.log('TEST RUN')
        //     // expect(FormPage.flash.getText()).to.contain('Your username is invalid!');
        // });
        browser.click('#email');
        browser.setValue('#email', 'uxk44934@xoixa.com');
        var email = browser.getValue('#email');
        browser.click('#password');
        browser.setValue('#password', 'Qwerty22');
        browser.click('#login_btn');
        browser.url('/#/dashboard');
        browser.pause(2000);
        browser.click('#account-dropdown');
        browser.pause(2000);
        var res = browser.getText('#header_member_since');
        var arr = res.split('\n');
        var resArr = arr[0];
        assert.equal(resArr, email, "ERROR: Login is not equal with username=>>");
        browser.pause(2000);
    });

    it('should be visible and quantity list Left SideBar for Active user ', function () {

        assert(browser.isVisible('.sidebar-menu'), true, 'ERROR: is ot visible sidebar-menu');
        var items = browser.getTagName('.sidebar-menu>li');
        assert.equal(items.length, 8, 'ERROR: does not match the quantity =>>');
    });

    it('should be visible button View Enhanced Verifications Plans and go to link  ', function () {

        assert.equal(browser.isVisible('.view_enhanced_verifications_plans'), true, 'ERROR: button view Enhanced Verifications Plans is not visible =>>');
        browser.pause(2000);
        browser.click('.view_enhanced_verifications_plans');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/enhanced-verification-plans');
        var listDiv = browser.getTagName('.plan-stripe');
        assert.equal(listDiv.length, 4);
        browser.back();
        browser.pause(1500);
    });

    it('should be Blocks Bank Auth, Funds, Signature and link Basic and buttons' +
        'Upgrade Now and Contact us ', function () {

        browser.click('.view_enhanced_verifications_plans');
        browser.pause(1500);
        var bank = browser.getText('.bank_authentication h4');
        assert.equal(bank, 'Bank Authentication', 'title is not Bank Authentication');
        var buttonBank = browser.isVisible('.btn_bank_authentication');
        assert.equal(buttonBank, true, 'ERROR: no button Bank Authentication =>>');
        browser.click('.btn_bank_authentication');
        browser.pause(1000);
        var title = browser.getText('.modal-title');
        assert.equal(title[0],'Add Enhanced Verification & Signature Capture','ERROR: title found no matches =>>');

        var selectList = $$('.form-control>option');

        var tableInit = browser.isVisible('.table-striped');
        assert.equal(tableInit, true, 'ERROR: table is not visible =>>');

        assert.isAbove(selectList.length, 1, 'in the list less two points');

        browser.pause(1000);
        var close =  browser.getText('/html/body/div[1]/div/div/div/div[3]/button[1]');
        var Subscribe = browser.getText('/html/body/div[1]/div/div/div/div[3]/button[2]');
        assert.equal(close, 'Close', 'ERROR: do not button Close =>>');
        assert.equal(Subscribe, 'Subscribe', 'ERROR: do not button Subscribe =>>');

        browser.click('/html/body/div[1]/div/div/div/div[3]/button[1]');
        browser.pause(1000);

        var funds = browser.getText('.funds_confirmation h4');
        assert.equal(funds, 'Funds Confirmation', 'title is not  Funds Confirmation');
        assert.equal(browser.isVisible('.btn_funds_confirmation'), true, 'ERROR: no button  Funds Confirmation =>>');
        browser.pause(1500);

        var basic = browser.getText('.basic_verification h4');
        assert.equal(basic, 'Basic Verification', 'ERROR: title is not  Basic Verification =>>');
        assert.equal(browser.isVisible('.a_basic_verification'), true, 'ERROR: no link Basic Verification =>>');
        browser.pause(1500);
        var signature = browser.getText('.signature_capture h4');
        assert.equal(signature, 'Signature Capture', 'ERROR: title is not Signature Capture =>>');
        assert.equal(browser.isVisible('.btn_signature_capture'), true, 'ERROR: no button Signature Capture =>>');
    });

    it('should be visible link Report an issue for Active user ', function () {

        assert.equal(browser.isVisible('#enter_check_step'), true, 'ERROR: is not visible enter_check');
        browser.click('#enter_check_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/enter-check', 'ERROR: link does not match' +
            ' #enter_check_step =>>');
    });

    it('should be visible link dashboard for Active user ', function () {

        assert.equal(browser.isVisible('#dashboard_step'), true, 'ERROR: is not visible dashboard');
        browser.click('#dashboard_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/dashboard',
            'ERROR: link does not match #dashboard_step =>>');
    });

    it('should be visible link payment-links for Active user ', function () {

        assert.equal(browser.isVisible('#payment_links_step'), true, 'ERROR: is not visible payment_links');
        browser.click('#payment_links_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/payment-links',
            'ERROR: link does not match #payment_links_step =>>');
    });

    it('should be visible link account for Active user ', function () {

        assert.equal(browser.isVisible('#account_step'), true, 'ERROR: is not visible account');
        browser.click('#account_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/plan-upgrade',
            'ERROR: link does not match #account_step =>>');
    });

    it('should be visible link billing-invoices for Active user ', function () {

        assert.equal(browser.isVisible('#billing'), true, 'billing-invoices not visible');
        browser.click('#billing');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/billing-invoices',
            'ERROR: link does not match #billing =>>');
    });

    it('should be visible link batches for Active user ', function () {

        assert.equal(browser.isVisible('#batches_step'), true, 'ERROR: is not visible batches');
        browser.click('#batches_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/batch-manager',
            'ERROR: link does not match #batches_step =>>');
    });

    it('should be visible link bulk_upload for Active user ', function () {

        assert.equal(browser.isVisible('#bulk_upload_step'), true, 'ERROR: is not visible bulk_upload');
        browser.click('#bulk_upload_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/bulk-upload',
            'ERROR: link does not match #bulk_upload_step ==>');
    });

    it('should be visible link View Test Data for Active user ', function () {

        assert.equal(browser.isVisible('.viwe_test_data'), true,'ERROR: link View Test Data is not visible =>>');
    });

});