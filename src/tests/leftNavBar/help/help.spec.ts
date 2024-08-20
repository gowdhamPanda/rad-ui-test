import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Nav Help Tab", async () => {
    test("Left Nav Help Tab ", async ({ page }) => {
        await doLogin(page);

        // Click on Help Tab 
        const help = page.locator('.menu-icons-devide > .svg-menu-header');
        await expect(help).toBeVisible();

        // Fill the Support Form
        await help.click();
        const frame = page.frameLocator('[data-testid="widget-frame"]');

        // Fill all Input field by ID Locator 
        // const nameField = page.locator("#name").fill("Aditya");
        // const emailField = page.locator("#email").fill("aditya.m@sgrids.io");
        // const description = page.locator("#description").fill("Hello Team");

        
        // Fill all Input field by CSS Name Attribute Locator 
        // const nameField = page.locator("input[name='name']").fill("Aditya");
        // const emailField = page.locator("input[name='name']").fill("aditya.m@sgrids.io");
        // const description = page.locator("input[name='description']").fill("Hello Team");

        // Fill all Input field by CSS Data Test Id Locator
        // const nameField = page.locator("input[data-testid='text-input']").fill("Aditya");
        // const emailField = page.locator("input[data-testid='text-input']").fill("aditya.m@sgrids.io");
        // const description = page.locator("input[data-testid='text-area-input']").fill("Hello Team");

        // Fill all Input field with help of Codgen  tool
        // const nameField = page.getByTestId('name').getByTestId('text-input').fill('Aditya');
        // const emailField =  page.getByTestId('email').getByTestId('text-input').fill('aditya.m@sgrids.io');
        // const description =page.getByTestId('text-area-input').fill('Hello Team');
        const uploadFiles = page.locator(".elements__UploadFilesHeading-sc-1ku14sw-3.hGleSM")
        await uploadFiles.click()
        await page.setInputFiles("input[type='file']", "resources\file.pdf")
        const rebotButton = page.getByLabel('I\'m not a robot').click();
        const sumbitButton = page.getByTestId('form-button').click();
        const thankYouButton = page.getByTestId('thankyou-button').click();



    });
});
