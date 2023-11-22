import test from "@playwright/test";
import LoginPage from "../Pages/LoginPage/LoginPage";
import dotenv from "dotenv";

dotenv.config();

test.beforeEach(async ({ page }) => {
    await page.goto('/index.php?route=account/login');
});
test.describe('Login test', () => {
    const email = process.env.EMAIL
    const password = process.env.PASSWORD
    test('Login valid', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.validLogin(email, password);
    });
    test('login with invalid password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.invalidPassword(email);
    });
    test('Login with invalid email', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.invalidEmail(email);
    });
    test('login with empty fields', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.withoutEmailAndPassword();
    });
});
