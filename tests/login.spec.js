//console.log(require('fs').readdirSync('../pages'));

const{test,expect} = require('@playwright/test')
const { LoginPage } = require('../pages/loginpage')
const { validUser, invalidUser } = require('../utils/testdata');

console.log(LoginPage);

test.describe('Login Tests', () => {

  test('Verify user can successfully sign in with valid email and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(validUser.email, validUser.password);
    await expect(page).toHaveURL('https://test.quicklabs.in/dashboard');
  });

  test('Verify user cannot sign in with invalid email and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(invalidUser.email, invalidUser.password);
    await expect(page.locator('text=Email/Password mismatch. Try again')).toBeVisible()

  });

  test('Verify "Sign In" button is visible and clickable', async({page}) => {
  
    const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.verifyLoginButton();

  });


});


