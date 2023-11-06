import { test } from "@playwright/test";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();

test('Register', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goToPage();
    await registerPage.registerUser(email, password);
    await registerPage.validatedRegister();
});
