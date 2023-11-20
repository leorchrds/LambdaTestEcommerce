import test from "@playwright/test";
import HomePage from "../Pages/HomePage/HomePage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import SuccessPage from "../Pages/SuccessPage/SuccessPage.ts";
import ConfirmationPage from "../Pages/ConfirmationPage/ConfirmationPage.ts";

test('place order and purchase', async ({ page, browser }) => {

    const context = await browser.newContext({
        storageState: "./auth.json"
    })

    const homePage = new HomePage(page);
    await homePage.goToPage();
    await homePage.goToProduct();
    await homePage.validateProductPage();

    const productPage = new ProductPage(page);
    await productPage.placeOrder();
    await productPage.buyNowButton();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillingInFields();
    await checkoutPage.continueButton();

    const confirmationPage = new ConfirmationPage(page);
    confirmationPage.validateConfirmationPage
    confirmationPage.confirmOrderBttn
    
    const successPage = new SuccessPage(page);
    await successPage.validateSuccessPage();
});