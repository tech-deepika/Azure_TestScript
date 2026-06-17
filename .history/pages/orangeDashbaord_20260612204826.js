const { expect } = require('@playwright/test');

class orangeDashboard {

    constructor(page) {
        this.page = page;
        this.passwordPopup = page.getByText('Change your password');
        this.okButton = page.getByRole('button', { name: 'OK' });
        this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
    }

    async navigateToDashboard(baseUrl) {
        await this.page.goto(`${baseUrl}/dashboard/index`);

        try {
            await this.passwordPopup.waitFor({
                state: 'visible',
                timeout: 3000
            });

            await this.okButton.click();

        } catch (error) {
           
        }
    }

    async checkDashboard() {
        await expect(this.dashboardHeader).toBeVisible({
            timeout: 10000
        });
    }
}

module.exports = { orangeDashboard };