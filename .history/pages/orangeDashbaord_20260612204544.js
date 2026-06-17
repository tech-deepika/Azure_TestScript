const { expect } = require('@playwright/test');

class orangeDashbaord {

    constructor(page) {
             this.page = page;
             this.passwordPopup = page.getByText('Change your password');
             this.dashboardHeader = page.locator('h6').filter({ hasText: 'Dashboard' });

    }


    async navigateToDashabord(baseUrl) {
        await this.page.goto(`${baseUrl}/dashboard/index`);
        if (await this.passwordPopup.isVisible()) {
         await this.page.getByRole('button', { name: 'OK' }).click();
}
    }

   async checkDashboard() {
    await expect(this.dashboardHeader).toBeVisible({
        timeout : 10000
    });
   }


}