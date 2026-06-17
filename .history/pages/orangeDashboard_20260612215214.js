const { expect } = require('@playwright/test');

class orangeDashboard {

    constructor(page) {
        this.page = page;
        this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
    }

    async checkDashboard() {
        await expect(this.dashboardHeader).toBeVisible({
            timeout: 10000
        });
    }
}

module.exports = { orangeDashboard };