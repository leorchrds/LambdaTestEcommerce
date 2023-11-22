import { Page, expect } from "@playwright/test";

export default class SuccessPage {
    constructor(public page: Page) { }
    
    async validateSuccessPage() {
        await this.page.waitForLoadState('domcontentloaded');
        expect(this.page).toHaveTitle('Your order has been placed!');
    }
}