import { test, expect } from '@playwright/test';
import { doLogin } from '../../utils/utils';
import constant from '../../utils/constant';

test.describe("Verify the functionalities of Main Content component of Home Page", async () => {
    test("Should Navigate to Home page ", async ({ page }) => {
        await doLogin(page);

        // Verify the Drop-Down of Select Country
        //await page.waitForLoadState("networkidle");
        // let countryText = "India"
        // const countryDropdown = page.locator('nz-select-top-control').filter({ hasText: 'Select Country' });
        // await page.waitForTimeout(5000);
        //  countryDropdown.getByText('India')
        // //expect countryText.toContain('India');
        // await expect(countryDropdown).toBeEnabled();
        // await expect(countryDropdown).toBeVisible();
        // await expect(countryDropdown).toBeEditable();

        // Verify the Drop-Down of Select Region 
        // await page.waitForLoadState("networkidle");
        // const regionDropdown = page.locator("#screencontainer > div > app-dashboard-index > div:nth-child(2) > div > app-plant-filter > nz-card > div > form > div > div:nth-child(2) > nz-form-item > nz-form-control");
        // regionDropdown.getByText("Northern India");
        // await expect(regionDropdown).toBeEnabled();
        // await expect(regionDropdown).toBeVisible();
    

        // Verify the Select State Dropdown

        // const stateValue1 = 'Rajasthan';
        // const stateValue2 = 'Karnataka';
        // const stateValue3 = 'Telangana';
        // const stateValue4 = 'Maharashtra';
        // await page.waitForLoadState("domcontentloaded");
        // await page.waitForTimeout(5000);
        // await page.locator('nz-select-top-control').filter({ hasText: 'Select State' }).click();
        // await page.getByText('stateValue1').click();
        // await page.getByText('stateValue2').click();
        // await page.getByText('stateValue3').click();
        // await page.getByText('stateValue4').click();
        // await page.pause();
        // const StateSelector = "ant-select-selector ng-tns-c146-344771"
        // const stateText = await page.locator(StateSelector).textContent()
        // expect(stateText).toContain(`${stateValue1}${stateValue2}${stateValue3}${stateValue4}`);

        // const state1 = `Karnataka`;
        // const state2 = `Maharashtra`;
        // await page.locator('nz-select-top-control').filter({ hasText: 'Select State' }).click();
        // await page.getByText(state1).click();
        // await page.getByText(state2).click();
        // await page.locator('app-site-index > nz-card > div:nth-child(2) > div > div').first().click();
        // const stateSelectBoxSelector = '#screencontainer > div > app-dashboard-index > div:nth-child(2) > div > app-plant-filter > nz-card > div > form > div > div:nth-child(3) > nz-form-item > nz-form-control > div > div > nz-select > nz-select-top-control';
        // const stateText = await page.locator(stateSelectBoxSelector).textContent()
        // expect(stateText).toContain(`${state1}${state2}`);
       

       

        // Verify the Select Plant Dropdown

    //     const option1 = `Dres Energy Pvt Ltd. 08MW`;
    //     const option2 = `ES Solar Power 10MW`;
    //     const option3 = 'ES Energy Power 10MW'
    //     const option4 = 'ES Solar Power 10MW'
    //     const option5 = 'Dres Energy Pvt Ltd. 07MW'
    //     const option6 = 'Dres Energy Pvt Ltd. 08MW'
    //     const option7 = 'Panama10MW'

    //     await page.locator('nz-select-top-control').filter({ hasText: 'Select Plant' }).click();
    //     await page.getByText(option1).click();
    //     await page.getByText(option2).click();
    //     const selector = `#screencontainer > div > app-dashboard-index > div:nth-child(2) > div > app-plant-filter > nz-card > div > form > div > div:nth-child(4) > nz-form-item > nz-form-control > div > div > nz-select > nz-select-top-control`;
    //     const plantText = await page.locator(selector).textContent()
    //     expect(plantText).toContain(`${option1}${option2}`);
           // await page.close();

        // For Country Drop-Down 
        // Find the Locator of the Country Drop-Down
        const countryDropdownLocator  = page.locator('nz-select-top-control').filter({ hasText: 'Select Country' })
        await expect(countryDropdownLocator).toBeVisible()
        await countryDropdownLocator.click()

       //Find the Locator of the Value listed in the Country DropDown
        const valueLocator = page.getByText('India', { exact: true })
        await expect(valueLocator).toBeVisible()
        await valueLocator.click()
    

        //For the Region DropDown
        // Find the Locator of the Country Drop-Down
        const regionDropdownLocator = page.locator('nz-select-top-control').filter({ hasText: 'Select Region' })
        await expect(regionDropdownLocator).toBeVisible()
        await regionDropdownLocator.click()

        //Find the Locator of the Value listed in the Region DropDown
        const optionValueOfRegionDropdown = page.getByTitle('Northern India').getByText('Northern India')
        await expect(optionValueOfRegionDropdown).toBeVisible()
        await optionValueOfRegionDropdown.click()

        // Loop through each value you want to select
        const valuesToSelect = ['Northern India', 'Southern India', 'Central India'];
        for (const value of valuesToSelect) {
            // Click on the dropdown to open it
            //await page.click(dropdownSelector);

            // Wait for the dropdown options to appear
            //await page.waitForSelector(optionSelector);

            // Select the desired option
            //await page.selectOption(dropdownSelector, value);

            // You may want to add a delay to allow the UI to update
            // You can use page.waitForTimeout(milliseconds) for this purpose
            // For example: await page.waitForTimeout(1000);

            // Continue with the next value
        }

        // Close the browser
        await page.close();

        
    });
});



