import { faker } from "@faker-js/faker";
import {test} from "../base/pomFixture";

const email = faker.internet.email();
const password = faker.internet.password();

test('Register', async ({ registerPage }) => {
    await registerPage.goToPage();
    await registerPage.registerUser(email, password);
    await registerPage.validatedRegister();
});
