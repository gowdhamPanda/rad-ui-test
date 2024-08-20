import { test, expect } from '@playwright/test';
import { doLogin } from "../../../../utils/utils";


test.describe("Verify the functionalities of Left Nav Content component of Home Page", async () => {

    test('Left Nav Content component of Home Page', async ({ page }) => {
        // Check if CMS menu is available
        await doLogin(page);
        const cms = page.locator('.svg-menu-header').first();
        expect(cms).toBeVisible();
        await cms.click();
        const wind = page.locator(".ant-menu-submenu-title").getByText(/wind/i);
        await expect(wind).toBeVisible();
        await wind.click();

        // get all of the sub menu
        const portfolio = page.locator("a[href='/cms/wind/portfolio/home']");
        const monitoring = page.locator("a[href='/cms/monitor/wind/home']");
        const deviceRawData = page.locator("a[href='/cms/wind/rawdata']");
        const plant = page.locator('div').filter({ hasText: /^Plant$/ })
        const turbine = page.getByText(/turbine/i);
        const alerts = page.getByText(/alerts/i)
        const event = page.locator('div').filter({ hasText: /^Event$/ });

        // check all of the sub menus
        await expect(portfolio).toBeVisible();
        await expect(monitoring).toBeVisible();
        await expect(deviceRawData).toBeVisible();
        await expect(plant).toBeVisible();
        await expect(turbine).toBeVisible();
        await expect(alerts).toBeVisible();
        await expect(alerts).toBeVisible();

        // check plant's sub menu
        await plant.click();
        const plantDashboard = page.locator('a[href="/cms/wind/plant/home"]')
        await expect(plantDashboard).toBeVisible();

        // check turbine's sub menu
        await turbine.click();
        const turbineDashboard = page.locator('a[href="/cms/wind/plant/home"]');
        const energyAvailability = page.locator("a[href='/cms/wind/turbine/energyavailability']");
        await expect(turbineDashboard).toBeVisible();
        await expect(energyAvailability).toBeVisible();


        // check alerts's sub menu
        await alerts.click();
        const alertsToday = page.locator("a[href='/cms/notification/wind/alerts/today']");
        const alertsCurrentWeek = page.locator("a[href='/cms/notification/wind/alerts/current-week']");
        const alertsCurrentMonth = page.locator("a[href='/cms/notification/wind/alerts/current-month']");
        const alertsHistory = page.locator("a[href='/cms/notification/wind/alerts/history']");
        await expect(alertsToday).toBeVisible();
        await expect(alertsCurrentWeek).toBeVisible();
        await expect(alertsCurrentMonth).toBeVisible();
        await expect(alertsHistory).toBeVisible();

        // check event's sub menu
        await event.click();
        const eventToday = page.locator("a[href='/cms/notification/wind/events/today']");
        const eventCurrentWeek = page.locator("a[href='/cms/notification/wind/events/current-week']");
        const eventCurrentMonth = page.locator("a[href='/cms/notification/wind/events/current-month']");
        const eventHistory = page.locator("a[href='/cms/notification/wind/events/history']");
        await expect(eventToday).toBeVisible();
        await expect(eventCurrentWeek).toBeVisible();
        await expect(eventCurrentMonth).toBeVisible();
        await expect(eventHistory).toBeVisible();
    });
});