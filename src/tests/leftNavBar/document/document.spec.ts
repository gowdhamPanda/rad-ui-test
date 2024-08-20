import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Nav Document Tab", async () => {
    test("Left Nav Document  Tab", async ({ page }) => {
        await doLogin(page);

        // Click on Document Tab
        const documentTab = page.locator('li:nth-child(3) > .ant-menu-submenu-title > span:nth-child(2) > .svg-menu-header');
        await expect(documentTab).toBeVisible();

        //Click on Document Tab to Open Document Sub-Menu
        await documentTab.click();
        const documentSubMenu = page.locator("a[href='/document/index']")
        await expect(documentSubMenu).toBeVisible();

        //Click on Document Tab to Open Document Tag Sub-Menu 
        const documentTag = page.locator("a[href='/cmms/document-tag/index']");
        await expect(documentTag).toBeVisible();
    });

});
