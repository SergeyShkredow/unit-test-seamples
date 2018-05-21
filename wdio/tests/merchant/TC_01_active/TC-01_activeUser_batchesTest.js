describe('activeUser_batches: => ', function() {
    beforeEach(function (done) {

        browser.windowHandleSize({width: 1280, height: 800});
        browser.url('/#/login');
        browser.call(done);
    });

    it('Login account for activeUser_batches ', function () {

        browser.click('#email');
        browser.setValue('#email', 'uxk44934@xoixa.com');
        var email = browser.getValue('#email');
        browser.click('#password');
        browser.setValue('#password', 'Qwerty22');
        browser.click('#login_btn');

        browser.url('/#/batch-manager');
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

    describe('SeamplessChex: TestCase: activeUser_batches: => ', function() {

        beforeEach(function (done) {

            browser.url('/#/batch-manager');
            browser.pause(2000);
            browser.call(done);
        });

        it('should visible title and button Help activeUser_batches ', function () {

            var titleBat = browser.getText('.content-header h1');
            assert.include(titleBat, 'Batch Manager', 'ERROR: not visible title batch Manager');

            browser.click('a=Help');
            var modal = browser.isVisible('/html/body/div[1]/div');
            assert.equal(modal, true, 'ERROR: not visible modal');
            browser.click('button=Close');
            browser.pause(1000);
        });

        it('should visible table in link Batches activeUser_batches ', function () {
            var tableRowTemplate = 'Batch Details Deposit Details Print Details';
            var tableRowChildrenTemplate = 'Status Update Time Closing Time Total Checks Total Amount Status Deposited By' +
                ' Deposited Date Status Printed By Printed Date Action';
            browser.click('span=Batches');
            var tableRow = browser.getText('.dataTable>thead>tr');

            assert.equal(tableRow[0], tableRowTemplate);
            assert.equal(tableRow[1], tableRowChildrenTemplate);


            var emptyRow = browser.getText('//*[@id="mainContainer"]/div/div[3]' +
                '/section[2]/div/div/div/div/div/div/div[2]/div/div/div/div[2]/table/tbody/tr[1]');

            if (emptyRow === 'list Empty') {
                this.skip();

            }

            // var statusColumn = browser.getAttribute('table>tbody>tr>td>a', 'title');
            // var statusColumn = browser.getText('table>tbody>tr>td>a');

            // var rowOpen = statusColumn.split(' ');
            // console.log(statusColumn);

            assert.equal( browser.isVisible('.pagination_wrapp'), true, 'ERROR: not visible pagination block')
        });

        it('should visible pagination block activeUser_batches ', function () {

            browser.click('span=Batch Setup');
            browser.pause(2000);
            assert.equal(browser.isVisible('h3=Processing Cutoff Settings'), true, 'ERROR: not visible title Processing Cutoff Settings');
        });
    });
});
