const { test } = require('@playwright/test');
const testData = require('../utils/testData.json');
const { POManager } = require('../pages/POManager');

test.describe('Orange HRM Login Tests', () => {

    let orangeLogin;

    test.beforeEach(async ({ page }) => {
        const poManager = new POManager(page);
        orangeLogin = poManager.getorangeHRMLogin();

        await orangeLogin.navigateToURL(testData.baseUrl);
    });

    test('Valid login should be successful', async () => {
        await orangeLogin.login(testData.username,testData.password);
    });

    test('Invalid login should show error message', async () => {
        await orangeLogin.invalidLogin(testData.username,testData.password1);
    });

});