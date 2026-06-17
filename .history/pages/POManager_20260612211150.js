const { orangeDashboard } = require('./orangeDashbaord');
const { orangeHRMLogin } = require('./orangeHRMLogin');

class POManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new orangeHRMLogin(page);
        this.dashboardPage = new orangeDashboard(page);
    }

    getorangeHRMLogin() {
        return this.loginPage;
    }

    getorangeDashbaord() {
        return this.dashboardPage;
    }
}

module.exports = { POManager };