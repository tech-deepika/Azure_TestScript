test('Orange HRM Apply Leave Message', async ({ page }) => {

    const poManager = new POManager(page);

    const loginPage = poManager.getorangeHRMLogin();
    const dashboardPage = poManager.getorangeDashboard();

    await loginPage.navigateToURL(testData.baseUrl);

    await loginPage.login(
        testData.username,
        testData.password
    );

    await dashboardPage.checkDashboard();

    const message = await dashboardPage.clickApplyLeave();

    console.log("Final message:", message);
});