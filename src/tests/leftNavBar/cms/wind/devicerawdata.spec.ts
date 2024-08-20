import { test, expect } from '@playwright/test';
import { doLogin, getURL } from "../../../../utils/utils";


test.describe("Verify the functionalities of Left Nav Content component of Home Page", async () => {

    test('Left Nav Content component of Home Page', async ({ page }) => {
        // Check if CMS menu is available
        await doLogin(page);

        // Check and Find the "CMS" Tab Locator
        const cms = page.locator('.svg-menu-header').first();
        expect(cms).toBeVisible();
        await cms.click();

        // Check and Find the "Wind" Tab Locator
        const wind = page.locator(".ant-menu-submenu-title").getByText(/wind/i);
        await expect(wind).toBeVisible();
        await wind.click();

        // Check and Find the "Device Raw Data"
        const deviceRawData = page.locator('a[href="/cms/wind/rawdata"]')
        await expect(deviceRawData).toBeVisible();
        await deviceRawData.click();

        // Once the Device Raw Data Pop-Up Open then Find the locator for "Select Date" 
        const  selectDate =  page.getByPlaceholder('Select date')
        await expect(selectDate).toBeVisible()
        await selectDate.click();
    
        // Find the locator for Date 
        const dateLocator =  page.getByRole('grid').getByTitle('12/1/2023').getByText('1')
        await expect(dateLocator).toBeVisible()
        await dateLocator.click();

        // Check and Find the Plant Locator 
        const selectPlant = page.locator('nz-select-top-control').filter({ hasText: 'Select Plant' }).getByRole('textbox')
        expect(selectPlant).toBeVisible();
        await selectPlant.click();

        // Check and Find the Plant Value and Choose
        const selectPlantValue =  page.getByText('Panama80MW');
        expect(selectPlantValue).toBeVisible();
        await selectPlantValue.click()
        
        

        //Check and Find the Select Locator
        const selectBlock = page.locator('nz-select-top-control').filter({ hasText: 'Select Block' })
        expect(selectBlock).toBeVisible();
        await selectBlock.click();

        // Check and Find the Block  Value and Choose
        const selectBlockValue =  page.getByText('Block1')
        await expect(selectBlockValue).toBeVisible()
        await selectBlockValue.click();

        //Check and Find the Device Locator
        const selectDevice = page.locator('nz-select-top-control').filter({ hasText: 'Select Device Type' }).getByRole('textbox')
        expect(selectDevice).toBeVisible();
        await selectDevice.click();

        // Check and Find the Block  Value and Choose
        const selectDeviceValue =  page.getByText('PLC');
        expect(selectDeviceValue).toBeVisible();
        await selectDeviceValue.click();
        
        //Check and Find the Block  Value and Choose
        const selectParameter =  page.locator('nz-select-top-control').filter({ hasText: 'Select Parameters' });
        expect(selectParameter).toBeVisible();
        await selectParameter.click();

        // Check and Find the Block  Value and Choose
        const selectParameterValue =  page.getByText('PLC Power')
        expect(selectParameterValue).toBeVisible();
        await selectParameterValue.click();

        // Find the Locator for Export Button after filling all details 
        const exportButton =  page.getByRole('button', { name: 'Export' });
        expect(exportButton).toBeVisible();
        await exportButton.click();

       





        






    })
})