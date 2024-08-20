import { test, expect } from '@playwright/test';
import { doLogin } from '../../utils/utils';


test.describe("Verify the functionalities of Bell Icon in the header of Home Page", async () => {
    test("Should Navigate to Home page ", async ({ page }) => {
        await doLogin(page);

        //Verify and Click on the Bell Icon on header in the Home-Page 
        const bellIcon = page.locator('#mainLayout nz-badge a');
        await expect(bellIcon).toBeVisible();
        await bellIcon.click();
        await bellIcon.hover();

        //Verify and Check "All Plants" inside the "Bell Icon Pop-Up" on header in the Home-Page
        // const bhainsadaSolarPlant = page.getByRole('link', { name: 'Clean Solar Power (Bhainsada) Private Limited 250MW' })
        // const esSunPower20mmw = page.getByRole('link', { name: 'ES Sun Power 20MW' })
        // const esEnergyPower10mw = page.getByRole('link', { name: 'ES Energy Power 10MW' })
        // const esSolarPower10MW = page.getByText('ES Solar Power 10MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9')
        // const dresEngergy07 = page.getByRole('link', { name: 'Dres Energy Pvt Ltd. 07MW' })
        // const dresEngergy08 = page.getByRole('link', { name: 'Dres Energy Pvt Ltd. 08MW' })
        // const Panama10MW = page.getByRole('link', { name: 'Panama10MW' });

        // Assert the all Plants 
        // await expect(bhainsadaSolarPlant).toBeVisible();
        // await expect(esSunPower20mmw).toBeVisible();
        // await expect(esEnergyPower10mw).toBeVisible();
        // await expect(esSolarPower10MW).toBeVisible();
        // await expect(dresEngergy07).toBeVisible();
        // await expect(dresEngergy08).toBeVisible();
        // await expect(Panama10MW).toBeVisible();

        // Clicks Action on the all Plants
        // await bhainsadaSolarPlant.hover();
        // await esSunPower20mmw.hover();
        // await esEnergyPower10mw.hover();
        // await esSolarPower10MW.hover();
        // await dresEngergy07.hover();
        // await dresEngergy08.hover();
        // await Panama10MW.hover();

        // Check and Verify the "Active Alert" for All Plants 
        // const activeAlertsforbhainsadaPlant = page.locator('nz-list-item').filter({ hasText: 'Clean Solar Power (Bhainsada) Private Limited 250MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 ' }).getByRole('link').nth(1);
        // const activeAlertsforesSunPower20mmw = page.locator('nz-list-item').filter({ hasText: 'ES Sun Power 20MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(1)
        // const activeAlertsforesEnergyPower10mw = page.locator('nz-list-item').filter({ hasText: 'ES Energy Power 10MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(1)
        // const activeAlertsforesSolarPower10MW = page.locator('nz-list-item').filter({ hasText: 'ES Solar Power 10MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(1)
        // const activeAlertsfordresEngergy07 = page.locator('nz-list-item').filter({ hasText: 'Dres Energy Pvt Ltd. 07MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(1)
        // const activeAlertsfordresEngergy08 = page.locator('nz-list-item').filter({ hasText: 'Dres Energy Pvt Ltd. 08MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(1)
        // const activeAlertsforPanama10MW = page.locator('nz-list-item').filter({ hasText: 'Panama10MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(1)

        // Assert the "Active Alert" for All Plants 
        // await expect(activeAlertsforbhainsadaPlant).toBeVisible();
        // await expect(activeAlertsforesSunPower20mmw).toBeVisible();
        // await expect(activeAlertsforesEnergyPower10mw).toBeVisible();
        // await expect(activeAlertsforesSolarPower10MW).toBeVisible();
        // await expect(activeAlertsfordresEngergy07).toBeVisible();
        // await expect(activeAlertsfordresEngergy08).toBeVisible();
        // await expect(activeAlertsforPanama10MW).toBeVisible();

        // Clicks Action on "Active Alert" for All Plants 
        // await activeAlertsforbhainsadaPlant.hover();
        // await activeAlertsforesSunPower20mmw.hover();
        // await activeAlertsforesEnergyPower10mw.hover();
        // await activeAlertsforesSolarPower10MW.hover();
        // await activeAlertsfordresEngergy07.hover();
        // await activeAlertsfordresEngergy08.hover();
        // await activeAlertsforPanama10MW.hover();

        // Check and Verify the "Acknowledge Alert"
        // const acknowledgeAlertforBhainsada = page.locator('nz-list-item').filter({ hasText: 'Clean Solar Power (Bhainsada) Private Limited 250MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 ' }).getByRole('link').nth(2);
        // const acknowledgeAlertforesSunPower20mmw = page.locator('nz-list-item').filter({ hasText: 'ES Sun Power 20MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(2);
        // const acknowledgeAlertforEnergyPower10mw = page.locator('nz-list-item').filter({ hasText: 'ES Energy Power 10MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(2);
        // const acknowledgeAlertforesSolarPower10MW = page.locator('nz-list-item').filter({ hasText: 'ES Solar Power 10MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(2);
        // const acknowledgeAlertfordresEngergy07 = page.locator('nz-list-item').filter({ hasText: 'Dres Energy Pvt Ltd. 07MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(2);
        // const acknowledgeAlertforfordresEngergy08 = page.locator('nz-list-item').filter({ hasText: 'Dres Energy Pvt Ltd. 08MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(2);
        // const acknowledgeAlertforPanama10MW = page.locator('nz-list-item').filter({ hasText: 'Panama10MW 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9' }).getByRole('link').nth(2);

        // Assert the Verify the "Acknowledge Alert"
        // await expect(acknowledgeAlertforBhainsada).toBeVisible();
        // await expect(acknowledgeAlertforesSunPower20mmw).toBeVisible();
        // await expect(acknowledgeAlertforEnergyPower10mw).toBeVisible();
        // await expect(acknowledgeAlertforesSolarPower10MW).toBeVisible();
        // await expect(acknowledgeAlertfordresEngergy07).toBeVisible();
        // await expect(acknowledgeAlertforfordresEngergy08).toBeVisible();
        // await expect(acknowledgeAlertforPanama10MW).toBeVisible();

        // Clicks Action on "Acknowledge Alert" for All Plants
        // await acknowledgeAlertforBhainsada.hover();
        // await acknowledgeAlertforesSunPower20mmw.hover();
        // await acknowledgeAlertforEnergyPower10mw.hover();
        // await acknowledgeAlertforesSolarPower10MW.hover();
        // await acknowledgeAlertfordresEngergy07.hover();
        // await acknowledgeAlertforfordresEngergy08.hover();
        // await acknowledgeAlertforPanama10MW.hover();

        // Check and Click the "View Button Tab" inside the Bell Icon 
        const viewOption = page.getByRole('button', { name: 'View More' });
        await expect(viewOption).toBeVisible();
        await viewOption.click();

        // Checks if the element's text content matches the expected text
        //expect(page.url()).toContain("history");

        // Once User Clicks on the "Add" Button in the History Alerts Page and Verify the Add Alert Pop-Up is opened or not
        const addButton = page.getByRole('button', { name: 'Add' })
        await expect(addButton).toBeVisible();
        await addButton.click();

        // User tries to start filling all details inside the Add Alert Pop-Up
        // Clicks on the  Plant DropDown
        // const plantDropDown = page.locator('nz-select[formcontrolname="plantid"]>nz-select-top-control.ant-select-selector >nz-select-search.ant-select-selection-search>input.ant-select-selection-search-input');
        // await expect(plantDropDown).toBeVisible();
        // await plantDropDown.click();

        //Select the value from  Plant DropDown
        // const plantSelectDropDown = page.locator('nz-select-top-control').filter({ hasText: 'Select a Plantname' }).getByRole('textbox')
        // await expect(plantSelectDropDown).toBeVisible();
        // await plantSelectDropDown.click();

        // Choose the Values from Plant Select DropDown
        // const PlantValueOption1 = page.getByText('Clean Solar Power (Bhainsada) Private Limited 250MW')
        // await expect(PlantValueOption1).toBeVisible();
        // await PlantValueOption1.click();

        

        // await page.getByText('ES Solar Power 10MW').click();
        // await page.getByText('Dres Energy Pvt Ltd. 07MW').click();
        // await page.getByText('Dres Energy Pvt Ltd. 08MW').click();
        // await page.getByText('Panama10MW').click();
        // await page.getByText('Panama80MW').click();
        // await page.getByLabel('Close').click();



        // Selectors for the dropdown element and its options
        const dropdownSelector = 'nz-select[formcontrolname="plantid"]>nz-select-top-control.ant-select-selector >nz-select-search.ant-select-selection-search>input.ant-select-selection-search-input'
        const optionSelector = 'nz-option-item'

        // Loop through each value you want to select
        await page.click(dropdownSelector);
        const valuesToSelect = page.locator(optionSelector)[0].textContent();
        // Wait for the dropdown options to appear
        await page.waitForSelector(optionSelector);

        // Select the desired option
        await page.selectOption(dropdownSelector, valuesToSelect);

       

        // for (const value of valuesToSelect) {
        //     // Click on the dropdown to open it
        //     await page.click(dropdownSelector);

        //     // Wait for the dropdown options to appear
        //     await page.waitForSelector(optionSelector);

        //     // Select the desired option
        //     await page.selectOption(dropdownSelector, value);

        //     // You may want to add a delay to allow the UI to update
        //     // You can use page.waitForTimeout(milliseconds) for this purpose
        //     // For example: await page.waitForTimeout(1000);

        //     // Continue with the next value
        // }

        // First Select the "Plant Name" Dropdown Locator 
        // const selectPlantDropdown = page.locator('nz-select-top-control').filter({ hasText: 'Select a Plantname' }).getByRole('textbox');
        // await expect(selectPlantDropdown).toBeVisible();
        // await selectPlantDropdown.click()

        // // Select the Plant Value form Plant DropDown
        // const plantValueOption = page.getByText('Clean Solar Power (Bhainsada) Private Limited 250MW');
        // await expect(plantValueOption).toBeVisible();
        // await plantValueOption.click()

        // // First Select the "Block Name"  Dropdown Locator 
        // const selectBlockDropdown = page.locator('nz-select-top-control').filter({ hasText: 'Select a Blockname' }).getByRole('textbox');
        // await expect(selectBlockDropdown).toBeVisible();
        // await selectBlockDropdown.click()

        // // Select the "Block Name " Value form Block DropDown
        // const blockValueOption = page.getByText('CSBPL250MW IS1', { exact: true });
        // await expect(blockValueOption).toBeVisible();
        // await blockValueOption.click()

        // // First Select the "Device" Dropdown Locator 
        // const selectDeviceDropdown = page.locator('nz-select-top-control').filter({ hasText: 'Select a Device Name' }).getByRole('textbox');
        // await expect(selectDeviceDropdown).toBeVisible();
        // await selectDeviceDropdown.click()

        // // Select the "Device" Value form Device DropDown
        // const deviceValueOption = page.getByText('CSBPL250MW IS1 Inverter1 Unit1');
        // await expect(selectDeviceDropdown).toBeVisible();
        // await selectDeviceDropdown.click()

        // // First Select the "Parameter" Dropdown Locator
        // const parameterDropdown = page.locator('nz-select-top-control').filter({ hasText: 'Select a parameters' }).getByRole('textbox');
        // await expect(parameterDropdown).toBeVisible();
        // await parameterDropdown.click()

        // // Select the "Notification" Value form Notification DropDown
        // const notificationDropdopwn = page.locator('nz-select-top-control').filter({ hasText: 'Select a notification Name' }).getByRole('textbox');
        // await expect(notificationDropdopwn).toBeVisible();
        // await notificationDropdopwn.click()

        // const notificationValueOption =  page.getByTitle('CT Unbalance').getByText('CT Unbalance');
        // await expect(notificationDropdopwn).toBeVisible();
        // await notificationDropdopwn.click()

        // // Click the "Calender" and find the locator 
        // const calender =  page.locator('nz-form-item').filter({ hasText: 'Start Date and Time' }).locator('div').nth(2);
        // await expect(calender).toBeVisible();
        // await calender.click()

        // // Choose the "Starting Date" from Calender 
        // const startingDate =  page.getByTitle('11/19/2023').getByText('19')
        // await expect(startingDate).toBeVisible();
        // await startingDate.click();

        // // Choose the "Ending Date" from Calender 
        // const endingDate =  page.locator('nz-form-item').filter({ hasText: 'End Date and Time' }).locator('div').nth(2);
        // await expect(endingDate).toBeVisible();
        // await endingDate.click();
        // const selectDate =  page.getByTitle('11/19/2023').getByText('19')


        // // Click "Save" Button 
        // const saveButton = await page.getByRole('button', { name: 'Save' });
        // await expect(saveButton).toBeVisible();
        // await saveButton.click()
        
        // // Click on the "Save" Button
        // await page.locator('#cdk-overlay-12 svg').first().click();
        



       










    })
});













