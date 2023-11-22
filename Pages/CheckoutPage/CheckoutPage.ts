import { Page, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { locators } from "../CheckoutPage/checkoutPageLocators";
export default class CheckoutPage {
    constructor(public page: Page) { }
    
    async fillingInFields() {
        await this.page.locator(locators.firstName).fill(faker.person.firstName());
        await this.page.locator(locators.lastName).fill(faker.person.lastName());
        await this.page.locator(locators.email).fill(faker.internet.email());
        await this.page.locator(locators.telephone).fill(faker.phone.number());
        await this.page.locator(locators.password).fill('test123');
        await this.page.locator(locators.confirmPassword).fill('test123');
        await this.page.locator(locators.company).fill(faker.company.name());
        await this.page.locator(locators.address1).fill(faker.location.streetAddress());
        await this.page.locator(locators.address2).fill(faker.location.secondaryAddress());
        await this.page.locator(locators.city).fill(faker.location.city());
        await this.page.locator(locators.postCode).fill(faker.location.zipCode());
        await this.page.locator(locators.country).selectOption('United States');
        await this.page.locator(locators.state).selectOption('New York');
        await this.page.getByText('I have read and agree to the Privacy Policy').check();
        await this.page.getByText('I have read and agree to the Terms & Conditions').check();
    }
    async continueButton() {
        await this.page.getByText('Continue').click();
    }
    async validateOrder() {
        expect(this.page).toHaveURL('index.php?route=extension/maza/checkout/confirm');
    }
}