const { expect } = require('@playwright/test');

class orangeDashboard {

    constructor(page) {
        this.page = page;

        this.dashboardHeader = page.locator('.oxd-topbar-header-breadcrumb-module');

        this.applyLeaveButton = page.getByRole('button', { name: 'Apply Leave' });

        this.noLeaveTypes = page
            .locator('p')
            .filter({ hasText: 'No Leave Types with Leave Balance' });
    }

    async checkDashboard() {
        await expect(this.dashboardHeader).toBeVisible({
            timeout: 10000
        });
    }

    async clickApplyLeave() {
        await this.applyLeaveButton.click();

        await expect(this.noLeaveTypes).toBeVisible({
            timeout: 5000
        });

        const text = await this.noLeaveTypes.innerText();

        return text;
    }
}

module.exports = { orangeDashboard };