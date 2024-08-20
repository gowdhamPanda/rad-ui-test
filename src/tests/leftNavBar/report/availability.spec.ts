import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Nav Availability Tab", async () => {
    test("Left Nav Availability Tab", async ({ page }) => {
        await doLogin(page);

        // Click on Report Tab
        const report = page.locator('li:nth-child(5) > .ant-menu-submenu-title > span:nth-child(2) > .svg-menu-header')
        await expect(report).toBeVisible();

        // Click on Availability Sub-Menu
        await report.click()
        const availability = page.getByRole('link', { name: 'Availability Reports' })
        await expect(availability).toBeVisible();

    });
});
