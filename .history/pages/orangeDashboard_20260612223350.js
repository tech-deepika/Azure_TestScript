const { expect } = require('@playwright/test');

class orangeDashboard {

    constructor(page) {
        this.page = page;
        this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
        this.applyLeave = page.locator('.cls-1').nth(3);
        this.noLeaveTypes = page.locator('p').filter({ hasText: 'No Leave Types with Leave Balance' });
    }

    async checkDashboard() {
        await expect(this.dashboardHeader).toBeVisible({
            timeout: 10000
        });
    }

    async applyLeave() {
          await this.applyLeave.click();
          await this.page.waitForLoadState('networkidle');
          await expect(this.noLeaveTypes).toBeVisible({
            timeout : 5000
          });
    }
}

module.exports = { orangeDashboard };