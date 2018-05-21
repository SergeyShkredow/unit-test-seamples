describe('SeamplessChex: TestCase: trialUser_bulkUpload: => ', function() {

    beforeEach(function (done) {

        browser.windowHandleSize({width: 1280, height: 800});
        browser.url('/#/login');
        browser.call(done);
    });

    it('Login account for trialUser_bulkUpload ', function () {

        browser.click('#email');
        browser.setValue('#email', 'hwk28866@xoixa.com');
        var email = browser.getValue('#email');
        browser.click('#password');
        browser.setValue('#password', 'Qwerty22');
        browser.click('#login_btn');
        browser.url('/#/bulk-upload');
        browser.waitForVisible('.introjs-skipbutton',5000);
        browser.click('.introjs-skipbutton');
        browser.pause(2000);
        browser.click('#account-dropdown');
        browser.waitForExist('#header_member_since',5000);
        var res = browser.getText('#header_member_since');
        var arr = res.split('\n');
        var resArr = arr[0];
        assert.equal(resArr, email, "ERROR: Login is not equal with username=>>");
        browser.click('#account-dropdown');
    });

    describe('SeamplessChex: TestCase: trialUser_bulkUpload: => ', function() {

        beforeEach(function (done) {

            browser.click('#bulk_upload_step');
            browser.pause(2000);
            browser.call(done);
        });

        it('should visible title and buttons header in  trialUser_bulkUpload ', function () {

            assert.equal(browser.isVisible('.content-header=Bulk Upload'), true, 'ERROR: not visible title batches');
            assert.equal(browser.isVisible('.tabName=Upload History'), true, 'ERROR: not visible bulkButton');
            assert.equal(browser.isVisible('.tabName=Bulk Upload'), true, 'ERROR: not visible uploadButton');
            assert.equal(browser.isVisible('.tabName=Batch Logs'), true, 'ERROR: not visible batchButton');
        });

        it('should visible label, input type data and table with fields trialUser_bulkUpload ', function () {

            assert.equal(browser.isVisible('.control-label=Date Range'), true, 'ERROR: not visible uploadButton');
            assert.equal(browser.isVisible('.date-picker'), true, 'ERROR: not visible dataInput');
            browser.click('.date-picker');
            browser.pause(2300);
            var res = $('.ranges').$$('li')[5];
            browser.elementIdClick(res.value.ELEMENT);
            browser.pause(3000);
        });

        it('should visible label, input type data and table with fields for Upload History', function () {

            var tableRowTemplate = ['Merchant Name', 'Date', 'File', 'Total Checks', 'Total Amount'];

            var tableRow = browser.getText('.dataTable>thead>tr>th');
            assert.deepEqual(tableRow, tableRowTemplate, 'ERROR: field name does not match Template');
            var empty = browser.getText('.dataTable>tbody>tr>td');

                if (empty === 'List empty') {
                    assert.equal(empty, 'List empty');
                }
        });

        it('should visible pagination block for Upload History', function () {

            assert.equal(browser.isVisible('.pagin-battons'), true, 'ERROR: not visible paginationBlock');
        });

        it('should be visible button, checkboxes, label, span block for Bulk Upload', function () {

            browser.click('.tabName=Bulk Upload');
            assert.equal(browser.isVisible('.fileUpload=Browse'), true, 'ERROR: not visible browseSpan');
            assert.equal(browser.isVisible('button=Upload'), true, 'ERROR: not visible uploadButton');
            assert.equal(browser.isVisible('button=Override Duplicates'), true, 'ERROR: not visible overrideButton');
            assert.equal(browser.isVisible('a=Sample File Format'), true, 'ERROR: not visible sampleFileLink');
            assert.equal(browser.isVisible('label=Select File'), true, 'ERROR: not visible selectLabel');
        });

        it('should be uploading a file to the site for Bulk Upload', function () {

            browser.click('.tabName=Bulk Upload');
            browser.pause(1000);
            browser.chooseFile('#uploadBtn', '/home/tarf/Загрузки/SeamlessChexBulkUploadExample.xls');
            browser.pause(2000);
            browser.click('button=Upload');
        });

        it('should be when clicked appears buttons, input, select for Batch Logs', function () {

            browser.click('.tabName=Batch Logs');
            browser.pause(3000);
            assert.equal(browser.isVisible('button=CSV Log View'), true);
            assert.equal(browser.isVisible('button=Check View'), true);
            assert.equal(browser.isVisible('#input_search'), true, 'ERROR: not visible searchField');
            var optionSelect = $$('select>option');
            assert.isAbove(optionSelect.length, 0, 'field select empty');
        });

        it('should visible table for Batch Logs', function () {

            var tableBatchTemplate = [
                'Line No',
                'Name',
                'Check Number',
                'Check Amount',
                'Status',
                'Errors'
            ];

            browser.click('.tabName=Batch Logs');
            browser.pause(2000);
            var tableBatch = browser.getText('table>thead>tr>th');
            assert.deepEqual(tableBatch, tableBatchTemplate, 'ERROR: not all fields field visible');
        });

        it('should visible table row for select list, click item in Check Number column for Check View', function () {

            browser.click('.tabName=Batch Logs');
            browser.pause(2000);
            browser.click('button=CSV Log View');
            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div/div[2]/div/div/div[3]' +
                '/div[1]/div/div[3]/select');
            var selectItem = $('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div/div[2]/div/div/div[3]' +
                '/div[1]/div/div[3]/select').$$('option')[1];
            browser.elementIdClick(selectItem.ELEMENT);
            browser.pause(2000);

            browser.click('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div/div/div/div[2]/div/div/div[3]' +
                '/div[2]/table/tbody/tr[1]/td[3]/a');
            browser.pause(2000);

            assert(browser.isVisible('/html/body/div[1]') === true, 'ERROR: is not visible modal window Check info');
            browser.click('button=Close');
            browser.pause(2000);

        });

        it('should be for button Check View visible table row for select list', function () {

            browser.click('.tabName=Batch Logs');
            browser.pause(1500);
            browser.click('button=Check View');
            browser.pause(2500);
            var tableBatchCheckViewTemplate = ['Date', 'Check Number', 'Name', 'Memo', 'Amount'];
            var tableBatchCheckView = browser.getText('table>thead>tr>th');
            assert.deepEqual(tableBatchCheckView, tableBatchCheckViewTemplate, 'ERROR: not all fields field visible');
            var emptyTableCheck = browser.getText('//*[@id="mainContainer"]/div/div[3]/section[2]/div/div/div/div' +
                '/div/div/div[2]/div/div/div[3]/div/div[2]/table/tbody/tr/td');
            assert.equal(emptyTableCheck, 'List empty', 'table is not empty');
        });

        it('should visible pagination block for Batch Logs', function () {

            browser.click('.tabName=Upload History');
            browser.pause(2000);
            assert.equal(browser.isVisible('.pagin-battons'), true, 'ERROR: not visible paginationField');
        });
    });

});