import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Nav Report Tab", async () => {
    test("Left Nav Report Tab", async ({ page }) => {
        await doLogin(page);

        // Click on the Report Tab 
        const report = page.locator('li:nth-child(5) > .ant-menu-submenu-title > span:nth-child(2) > .svg-menu-header')
        await expect(report).toBeVisible();


        // Click on the Loss-Bucketing Sub-Menu 
        await report.click();
        const lossBucketing = page.locator("a[href='/analytics/loss-bucket']")
        await expect(lossBucketing).toBeVisible();

    });
});
