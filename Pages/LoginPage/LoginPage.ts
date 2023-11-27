import { Page } from "@playwright/test";
import { locators } from "./LoginPageLocators";
import { faker } from "@faker-js/faker";

export default class LoginPage {
    constructor(public page: Page) { }

    async getErrorMsg() {
        const alert = this.page.locator(locators.alert);
        return await alert.innerText();
    }
    async validLogin(email: string, password: string) {
        await this.page.fill(locators.email, email);
        await this.page.fill(locators.password, password);
        await this.page.click(locators.submitLogin);
    }
    async invalidPassword(email: string) {
        await this.page.fill(locators.email, email);
        await this.page.fill(locators.password, faker.internet.password());
        await this.page.click(locators.submitLogin);
    }
    async invalidEmail(password: string) {
        await this.page.fill(locators.email, faker.internet.email());
        await this.page.fill(locators.password, password);
        await this.page.click(locators.submitLogin);
    }
    async invalidEmailAndPassword() {
        await this.page.fill(locators.email, faker.internet.email());
        await this.page.fill(locators.password, faker.internet.password());
        await this.page.click(locators.submitLogin);
    }
    async withoutEmailAndPassword() {
        await this.page.click(locators.submitLogin);
    }
}