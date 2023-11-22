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
        await this.page.fill(locators.firstname, faker.person.firstName());
        await this.page.fill(locators.lastname, faker.person.lastName());
        await this.page.fill(locators.email, email);
        await this.page.fill(locators.telephone, faker.phone.number());
        await this.page.fill(locators.password, password);
        await this.page.fill(locators.confirmPassword, password);
        await this.page.getByText('yes').click();
        await this.page.click(locators.policyPrivacyTerms);
        await this.page.click(locators.continueBtn);
    }
    async validatedRegister() {
        await this.page.waitForURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/success');
        await expect(this.page).toHaveTitle('Your Account Has Been Created!');
    }
}
