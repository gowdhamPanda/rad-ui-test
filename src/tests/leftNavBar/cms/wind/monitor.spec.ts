import { test, expect } from '@playwright/test';
import { doLogin, getURL } from "../../../../utils/utils";



test.describe("Verify the functionalities of Left Nav  for cms/wind", async () => {
    test("Left Nav CMS/solar", async ({ page }) => {
        await doLogin(page);

        // Click on CMS Icon
        const cms = page.locator('.svg-menu-header').first();
        expect(cms).toBeVisible();
        await cms.click();

        // Click on Wind Tab Sub-Menu
        const wind = page.getByText(/wind/i)
        await expect(wind).toBeVisible();
        await wind.click();

        // Create a function where we have to perform the testing
        await page.goto(getURL(`/cms/monitor/wind/home`));

        // Checks if the element's text content matches the expected text
        expect(page.url()).toContain("monitor");
        // Verify the Navigation Page
        await page.goBack();
        await page.goForward();


        // Find the Locator for "Select Block" Dropdown
        const selectBlockDropdown =page.locator('nz-select-top-control').filter({ hasText: 'Select Block' }).getByRole('textbox');
        await expect(selectBlockDropdown).toBeVisible();
        await selectBlockDropdown.click()


        // Select the value "Select Block" Dropdown
        const selectBlockDropdownValue = page.locator("nz-option-item.ant-select-item>div.ant-select-item-option-content")
       // await expect(selectBlockDropdownValue).toBeVisible();
        await selectBlockDropdownValue.click()

        // Find the Locator for "Select Device" Dropdown
        const selectDeviceDropdown = page.locator('nz-select[nzplaceholder="Select Device"]>nz-select-top-control.ant-select-selector')
        await expect(selectDeviceDropdown).toBeVisible();
        await selectDeviceDropdown.click()

        // Select the value "Select Device" Dropdown
        const selectDeviceDropdownValue =  page.getByText('Turbine1', { exact: true })
        await expect(selectDeviceDropdown).toHaveCount(1)
        await selectDeviceDropdown.click()


        // Check the "Data" Text and Click
        const  dataText =  page.getByRole('tab', { name: 'Data' });
        await expect(dataText).toHaveCount(1)
        //await dataText.click()


        // Check the "Information" Text and Click
        const information =  await page.getByRole('tab', { name: 'Informations' }).click();

        // Check the "Alarms" Text and Click
        const alarms = page.getByRole('tab', { name: 'Alarms' }).click();

        // Check the "Events" Text and Click
        const events = page.getByRole('tab', { name: 'Events' }).click();

        // Check the "Comments" Text and Click
        const comments = page.getByRole('tab', { name: 'Comments' }).click();

        // Find the Plant Dropdown Locator 
        const plantDropdown = page.locator('#cdk-overlay-2');
        await expect(plantDropdown).toBeVisible()
        await plantDropdown.click()


        // Find the Plant Option Value Locator 
        const plantValue =  page.getByText('Panama80MW')
        await expect(plantValue).toBeVisible()
        await plantValue.click()

        // Find the Second Plant Option Value Locator 
        const plantvalue1 =  page.getByText('Panama70MW');
        await expect(plantvalue1).toBeVisible()
        await plantvalue1.click()



        
        const parameter =  page.getByText('Parameter').click();
        const activePower =   page.getByRole('cell', { name: 'Active Power' }).click();
        const windDirection =  page.getByRole('cell', { name: 'Wind Direction' }).click();
        const windSpeed =  page.getByRole('cell', { name: 'Wind Speed' }).click();
        await page.getByRole('cell', { name: 'Parameter' }).locator('nz-table-sorters').click();
        await page.getByRole('cell', { name: 'Value' }).locator('nz-table-sorters').click();
        await page.getByRole('cell', { name: 'Unit' }).locator('nz-table-sorters').click();
        await page.getByRole('cell', { name: 'Timestamp' }).locator('nz-table-sorters').click();

        // Find the Locator for  "Select Device Number" Dropdown
        const selectDeviceNumberDropdown =  page.getByPlaceholder('Input Device Number');
        await expect(selectDeviceNumberDropdown).toBeVisible()
        await selectDeviceNumberDropdown.click()


         // Find the Locator for "Go" Button and Click on it 
        const goButton = page.getByRole('button', { name: 'GO' })
        await expect(goButton).toBeVisible()
        await goButton.click()
    });


        
                                   

        
    })

