describe('Seampless for unpaidUser_account Merchant ', function() {

    beforeEach(function (done) {

        browser.windowHandleSize({width: 1280, height: 800});
        browser.url('/#/login');
        browser.call(done);
    });

    it('Login account Merchant for Unpaid User', function () {

        browser.click('#email');
        browser.setValue('#email', 'unpaid78@xoixa.com');
        var email = browser.getValue('#email');
        browser.click('#password');
        browser.setValue('#password', 'Qwerty22');
        browser.click('#login_btn');

        browser.url('/#/plan-upgrade');
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

    describe('unpaidUser_account test cases: =>', function () {

        beforeEach(function (done) {
            browser.url('/#/plan-upgrade');
            browser.pause(3000);
            browser.call(done);
        });

        // it('should be visible links and buttons for nav-bar menu', function () {
        //
        //     assert(browser.isVisible('h1=Account') === true, 'ERROR: is not visible Account =>>');
        //     assert(browser.isVisible('span=Plan & Upgrade') === true, 'ERROR: is not visible Plan & Upgrade');
        //     assert(browser.isVisible('span=Enhanced Verification Plans') === true, 'ERROR: is not visible Enhanced Verification Plans =>>');
        //     assert(browser.isVisible('span=Profile') === true, 'ERROR: is not visible Profile =>>');
        //     assert(browser.isVisible('span=Documents') === true, 'ERROR: is not visible Documents =>>');
        //     assert(browser.isVisible('h3=Active Subscriptions') === true, 'ERROR: is not visible Active Subscriptions =>>');
        //     assert(browser.isVisible('.view_enhanced_verifications_plans') === true, 'ERROR: is not visible links');
        //
        //
        //     browser.click('.view_enhanced_verifications_plans');
        //     browser.pause(2000);
        //     var linkEnhanced = browser.getUrl();
        //
        //     assert.equal(linkEnhanced, 'http://dev-portal.seamlesschex.com/#/enhanced-verification-plans',
        //         'this is an incorrect link');
        //     browser.back();
        //
        // });
        //
        // it('should be visible element table Active Subscriptions with headers ', function () {
        //     var ActiveTableTemplate = [
        //         'Subscriptions',
        //         'Status',
        //         'BV',
        //         'FC',
        //         'BA',
        //         'Signature Capture',
        //         'Payment Link',
        //         'Team',
        //         'Business',
        //         'Price',
        //         'Billing Start',
        //         'Next Invoice',
        //         'Action' ];
        //
        //     var arrActiveTable = browser.getText('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/' +
        //         'div/div/div/div[2]/div/table/thead/tr/th');
        //     assert.deepEqual(arrActiveTable, ActiveTableTemplate, 'no all fields present in the table Active Subscriptions');
        //
        //     var row = browser.getText('.table-striped', 'tr');
        //     var rowUnpaid = browser.isVisible('span=Unpaid');
        //     assert.equal(row.length, rowUnpaid.length, 'ERROR: is not row in the table status - Unpaid');
        //
        //
        //     if( row.length < 1 ) {
        //         assert.equal(row.length -1, 0, 'quantity rows more 1');
        //     }
        //     assert.isAbove(row.length -1, 0, 'quantity rows less 1');
        //
        //     assert(browser.isVisible('#renew_primary_plan') === true, 'ERROR: not visible button Renew');
        //     assert(browser.isVisible('button=Cancel') === true, 'ERROR: not visible button Cancel');
        //
        // });
        //
        // it('should be visible modal window at a click buttons ', function () {
        //
        //     browser.click('#renew_primary_plan');
        //     browser.pause(2000);
        //     var modalRenew = browser.isVisible('.md-transition-in');
        //     assert.equal(modalRenew, true, 'ERROR: not visible modal window');
        //     browser.pause(1500);
        //
        //     browser.click('span=No');
        //     browser.pause(1500);
        //
        //     browser.click('button=Cancel');
        //     browser.pause(2000);
        //     var modalCancel = browser.isVisible('p=To cancel, please email support@seamlesschex.com');
        //     assert.equal(modalCancel, true, 'ERROR: not visible modal window');
        //
        //     browser.click('span=Ok');
        //     browser.pause(1500);
        // });
        //
        // it('should be visible label,select and input link Profile ', function () {
        //
        //     browser.click('span=Profile');
        //     browser.pause(2000);
        //
        //     var elemVis = browser.getText('.margin-vertical=Please contact us if you need to update your profile information.');
        //     assert.equal(elemVis, 'Please contact us if you need to update your profile information.', 'ERROR: is not visible element');
        //
        //     assert(browser.isVisible('label=Business Name') === true, 'ERROR: is not visible businessLabel');
        //     assert(browser.isVisible('label=Contact Name') === true, 'ERROR: is not visible contactLabel');
        //     assert(browser.isVisible('label=Company Email') === true, 'ERROR: is not visible emailLabel');
        //     assert(browser.isVisible('label=Website') === true, 'ERROR: is not visible websiteLabel');
        //     assert(browser.isVisible('label=Tax ID') === true, 'ERROR: is not visible taxIdLabel');
        //     assert(browser.isVisible('label=Address') === true, 'ERROR: is not visible addressLabel');
        //     assert(browser.isVisible('label=State') === true, 'ERROR: is not visible stateLabel');
        //     assert(browser.isVisible('label=Zip') === true, 'ERROR: is not visible zipLabel');
        //     assert(browser.isVisible('label=Business Type') === true, 'ERROR: is not visible businessTypeLabel');
        //     assert(browser.isVisible('label=Phone Number') === true, 'ERROR: is not visible phoneNumberLabel');
        //
        //     var logo = browser.getText('.up-logo-lable');
        //     assert.equal(logo, 'Company logo:', 'not visible logo');
        //     assert(browser.isVisible('#name') === true, 'ERROR: no visible input nameInput');
        //     assert(browser.isVisible('#cname') === true, 'ERROR: no visible input cnameInput');
        //     assert(browser.isVisible('#email') === true, 'ERROR: no visible input emailInput');
        //     assert(browser.isVisible('#website') === true, 'ERROR: no visible input websiteInput');
        //     assert(browser.isVisible('#taxid') === true, 'ERROR: no visible input taxidInput');
        //     assert(browser.isVisible('#saddress') === true, 'ERROR: no visible input saddressInput');
        //     assert(browser.isVisible('#city') === true, 'ERROR: no visible input cityInput');
        //     assert(browser.isVisible('#state') === true, 'ERROR: no visible input stateInput');
        //     assert(browser.isVisible('#zip') === true, 'ERROR: no visible input zipInput');
        //     assert(browser.isVisible('#phone') === true, 'ERROR: no visible input phoneInput');
        //
        // });
        //
        // it('should be visible modal window at a click Upload logo ', function () {
        //
        //     browser.click('span=Profile');
        //     browser.pause(3000);
        //
        //     browser.click('button=Upload logo');
        //     browser.pause(3000);
        //
        //     assert(browser.isVisible('h3=Upload merchant Logo') === true, 'ERROR: is not visible title');
        //     assert(browser.isVisible('li=Only PNG images can be uploaded.') === true, 'ERROR: is not visible first item');
        //     assert(browser.isVisible('li=Image size should not exceed 1 MB.') === true, 'ERROR: is not visible listTwo item');
        //     assert(browser.isVisible('li=The width of the image should not exceed 110 pixels.') === true, 'ERROR: is not visible listFree item');
        //     assert( browser.isVisible('li=The height of the image should not exceed 80 pixels.') === true, 'ERROR: is not visible listFour item');
        //     assert(browser.isVisible('button=Close') === true, 'ERROR: no visible modalButtonClose or modalWindow');
        //     assert(browser.isVisible('button=Upload') === true, 'ERROR: no visible modalButtonUpload or modalWindow');
        //
        //     browser.click('button=Close');
        //     browser.pause(2000);
        // });
        //
        // it('should click link Documents and visible tables with headers', function () {
        //
        //     browser.click('span=Documents');
        //     browser.pause(2000);
        //
        //     assert(browser.isVisible('h3=Please upload the requested documents below to verify your account') === true,
        //         'ERROR: no visible titleDocuments');
        //     var arrUploadTemplate = [
        //         'Name', 'Action'
        //     ];
        //     var arrUploadTable = browser.getText('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div[1]' +
        //         '/div[2]/table/thead/tr/th');
        //     assert.deepEqual(arrUploadTable, arrUploadTemplate, 'no all fields present in the table Upload');
        //     var arrRequestingTemplate = [
        //         'Name', 'Rejection Reason', 'Uploaded', 'Action'
        //     ];
        //     var arrRequestingTable = browser.getText('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div[2]' +
        //         '/div[2]/table/thead/tr/th');
        //     assert.deepEqual(arrRequestingTable, arrRequestingTemplate, 'no all fields present in the table Requesting');
        //     var arrUploadedTemplate = [
        //         'Name', 'File', 'Status', 'Created', 'Uploaded', 'Action'
        //     ];
        //     var arrUploadedTable = browser.getText('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div[3]' +
        //         '/div[2]/table/thead/tr/th');
        //     assert.deepEqual(arrUploadedTable, arrUploadedTemplate, 'no all fields present in the table Uploaded');
        // });

        it('should be visible button Past Subscriptions, rows table and at a click table ', function () {

            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div/div/div/div[3]/button');
            browser.pause(2000);
            browser.isEnabled('span=Hide');

            assert(browser.isVisible('h3=Past Subscriptions') === true, 'ERROR: not visible header Past Subscriptions');
            browser.pause(2000);

            var arrPastTemplate = [ 'Subscriptions',
                'Status',
                'BV',
                'FC',
                'BA',
                'Signature Capture',
                'Payment Link',
                'Team',
                'Business',
                'Price',
                'Canceled',
                'Action' ];


            var arrPastTable = browser.getText('#listPastSubscriptions th');
            assert.deepEqual(arrPastTable, arrPastTemplate, 'no all fields present in the table Past Subscriptions');

            var rowsPast = browser.getText('#listPastSubscriptions tr');
            var rowCanceled = browser.isVisible('span=Canceled');
            var refresh = browser.isVisible('.fa-refresh');

            assert.equal(rowsPast.length-1, rowCanceled.length, 'ERROR: is not row in the table status - canceled');
            assert.equal(rowCanceled.length, refresh.length, 'ERROR: is not row in the table status - refresh');

            browser.click('.fa-refresh');
            browser.pause(2000);
            assert(browser.isVisible('h2=Confirm') === true);
            assert(browser.isVisible('p=Are you sure you want to Renew the subscription?') === true);
            assert(browser.isVisible('button=No') === true);
            assert(browser.isVisible('button=Yes') === true);

            browser.click('button=No');


        });
    });
});