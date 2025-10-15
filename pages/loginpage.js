
//Purpose of a class in POM: Encapsulate all the actions, locators, and behavior related to a specific page 
// (in this case, the login page).
const { expect } = require('@playwright/test');
const BasePage = require('./basepage');
class LoginPage extends BasePage
{
    constructor(page){
        super(page);
        this.page =page;
        this.emailField =   '#email';
        this.passwordfield ='#password';
       //this.loginButton='#login-submit';
         this.loginButton = page.locator('#login-submit')
       //const loginButton = page.locator('#login-submit'); // ✅ Locator

        this.errorMessage = "xpath=//div[@id='_rht_toaster']";
        console.log("test yml working")
    }


    async gotoLoginPage()
    {
        await this.page.goto('https://test.quicklabs.in/signin');
    }

    async login(email,password)  //    // ✅ Use BasePage helper, NOT this.page.fillInput

    {
        await this.fillInput(this.emailField,email);
        await this.fillInput(this.passwordfield,password);
        await this.clickElement(this.loginButton);
    }
    async getErrorMessage()
    {
        return await this.page.textContent(this.errorMessage);

    }

    async verifyLoginButton()
    {
        //await this.loginButton.waitFor({ state: 'attached', timeout: 5000 }); // waits for element in DOM

        await expect(this.loginButton).toBeVisible();

        await expect(this.loginButton).toBeEnabled();
    }


}
console.log('LoginPage class is loaded:', typeof LoginPage);

module.exports = {LoginPage}