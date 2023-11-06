import test from "@playwright/test";
import LoginPage from "../Pages/LoginPage/LoginPage";
import dotenv from "dotenv";

dotenv.config()

test('Login', async ({ page }) => {
    const email = process.env.EMAIL || "email@email.com"
    const password = process.env.PASSWORD || "password"

    const loginPage = new LoginPage(page);
    await loginPage.goToPage();
    await loginPage.loginIn(email, password);
    await loginPage.loginValidated();

});