const { expect } = require('@playwright/test');

class orangeHRMLogin {

    constructor(page) {
        this.page = page;
        this.username = this.page.getByPlaceholder("Username");
        this.password = this.page.getByPlaceholder("Password");
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.invalidLoginMessage = this.page.getByText('Invalid credentials');
    }

    async navigateToURL(baseUrl) {
        await this.page.goto(baseUrl);
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async invalidLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

        await expect(this.invalidLoginMessage).toBeVisible();

        const message = await this.invalidLoginMessage.textContent();
        console.log(message);
    }
}

module.exports = { orangeHRMLogin };