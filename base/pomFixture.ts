import { test as baseTest, expect as baseExpect } from '@playwright/test';
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import ConfirmationPage from "../Pages/ConfirmationPage/ConfirmationPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import SuccessPage from "../Pages/SuccessPage/SuccessPage";


export const test = baseTest.extend({
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    confirmationPage: async ({ page }, use) => {
        await use(new ConfirmationPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    successPage: async ({ page }, use) => {
        await use(new SuccessPage(page));
    },
});
export const expect = baseExpect;
