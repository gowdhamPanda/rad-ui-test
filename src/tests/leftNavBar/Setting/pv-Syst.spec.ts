import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Nav Setting in PV-System", async () => {
    test("Left Nav PV-System in Setting", async ({ page }) => {
        await doLogin(page);

        // Click on Setting Tab 
        const setting = page.locator('li:nth-child(4) > .ant-menu-submenu-title > span:nth-child(2) > .svg-menu-header')
        await expect(setting).toBeVisible();
        await setting.click();

        // Click on PV-System Tab
        const pvSystem = page.getByRole('link', { name: 'PV-Syst' });
        await expect (pvSystem).toBeVisible();

      });

});