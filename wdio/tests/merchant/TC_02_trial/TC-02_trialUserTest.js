describe('Seampless TrialUser Merchant ', function() {

    beforeEach(function (done) {

        browser.windowHandleSize({width:1280,height:800});
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
        browser.url('/#/merchant-documents');
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

    it('should be visible and quantity list Left SideBar for Trial user ', function () {

        assert(browser.isVisible('.sidebar-menu'), true, 'ERROR: is not visible sidebar-menu');
        var items = browser.getTagName('.sidebar-menu>li');
        assert(items.length, 9,'does not match the quantity');
    });

    it('should be visible link Report an issue for Trial user ', function () {

        assert.equal(browser.isVisible('#enter_check_step'), true, 'ERROR: is not visible enter_check');
        browser.click('#enter_check_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/enter-check');
    });

    it('should be visible link activate for Trial user ', function () {

        assert.equal(browser.isVisible('#view_our_plans'), true, 'ERROR: is not visible view_our_plans');
        browser.click('#view_our_plans');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/activate');
    });

    it('should be visible link dashboard for Trial user ', function () {

        assert.equal(browser.isVisible('#dashboard_step'), true, 'ERROR: is not visible dashboard');
        browser.click('#dashboard_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/dashboard');
    });

    it('should be visible link payment-links for Trial user ', function () {

        assert.equal(browser.isVisible('#payment_links_step'), true, 'ERROR: is not visible payment_links');
        browser.click('#payment_links_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/payment-links');
    });


    it('should be visible link account for Trial user ', function () {

        assert.equal(browser.isVisible('#account_step'), true, 'ERROR: link account not visible');
        browser.click('#account_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/plan-upgrade');
    });

    it('should be visible link  billing-invoices for Trial user ', function () {

        assert.equal(browser.isVisible('#billing'), true, 'ERROR: is billing-invoices not visible');
        browser.click('#billing');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/billing-invoices');
    });

    it('should be visible link batches for Trial user ', function () {

        assert.equal(browser.isVisible('#batches_step'), true, 'ERROR: is batches not visible');
        browser.click('#batches_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/batch-manager');
    });

    it('should be visible link bulk_upload for Trial user ', function () {

        assert.equal(browser.isVisible('#bulk_upload_step'), true, 'ERROR: is bulk_upload not visible');
        browser.click('#bulk_upload_step');
        browser.pause(3000);
        var url = browser.getUrl();
        assert.equal(url, 'http://dev-portal.seamlesschex.com/#/bulk-upload');
    });

    it('should be visible link View Test Data for Trial user ', function () {

        assert.equal(browser.isVisible('.viwe_test_data'), true, 'ERROR: is not visible viwe_test_data');
        browser.pause(2000);
    });


    it('should click button Report an issue for Trial user ', function () {

        browser.click('.btn_report_an_issue');
        browser.pause(2000);
        assert.equal(browser.getText('h3=Send Bug Report'), 'Send Bug Report', 'do not title');
        assert.equal(browser.isVisible('button=Close'), true, 'do not button Close');
        assert.equal(browser.isVisible('button=Send'), true, 'do not button Send');
        browser.click('button=Close');
        browser.pause(2500);
    });

    it('should be click button "Send" in modal-window for Trial user ', function () {

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
    });

});