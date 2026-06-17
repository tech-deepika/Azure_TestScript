const { test } = require('@playwright/test');
const testData = require('../utils/testData.json');
const { POManager } = require('../pages/POManager');

test('Orange HRM Dashboard Verification', async ({ page }) => {

    const poManager = new POManager(page);

    const loginPage = poManager.getorangeHRMLogin();
    const dashboardPage = poManager.getorangeDashboard();

    await loginPage.navigateToURL(testData.baseUrl);

    await loginPage.login(
        testData.username,
        testData.password
    );

    await dashboardPage.checkDashboard();
});