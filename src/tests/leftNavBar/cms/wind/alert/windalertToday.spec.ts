import { test, expect } from '@playwright/test';
import { doLogin, getURL } from "../../../../../utils/utils";

test.describe("Verify the functionalities of Left Nav  for cms/solar", async () => {

    test("Check today Alert",async ({page})=>{
        await doLogin(page);

        // Find the Locator for "CMS" Tab and Click
        const cms = page.locator('.svg-menu-header').first();
        expect(cms).toBeVisible();
        await cms.click();


        // Find the Locator for "Wind " Tab and Click
        const wind = page.locator(".ant-menu-submenu-title").getByText(/wind/i);
        await expect(wind).toBeVisible();
        await wind.click();

        // Check the Navigation URL for Alert Page 
        const alerts = page.getByText(/alerts/i)
        await expect(alerts).toBeVisible();
        await alerts.click();

        // Check the Navigation URL for  "Today Alert"  Page
        const alertsToday = page.locator("a[href ='/cms/notification/wind/alerts/today']")
        await expect(alertsToday).toBeVisible();
        await alertsToday.click();

        // Find the Locator for "Check-Box" Tab and Click
        const descriptionCheckBox = page.locator("nz-table-selection[class='ant-table-selection']");
        await expect(descriptionCheckBox).toBeVisible();
        await descriptionCheckBox.click();
        await expect(descriptionCheckBox).toBeChecked();

        // Find the Locator for "ADD" Button Tab and Click
        const addButton = page.getByRole('button', { name: 'Add' })
        await expect(addButton).toBeVisible()
        await addButton.click();


        

    })

});
