import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Nav for cmms", async () => {
    test("Left Nav CMS", async ({ page }) => {
        await doLogin(page);


        // Click on CMMS Tab
        const cmms = page.locator('li:nth-child(2) > .ant-menu-submenu-title > span:nth-child(2) > .svg-menu-header');
        expect(cmms).toBeVisible();
        await cmms.click();

        // Get all of the sub menu of cmms
        const dashboard = page.locator("a[href='/cmms/dashboard/index']");
        const tasks = page.locator('div').filter({ hasText: /^Tasks$/ });
        const vendor = page.locator('div').filter({ hasText: /^Vendor$/ });
        const ptw = page.locator("a[href='/cmms/ptw/dashboard']");
        const incident = page.locator('div').filter({ hasText: /^Incident$/ });
        const assets = page.locator('div').filter({ hasText: /^Asset$/ });
        const parts = page.getByText('Parts');
        const jobScheduler = page.locator("a[href='/cmms/jobscheduler/dashboard']");

        // check  assertion all of the sub menus
        await expect(dashboard).toBeVisible();
        await expect(tasks).toBeVisible();
        await expect(vendor).toBeVisible();
        await expect(ptw).toBeVisible();
        await expect(incident).toBeVisible();
        await expect(assets).toBeVisible();
        await expect(parts).toBeVisible();
        await expect(jobScheduler).toBeVisible();



    });
});

