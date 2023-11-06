import { Page, expect } from "@playwright/test";
import { locators } from "./LoginPageLocators";

export default class LoginPage {

    constructor(public page: Page) { }
    async goToPage() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    }
    async loginIn(email: string, password: string) {
        await this.page.locator(locators.email).fill(email);
        await this.page.locator(locators.password).fill(password);
        await this.page.locator(locators.submitLogin).click();
    }
    async loginValidated() {
        expect(this.page).toHaveTitle('My Account');
    }
}