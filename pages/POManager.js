const { orangeDashboard } = require('./orangeDashboard');
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

    getorangeDashboard() {
        return this.dashboardPage;
    }
}

module.exports = { POManager };