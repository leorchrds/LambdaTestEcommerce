import { Page, expect } from "@playwright/test";
import { locators } from "./HomePageLocators";

export default class HomePage {
    constructor(public page: Page) { }

    async goToPage() {
        await this.page.goto('/');
    }
    async goToProduct() {
        await this.page.click(locators.productCategory);
        await this.page.click(locators.navBar);
    }
    async validateProductPage() {
        await expect(this.page).toHaveTitle('Components')
    }
}