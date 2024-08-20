import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Nav Report Tab", async () => {
    test("Left Nav Report Tab", async ({ page }) => {
        await doLogin(page);

        // Click on Report Tab
        const report = page.locator('li:nth-child(5) > .ant-menu-submenu-title > span:nth-child(2) > .svg-menu-header')
        await expect(report).toBeVisible();

        // Click on Data Explorer Sub-Menu
        await report.click();
        const dataExplorer = page.locator('div').filter({ hasText: /^Data Explorer$/ })
        await expect(dataExplorer).toBeVisible();


        // Get all of the Data Explorer Sub-Menu
        await dataExplorer.click();
        const customReport = page.locator("div[class='cdk-overlay-container'] li:nth-child(1) a:nth-child(1)");
        const thirdPartyLink = page.getByText('Third Party Links')
        const create = page.locator("a[href='/analytics/data-explorer/create']");
        const manage = page.locator("a[href='/analytics/data-explorer/manage']");

        // Check the assertion in all Options in Data Explorer Sub-Menu
        await expect(customReport).toBeVisible();
        await expect(thirdPartyLink).toBeVisible();
        await expect(create).toBeVisible();
        await expect(manage).toBeVisible();


    });
});


