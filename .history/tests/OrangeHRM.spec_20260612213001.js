const { test } = require('@playwright/test');
const testData = require('../utils/testData.json');
const { POManager } = require('../pages/POManager');

test('Orange Login test functionality', async ({ page }) => {

    const poManager = new POManager(page);
    const orangeLogin = poManager.getorangeHRMLogin();

    await orangeLogin.navigateToURL(testData.baseUrl);
    await orangeLogin.login(testData.username,testData.password);
});

test('Orange HRM Invalid Login Functionality', async ({ page }) => {

    const poManager = new POManager(page);
    const orangeLogin = poManager.getorangeHRMLogin();

    await orangeLogin.navigateToURL(testData.baseUrl);

    await orangeLogin.invalidLogin(testData.username,testData.password1);
});