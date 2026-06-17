const { test, expect } = require('@playwright/test');
const testData = require('../utils/testData.json');
const { POManager } = require('../pages/POManager');
const { text } = require('node:stream/consumers');

test.describe('Orange HRM Dashboard Tests', () => {

    let dashboardPage;

    test.beforeEach(async ({ page }) => {

        const poManager = new POManager(page);

        const loginPage =  poManager.getorangeHRMLogin();

        dashboardPage =    poManager.getorangeDashboard();

        await loginPage.navigateToURL(testData.baseUrl);

        await loginPage.login(testData.username,testData.password);

        await dashboardPage.checkDashboard();
    });

    test('Orange HRM Apply Leave Message', async () => {

        await dashboardPage.clickApplyLeave();

     //   const message =
      //      await dashboardPage.getLeaveBalanceMessage();

        console.log(
            'Final message displayed on screen:',
            text
        );

        expect(text).toContain(
            'No Leave Types'
        );
    });

});