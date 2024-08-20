import { test, expect } from '@playwright/test';
import { doLogin } from '../../utils/utils';


test.describe("Verify the functionalities of Header component of Home Page", async () => {
    test("Should select the option", async ({ page }) => {
        // Increase the timeout for this test case to 30 seconds
        const customTimeout = 30000;
        page.setDefaultTimeout(customTimeout);
        await doLogin(page);

        // Verify and Click on the Bell Icon on header in the Home-Page
        const bellIcon = page.locator('#mainLayout nz-badge a');
        await expect(bellIcon).toBeVisible();
        await bellIcon.click();
        await bellIcon.hover();

        // Check and Click the "View Button Tab" inside the Bell Icon
        const viewOption = page.getByRole('button', { name: 'View More' });
        await expect(viewOption).toBeVisible();
        await viewOption.click();

        // Once User Clicks on the "Add" Button in the History Alerts Page and Verify the Add Alert Pop-Up is opened or not
        const addButton = page.getByRole('button', { name: 'Add' });
        await expect(addButton).toBeVisible();
        await addButton.click();

        // Selectors for the dropdown element and its options
        const dropdownSelector = 'nz-select[nzplaceholder="Select a Plant Name"]';
        const optionSelector = 'nz-option-item';

        // Wait for the dropdown to appear
        await page.waitForSelector(dropdownSelector, { timeout: customTimeout });

        // Click the dropdown to open it
        const dropdownElement = page.locator(dropdownSelector);
        await dropdownElement.click();

        // Wait for the options to appear
        await page.waitForSelector(optionSelector, { timeout: customTimeout });

        // Get all options in the dropdown
        const allOptions = await page.locator(optionSelector).all();

        // Select a random option from the available options
        const randomIndex = Math.floor(Math.random() * allOptions.length);
        const optionToBeSelected = allOptions[randomIndex];

        // Verify that the selected option is visible before clicking
        await expect(optionToBeSelected).toBeVisible();
        const selectedText = optionToBeSelected.textContent();

        // Select the desired option
        await optionToBeSelected.click();
        await page.waitForSelector("nz-select-item", { timeout: customTimeout });
        const selectedOptionShown = page.locator("nz-select-item");
        const text = selectedOptionShown.textContent()
        await expect(selectedOptionShown).toBeVisible();
        expect(selectedText).toEqual(text);
    });
})
