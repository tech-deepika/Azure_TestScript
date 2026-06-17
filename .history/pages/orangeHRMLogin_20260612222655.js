const { expect } = require('@playwright/test');

class orangeHRMLogin {

    constructor(page) {
        this.page = page;
        this.username = this.page.getByPlaceholder("Username");
        this.password = this.page.getByPlaceholder("Password");
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.invalidLoginMessage = this.page.getByText('Invalid credentials');
        this.passwordPopup = page.getByText('Change your password');
        this.okButton = page.getByRole('button', { name: 'OK' });
    }

    async navigateToURL(baseUrl) {
        await this.page.goto(`${baseUrl}/auth/login`);
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
         try {
            await this.passwordPopup.waitFor({
                state: 'visible',
                timeout: 3000
            });

            await this.okButton.click();

        } catch (error) {
           
        }
        await page.waitForLoadState('networkidle');
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