import { Page, expect } from "@playwright/test";
import { locators } from "./LoginPageLocators";
import { faker } from "@faker-js/faker";

export default class LoginPage {
    constructor(public page: Page) { }

    async validLogin(email: string, password: string) {
        await this.page.fill(locators.email, email);
        await this.page.fill(locators.password, password);
        await this.page.click(locators.submitLogin);
        expect(this.page).toHaveTitle('My Account');
    }
    async invalidPassword(email: string) {
        await this.page.fill(locators.email, email);
        await this.page.fill(locators.password, faker.internet.password());
        await this.page.click(locators.submitLogin);
        const alert = await this.page.locator(locators.alert).innerText();
        expect(alert).toEqual(' Warning: No match for E-Mail Address and/or Password.');
    }
    async invalidEmail(password: string) {
        await this.page.fill(locators.email, faker.internet.email());
        await this.page.fill(locators.password, password);
        await this.page.click(locators.submitLogin);
        const alert = await this.page.locator(locators.alert).innerText();
        expect(alert).toEqual(' Warning: No match for E-Mail Address and/or Password.')
    }
    async invalidEmailAndPassword() {
        await this.page.fill(locators.email, faker.internet.email());
        await this.page.fill(locators.password, faker.internet.password());
        await this.page.click(locators.submitLogin);
        const alert = await this.page.locator(locators.alert).innerText();
        expect(alert).toEqual(' Warning: No match for E-Mail Address and/or Password.')
    }
    async withoutEmailAndPassword() {
        await this.page.click(locators.submitLogin);
        const alert = await this.page.locator(locators.alert).innerText();
        expect(alert).toEqual(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.')
    }
}