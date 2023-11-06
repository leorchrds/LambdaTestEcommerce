import { Page, expect } from "@playwright/test";
import { locators } from "./ProductPageLocators";

export default class ProductPage {
    constructor(public page: Page) { }


    async placeOrder() {
        await this.page.locator(locators.productLayout).nth(0).click();
        const productData = (await this.page.waitForSelector(locators.productData)).isVisible();
        expect(productData).toBeTruthy();
    }
    async buyNowButton(){
        await this.page.locator(locators.BuyNowBttn).click();
    }
}