import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Nav DGR Reports Tab", async () => {
    test("Left Nav DGR Reports Tab", async ({ page }) => {
        await doLogin(page);

        // Click on Report Tab
        const report = page.locator('li:nth-child(5) > .ant-menu-submenu-title > span:nth-child(2) > .svg-menu-header')
        await expect(report).toBeVisible();

        // Click on DGR Reports Sub-Menu
        await report.click()
        const dgrReports = page.getByText('DGR Reports');
        await expect(dgrReports).toBeVisible();

        // Get all of the DGR Reports Sub-Menu
        await dgrReports.click();
        const generation = page.getByText('Generation Report');
        await expect(generation).toBeVisible();

        // Get all of the Generation Report Sub-Menu
        await generation.click();
        const dgrSummary = page.locator("a[href='/analytics/dgrreports/dgr-summary']");
        const metering = page.locator("a[href='/analytics/dgrreports/metering']");
        const inverterGenerations = page.locator("a[href='/analytics/dgrreports/inverter-generations']");
        const inverterPR = page.locator("a[href='/analytics/dgrreports/inverter-pr']");
        const inverterPRDeviation = page.locator("a[href='/analytics/dgrreports/inverter-pr-deviation']");
        const inverterSpecificYield = page.locator("a[href='/analytics/dgrreports/inverter-specific-yield']");
        const inverterSpecificYieldDeviation = page.locator("a[href='/analytics/dgrreports/inverter-specific-yield-deviation']");

        // Check the assertion in all Options in Generation Report Sub-Menu
        await expect(dgrSummary).toBeVisible();
        await expect(metering).toBeVisible();
        await expect(inverterGenerations).toBeVisible();
        await expect(inverterPR).toBeVisible();
        await expect(inverterPRDeviation).toBeVisible();
        await expect(inverterSpecificYield).toBeVisible();
        await expect(inverterSpecificYieldDeviation).toBeVisible();


   });
});

