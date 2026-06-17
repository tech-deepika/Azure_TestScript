const { test, expect } = require('@playwright/test');
const testData = require('../utils/testData.json');
const { POManager } = require('../pages/POManager');

test.describe('Orange HRM Dashboard Tests', () => {

    let loginPage;
    let dashboardPage;

    test.beforeEach(async ({ page }) => {
        const poManager = new POManager(page);

        loginPage = poManager.getorangeHRMLogin();
        dashboardPage = poManager.getorangeDashboard();
        await loginPage.navigateToURL(testData.baseUrl);
        await loginPage.login(testData.username,testData.password);
        await dashboardPage.checkDashboard();
    });

    test('Orange HRM Apply Leave Message', async () => {
        const message = await dashboardPage.clickApplyLeave();
        console.log('Final message displayed on screen : ', message);
        expect(message).toContain('No Leave Types');
    });

});