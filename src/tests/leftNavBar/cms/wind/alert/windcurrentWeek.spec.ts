import { test, expect } from '@playwright/test';
import { doLogin } from "../../../../../utils/utils";



test.describe("Verify the functionalities of Left Nav  for cms/solar", async () => {

    test("Check Current Alert", async ({ page }) => {
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

        // Check the Navigation URL for  "Alert Current Week"  
        const alertsToday = page.locator("a[href='/cms/notification/wind/alerts/current-week']")
        await expect(alertsToday).toBeVisible();
        await alertsToday.click();



        // Find the Locator for "Check-Box" Tab and Click
    })
})