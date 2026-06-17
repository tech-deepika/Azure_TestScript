const { test, expect } = require('@playwright/test');
const testData = require('../utils/testData.json');
const { POManager } = require('../pages/POManager');

test.describe('Orange HRM Dashboard Tests', () => {

    let dashboardPage;

    test.beforeEach(async ({ page }) => {

        const poManager = new POManager(page);

        const loginPage = poManager.getorangeHRMLogin();

        dashboardPage = poManager.getorangeDashboard();

        await loginPage.navigateToURL(testData.baseUrl);

        await loginPage.login(testData.username, testData.password);

        await dashboardPage.checkDashboard();
    });

test.afterAll(async () => {
     console.log("New Code from main");
});

    test('Orange HRM Apply Leave Message', async () => {

        const text = await dashboardPage.clickApplyLeave();

        console.log(
            'Apply leave Screen Message when no leaves booked:',
            text
        );

        expect(text).toContain('No Leave Types');
    });

});
