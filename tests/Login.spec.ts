
import { test, expect } from "../base/pomFixture"
import dotenv from "dotenv";

dotenv.config();

test.beforeEach(async ({ page }) => {
    await page.goto('/index.php?route=account/login');
});
test.describe('Login test', () => {
    const email = process.env.EMAIL
    const password = process.env.PASSWORD
    test('Login valid', async ({ loginPage, page }) => {
        await loginPage.validLogin(email, password);
        await expect(page).toHaveURL('index.php?route=account/account');
        await expect(page).toHaveTitle('My Account');
    });
    test('login with invalid password', async ({ loginPage }) => {
        await loginPage.invalidPassword(email);
        expect(await loginPage.getErrorMsg()).toBe(' Warning: No match for E-Mail Address and/or Password.');
    });
    test('login with invalid email and password', async ({ loginPage }) => {
        await loginPage.invalidEmailAndPassword(email);
        expect(await loginPage.getErrorMsg()).toBe(' Warning: No match for E-Mail Address and/or Password.');
    });
    test('Login with invalid email', async ({ loginPage }) => {
        await loginPage.invalidEmail(email);
        expect(await loginPage.getErrorMsg()).toBe(' Warning: No match for E-Mail Address and/or Password.');
    });
    test('login with empty fields', async ({ loginPage }) => {
        await loginPage.withoutEmailAndPassword();
        expect(await loginPage.getErrorMsg()).toBe(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
    });
});
