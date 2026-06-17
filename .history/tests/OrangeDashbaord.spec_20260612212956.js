const { test } = require('@playwright/test');
const testData = require('../utils/testData.json');
const { POManager } = require('../pages/POManager');

test('Orange HRM Dashboard Verification', async ({ page }) => {

    // Create POManager object
    const poManager = new POManager(page);

    // Get Page Objects
    const loginPage = poManager.getorangeHRMLogin();
    const dashboardPage = poManager.getorangeDashboard();

    // Navigate to Login Page
    await loginPage.navigateToURL(testData.baseUrl);

    // Login
    await loginPage.login(
        testData.username,
        testData.password
    );

    // Verify Dashboard
    await dashboardPage.checkDashboard();

});