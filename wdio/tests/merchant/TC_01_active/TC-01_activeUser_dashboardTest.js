var assert = require('chai').assert;
var expect = require('chai').expect;

describe('SeamplessChex: TestCase: activeUser_dashboard: => ', function() {
    // this.timeout(3000);


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

        browser.url('/#/dashboard');
        browser.pause(2000);
        browser.click('#account-dropdown');
        browser.pause(2000);
        var res = browser.getText('#header_member_since');

        var arr = res.split('\n');
        var resArr = arr[0];
        assert.equal(resArr, email, "ERROR: Login is not equal with username=>>");
        browser.click('#account-dropdown');
    });

    // it('Link dashboard for Active user ', function () {
    //
    //     browser.click('#dashboard_step');
    //     browser.pause(3000);
    //     var url = browser.getUrl();
    //     assert.equal(url, 'http://dev-portal.seamlesschex.com/#/dashboard','ERROR: is not correct link #dashboard_step =>>');
    //
    // });

    it('should be visible Link dasboard-widjets, inputs, select', function () {

        browser.click('#dashboard_step');
        assert.equal(browser.isVisible('.dasboard-widjets'), true,'ERROR: is not visible link dashboard-widjets=>>');
        assert.equal(browser.isVisible('#input_search'), true,'ERROR: is not visible field input =>>');
        assert.equal(browser.isVisible('#daterange'), true, 'ERROR: is not visible field daterange =>>');
        var select = browser.getText('.select-merchantPage-transaction.pull-left option');

        select.splice(0,1);
        assert.deepEqual(select, [ 'All', 'Active','Canceled'],'is not visible select list');
    });

    it('should be visible block with four button ', function () {
        var blockConst = [
            'Print on Check Paper',
            'Print for Mobile Deposit',
            'Download CSV',
            'Cancel Selected'
        ];

        assert.equal(browser.isVisible('.search-check-buttons'), true, 'ERROR: block search button is not visible =>>');
        var select = browser.getText('.search-check-buttons button');
        assert.deepEqual(select, blockConst, 'does not match the number of buttons');
    });

    it('should be string info contains two button ', function () {

        var select = browser.getText('.margin-horizontal');
        assert.notDeepEqual(select, [ 'Total Amount', '# of Check']);
    });

    it('should be header with 11 headings ', function () {
        var headListConst = [
            '',
            'Check #',
            'Name / Email / Phone',
            'Memo',
            'Amount',
            'Entry',
            'Verification',
            'Status',
            'Merchant',
            'Date',
            'Action'
        ];

        var heading = browser.getText('.table-hover th');
        assert.deepEqual(heading, headListConst, 'does not match the fields of heading');
    });

    it('should be visible button Duplicate and Edit block visible ', function () {
        browser.pause(2000);
        browser.click('#daterange');
        browser.pause(3000);
        var res = $('.ranges').$$('li')[5];                                 //PATTERN OF USE ID  (ID=res.value.ELEMENT)
        browser.elementIdClick(res.value.ELEMENT);
        browser.pause(3000);

        var action = browser.getAttribute('.table-hover>tbody>tr>td>a>i', 'title');
        var rows = browser.getText('.table-hover>tbody tr');
        assert.equal(rows.length, action.length/2, 'ERROR: not matching the buttons to the desired field =>>');
        browser.pause(2000);
        var duplicate = browser.getAttribute('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[3]/div/table/' +
            'tbody/tr[2]/td[11]/a[1]/i', 'title');
        assert.equal(duplicate, 'Duplicate', 'ERROR: this is not button Duplicate =>>');
        var edit = browser.getAttribute('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[3]/div/table/tbody/' +
            'tr[1]/td[11]/a[2]/i', 'title');
        assert.equal(edit, 'Edit', 'ERROR: this is not button Edit =>>');

        browser.click('#daterange');
        browser.pause(3000);
        var res1 = $('.ranges').$$('li')[3];
        browser.elementIdClick(res1.value.ELEMENT);
        browser.pause(2000);
    });

    it('should be the checkbox should be in first column  ', function () {

        browser.click('#daterange');
        browser.pause(3000);
        var res = $('.ranges').$$('li')[5];
        browser.elementIdClick(res.value.ELEMENT);
        browser.pause(3000);

        var checkbox = browser.getAttribute('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div[3]/div/' +
            'table/tbody/tr[1]/td[1]/md-checkbox', 'type');
        assert.equal(checkbox, 'checkbox', 'ERROR: is not checkbox should be in first column =>>');
    });

    it('should be search something by field #input_search', function () {

        browser.url('/#/dashboard');
        browser.click('#input_search');
        browser.setValue('#input_search', "incorrect input");
        browser.pause(2000);
        var rows = browser.getText('.DB_no_transactions_found');

        assert.equal(rows, 'No Transactions Found', 'ERROR: Error table =>>');
        browser.clearElement('#input_search');
    });

    it('should be pagination block visible ', function () {

        assert.equal(browser.isVisible('.pagin-battons'), true, 'ERROR: Pagination block is not visible =>>')
    });

});