import { Page, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { locators } from "./RegisterPageLocators";

export default class RegisterPage {
    constructor(public page: Page) { }

    async goToPage() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async registerUser(email: string, password: string) {
        await this.page.locator(locators.firstname).fill(faker.person.firstName());
        await this.page.locator(locators.lastname).fill(faker.person.lastName());
        await this.page.locator(locators.email).fill(email);
        await this.page.locator(locators.telephone).fill(faker.phone.number());
        await this.page.locator(locators.password).fill(password);
        await this.page.locator(locators.confirmPassword).fill(password);
        await this.page.getByText('yes').click();
        await this.page.locator(locators.policyPrivacyTerms).click();
        await this.page.locator(locators.continueBtn).click();
    }

    async validatedRegister() {
        await this.page.waitForURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/success');
        await expect(this.page).toHaveTitle('Your Account Has Been Created!');

    }

}
