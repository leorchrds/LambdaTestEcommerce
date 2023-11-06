import { Page, expect } from "@playwright/test";
import { locators } from "./ConfirmationPageLocators";

export default class ConfirmationPage {
    constructor(public page: Page) { }
    
    async validateConfirmationPage() {
        await this.page.waitForLoadState('domcontentloaded');
        expect(this.page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/checkout/confirm');
        expect(this.page).toHaveTitle('Confirm Order');
    }
    async confirmOrderBttn() {
        await this.page.locator(locators.confirmOrderBttn).last().click();
    }
}