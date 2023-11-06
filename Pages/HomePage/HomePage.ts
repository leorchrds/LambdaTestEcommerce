import { Page, expect } from "@playwright/test";
import { locators } from "./HomePageLocators";

export default class HomePage {
    constructor(public page: Page) { }

    async goToPage() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    }
    async goToProduct() {
        await this.page.locator(locators.productCategory).click();
        await this.page.locator(locators.navBar).nth(0).click();
    }
    async validateProductPage() {
        await expect(this.page).toHaveTitle('Components')
    }
}