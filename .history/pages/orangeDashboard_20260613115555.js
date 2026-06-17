const { expect } = require('@playwright/test');

class OrangeDashboard {

    constructor(page) {
        this.page = page;

        this.dashboardHeader = page.getByRole(
            'heading',
            { name: 'Dashboard' }
        );

        this.applyLeaveButton = page.getByRole(
            'button',
            { name: 'Apply Leave' }
        );

        this.leaveBalanceMessage = page
            .locator('p')
            .filter({
                hasText: 'No Leave Types with Leave Balance'
            });
    }

    async verifyDashboardLoaded() {
        await expect(
            this.dashboardHeader
        ).toBeVisible({
            timeout: 10000
        });
    }

    async clickApplyLeave() {
        await this.applyLeaveButton.click();
    }

    async getLeaveBalanceMessage() {
        await expect(
            this.leaveBalanceMessage
        ).toBeVisible({
            timeout: 5000
        });

        const message =
            await this.leaveBalanceMessage.textContent();

        return message.trim();
    }
}

module.exports = { OrangeDashboard };