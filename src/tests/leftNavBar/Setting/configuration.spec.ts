import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Nav  for cms/solar", async () => {
    test("Left Nav CMS/solar", async ({ page }) => {
        await doLogin(page);

        // Click on Setting Tab 
        const setting = page.locator('li:nth-child(4) > .ant-menu-submenu-title > span:nth-child(2) > .svg-menu-header')
        await expect(setting).toBeVisible();
        await setting.click();

        // Click on Setting Tab to Open Configuration
        const configuration = page.locator('div').filter({ hasText: /^Configuration$/ })
        await expect(configuration).toBeVisible();
        await configuration.click()

        // Get all of the Sub-Menu of Configuration
        const organization = page.locator("a[href='/setting/admin/organization/list']");
        const plant = page.locator("a[href='/setting/admin/plant']");
        const block = page.locator("a[href='/setting/admin/block']");
        const device = page.locator("a[href='/setting/admin/device/list']");
        const user = page.locator('div').filter({ hasText: /^User$/ })
        const customAPI = page.locator('div').filter({ hasText: /^Custom API$/ });
        const Legends = page.locator("a[href='/setting/admin/legends']");

        // check assertion all of the sub menus
        await expect(organization).toBeVisible()
        await expect(plant).toBeVisible()
        await expect(block).toBeVisible()
        await expect(device).toBeVisible()
        await expect(user).toBeVisible()
        await expect(customAPI).toBeVisible()
        await expect(Legends).toBeVisible()

        // Check the Sub-Menu of User Option
        await user.click();
        const list = page.locator("a[href='/setting/admin/user']");
        const role = page.locator("a[href='/setting/admin/userrole']");
        const group = page.locator("a[href='/setting/admin/user-group']");
        await expect(list).toBeVisible()
        await expect(role).toBeVisible()
        await expect(group).toBeVisible()

        // Check the Sub-Menu of Custom API Option
        await customAPI.click();
        const listOfCustomAPI = page.locator("a[href='/setting/admin/custom-api']");
        const keys = page.locator("a[href='/setting/admin/keys']");
        await expect(listOfCustomAPI).toBeVisible()
        await expect(keys).toBeVisible()

    });
});

