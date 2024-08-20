import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Nav  Designer Tab", async () => {
    test("Left Nav Availability Tab", async ({ page }) => {
        await doLogin(page);

        // Click on Designer Tab
        const designer = page.locator('li:nth-child(7) > .ant-menu-submenu-title > span:nth-child(2) > .svg-menu-header');
        await expect(designer).toBeVisible();

        // Click on SLD Designer 
        await designer.click();
        const sldDesigner = page.getByRole('link', { name: 'SLD-designer' });
        await expect(sldDesigner).toBeVisible();

    });
});

