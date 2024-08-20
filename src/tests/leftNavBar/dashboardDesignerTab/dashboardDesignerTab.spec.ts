import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Dashboard  Designer Tab", async () => {
    test("Left Nav Dashboard  Designer", async ({ page }) => {
        await doLogin(page);

        // Click on Dashboard  Designer Sub-Menu
        const dashboardDesigner = page.locator('li:nth-child(6) > .ant-menu-submenu-title > span:nth-child(2) > .svg-menu-header')
        await expect(dashboardDesigner).toBeVisible();

        // Click on Dashboard  Designer inside the Dashboard Designer Sub-Menu
        await dashboardDesigner.click();
        const dashboardDesignerOption = page.getByRole('link', { name: 'Dashboard Designer'})
        await expect(dashboardDesignerOption).toBeVisible();


        
    });
});

