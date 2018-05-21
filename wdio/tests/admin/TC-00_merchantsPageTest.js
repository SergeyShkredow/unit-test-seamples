var assert = require('chai').assert;
var expect = require('chai').expect;

describe('SeamplessChex: TestCase: MerchantPage: => ', function() {
    // this.timeout(3000);

    beforeEach(function (done) {
        browser.windowHandleSize({width:1280,height:800});
        browser.url('/#/login');
        browser.call(done);
    });

    it('check correct all fields form  ', function () {

        browser.click('#email');
        browser.setValue('#email', 'sumantaroot@seamlesschex.com');
        var email = browser.getValue('#email');
        browser.click('#password');
        browser.setValue('#password', 'Demo0987654321');
        browser.click('#login_btn');
        browser.pause(3000);
        browser.click('#account-dropdown');

        var res = browser.getText('#header_member_since');

        var arr = res.split('\n');
        var resArr = arr[0];
        assert.equal(resArr, email,'ERROR: Login is not equal with username=>>');
        browser.pause(2000);
        browser.click('#account-dropdown');
    });

    it('test  table row array button vs lock ', function () {

        var isVisible = browser.getAttribute('#lock_merchant', "title");
        assert(isVisible, true, 'ERROR: don\'t not button vs lock =>>');
    });

    it('test  table row array button vs edit ', function () {

        var isVisible = browser.getAttribute('#edit_merchant', "title");
        assert(isVisible, true, 'ERROR: don\'t not button vs edit =>>');
    });

    it('test  table row array button vs ghost_login ', function () {

        var isVisible = browser.getAttribute('#ghost_login', "title");
        assert(isVisible, true, 'ERROR: don\'t not button vs ghost_login =>>');
    });

    it('Search something by field #input_search', function () {

        browser.setValue('#input_search', "aafwrtegthyrnj");
        browser.pause(3000);
        var rows = browser.getText('#list_merchants>tbody>tr>td');

        assert.equal(rows, 'List empty', 'ERROR: Error table =>>');

        browser.clearElement('#input_search');

        browser.pause(2000);
    });

    it('Visible block pagination ', function () {

        var paginationWrapp = browser.isVisible('.pagination_wrapp');
        assert.equal(paginationWrapp, true,'ERROR: pagination not visible =>>');

    });

    it('Visible button and go to page New Merchant ', function () {

        browser.click('#button_add_new_merchant');
        browser.pause(2000);
        var url = browser.getUrl();
        browser.pause(2000);
        assert.equal(url,"http://dev-portal.seamlesschex.com/#/merchant-new");
        browser.pause(2000);
        browser.back();
        browser.pause(2000);
    });

    it('Visible inputSearch for form ', function () {

        var inputSearch = browser.isVisible('#input_search');
        assert.equal(inputSearch, true, 'ERROR: inputSearch not visible =>>');
    });

    it('Visible selectStatus for form ', function () {

        var selectStatus = browser.isVisible('#select_status');
        assert.equal(selectStatus, true,  'ERROR: selectStatus not visible =>>');
    });

    it('Visible  for form ', function () {

        var buttonReset = browser.isVisible('#button_reset_filter');
        assert.equal(buttonReset, true,  'ERROR: buttonReset not visible =>>');
    });

    it('Visible selectLabel for form ', function () {

        var selectLabel = browser.isVisible('#select_label');
        assert.equal(selectLabel, true, 'ERROR: selectLabel not visible');
    });

    it('Visible quickFilter for form ', function () {

        var quickFilter = browser.isVisible('#quick_filter');
        assert.equal(quickFilter, true,  'ERROR: quickFilter not visible =>>');
    });

    it('Button reset clear field find ', function () {

        browser.setValue('#input_search', "test");
        browser.pause(2000);
        browser.click("#button_reset_filter");

        browser.clearElement('#input_search');
        var value = browser.getValue('#input_search');
        assert.equal(value, '', 'ERROR: Error button reset test =>>');

        browser.pause(2000);
    });

    it('Call popup  #lock_merchant', function () {

        browser.click('#lock_merchant');
        browser.pause(3000);

        var dialogTextH2 =  browser.getText('.md-title');
        var dialogText =  browser.getText('.md-dialog-content-body>p');

        assert.equal(dialogText, 'Are you sure you want to lock the company?', 'ERROR: not title =>>');
        assert.equal(dialogTextH2, 'Confirm', 'ERROR: not content =>>');
        browser.pause(1000);

        var buttonAll = browser.getText('md-dialog-actions>button>span');
        var result = buttonAll.length;
        expect(result, 2);

        browser.click('md-dialog-actions>button');
        browser.pause(2000);
    });

    it('Edit', function () {
        var tokenArr = browser.getAttribute('#edit_merchant', 'href');
        browser.click('#edit_merchant');
        browser.pause(2000);

        var tokenId = browser.getUrl();
        assert.deepInclude(tokenArr, tokenId, 'array contains item' );

        browser.back();
        browser.pause(2000);

    });

    it('Call popup  #unlock_merchant', function () {
        var selectBox = $('#select_status');
        // browser.click('#select_status');
        browser.pause(1000);
        selectBox.selectByIndex(2);
        browser.pause(1000);

        browser.click('#unlock_merchant');
        browser.pause(2000);

        var dialogTextH2 =  browser.getText('.md-title');
        var dialogText =  browser.getText('.md-dialog-content-body>p');

        assert.equal(dialogText, 'Are you sure you want to unlock the company?', 'ERROR: not title =>>');
        assert.equal(dialogTextH2, 'Confirm', 'ERROR: not content =>>');
        browser.pause(1000);

        var buttonAll = browser.getText('md-dialog-actions>button>span');

        var result = buttonAll.length;
        expect(result, 2);

        browser.click('md-dialog-actions>button');
        browser.pause(2000);

        browser.pause(1000);
        selectBox.selectByIndex(1);

    });

    it('Search by field #input_search', function () {

        browser.setValue('#input_search', "test");
        browser.pause(4000);

        var rows = $$('#list_merchants tr');
        var rowsLength = rows.length-1;

        assert.notEqual(0, rowsLength, 'table empty');
        browser.pause(2000);
        browser.setValue('#input_search', "");
        browser.pause(3000);

    });

    it('select_status is don\'t empty', function () {

        var selectTrue = $$('#select_status option');
        var result = selectTrue.length;
        // var result = 0;
        assert.notEqual(0, result, 'ERROR: select empty =>>');
    });

    it('select_label is don\'t empty', function () {

        var selectList = $$('#select_label option');
        var selectResult = selectList.length;

        assert.notEqual(0, selectResult, 'select empty');
    });

    it('table is don\'t empty', function () {

        var tableList = $$('#list_merchants tr');
        var tableResult = tableList.length-1;

        assert.notEqual(0, tableResult, 'table empty');
    });

    it('test  table row array button vs unlock ', function () {

        var selectBox = $('#select_status');

        selectBox.selectByIndex(2);

        browser.pause(1000);

        var isVisible = browser.getAttribute('#unlock_merchant', "title");

        assert(isVisible, true, 'don\'t not button vs unlock');
    });

});

