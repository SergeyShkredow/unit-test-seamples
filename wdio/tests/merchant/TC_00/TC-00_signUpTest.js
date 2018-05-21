describe('SeamplessChex LogIn form: =>', function() {

    beforeEach(function (done) {

        browser.url('/#/login');
        browser.call(done);
    });

    it('should go to the link sign_up_link ', function () {
        browser.click('#sign_up_link');
        browser.pause(3000);
        var signUp =  browser.getUrl();
        assert(signUp, 'https://seamlesschex.com/signup/?_ga=2.256974664.235766216.1521561913-188283411.1521195744');
        browser.back();

    });

    it('should go to the link forgot-password ', function () {
        browser.click('#reset_password_link');
        browser.pause(3000);
        var reset =  browser.getUrl();
        assert(reset, 'http://dev-portal.seamlesschex.com/#/forgot-password');
        browser.back();

    });

    it('should go to the link legacy_portal_link ', function () {
        browser.click('#legacy_portal_link');
        browser.pause(3000);
        var legacy =  browser.getUrl();
        assert(legacy, 'https://seamlesschex.com/admin/?_ga=2.37502051.235766216.1521561913-188283411.1521195744');
        browser.back();
    });

    it('should check email true password false', function () {

        browser.click('#email');
        browser.setValue('#email', 'sumantaroot@seamlesschex.com');
        browser.click('#password');
        browser.setValue('#password', 'Demo0987');
        browser.click('#login_btn');

        var err = !browser.isVisible('.alert-danger');
        for (var k =0; k<=4; k++){
            if(err){
                browser.pause(2000);

                browser.clearElement('#password');
                browser.click('#password');
                browser.setValue('#password', 'Demo0987');
                browser.click('#login_btn');
                browser.pause(2000);
            }

        }
        browser.pause(2000);

    });

    it('should be email false password true', function () {

        browser.click('#email');
        browser.setValue('#email', 'somethin');
        browser.click('#password');
        browser.setValue('#password', 'Demo0987654321');

        browser.click('#login_btn');
        browser.isVisible('.alert-danger');
        browser.pause(3000);
    });

    it('should be check correct all fields form', function () {

        browser.click('#email');
        browser.setValue('#email', 'sumantaroot@seamlesschex.com');
        var email = browser.getValue('#email');
        browser.click('#password');
        browser.setValue('#password', 'Demo0987654321');
        browser.click('#login_btn');

        browser.url('/#/merchants');
        browser.pause(3000);
        browser.click('#account-dropdown');

        var res = browser.getText('#header_member_since');

        var arr = res.split('\n');
        var resArr = arr[0];
        assert.equal(resArr, email, 'ERROR: Login is not equal with username=>>');
    });

});


