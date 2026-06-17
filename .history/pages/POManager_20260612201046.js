const { orangeHRMLogin } = require('./orangeHRMLogin');

class POManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new orangeHRMLogin(page);
    }

    getorangeHRMLogin() {
        return this.loginPage;
    }
}

module.exports = { POManager };