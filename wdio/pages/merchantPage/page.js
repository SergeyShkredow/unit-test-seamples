export default class Page {
    open(path = '') {
        browser.url(`https://rc-admin.seamlesspay.com/${path}`);
    }

    isVisible(el) {
        return browser.isVisible(el.selector)
    }
}
