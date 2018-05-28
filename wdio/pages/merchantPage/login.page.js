import Page from './page';

class LoginPage extends Page {

    get username()  { return browser.element('#username'); }
    get password()  { return browser.element('#password'); }
    get loginButton() { return browser.element('button') }
    // get errorMessage() { return browser.element('div[type=error] p') }

    open() {
        super.open('#/login');
        this.header.waitForText()
    }

    submit() {
        this.loginButton.click()
    }

    login({ email = 'test@test', password = '12345'} = {}) {
        this.open()
        this.email.setValue(email)
        this.password.setValue(password)
        this.submit()
        DashboardPage.leftMenu.waitForText()
        browser.pause(1000)
    }
}

export default new LoginPage()