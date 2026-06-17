const { test, expect } = require('@playwright/test');
const testData = require('../utils/testData.json');
const { POManager } = require('../pages/POManager');

test('Orange HRM Apply Leave Message', async ({ page }) => {

    // Create POManager Object
    const poManager = new POManager(page);

    // Get Page Objects
    const loginPage = poManager.getorangeHRMLogin();
    const dashboardPage = poManager.getorangeDashboard();

    // Navigate to Login Page
    await loginPage.navigateToURL(
        testData.baseUrl
    );

    // Login
    await loginPage.login(
        testData.username,
        testData.password
    );

    // Verify Dashboard
    await dashboardPage.checkDashboard();

    // Click Apply Leave and fetch message
    const message =
        await dashboardPage.clickApplyLeave();

    // Print message on terminal
    console.log(
        "Final message displayed on screen : ",
        message
    );

    // Optional Assertion
    await expect(message).toContain(
        'No Leave Types'
    );

});