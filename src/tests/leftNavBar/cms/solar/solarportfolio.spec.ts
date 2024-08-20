import { test, expect } from '@playwright/test';
import { doLogin } from "../../../../utils/utils";


test.describe("Verify the functionalities of Left Nav  for cms/solar", async () => {
    test("Left Nav CMS/solar", async ({ page }) => {
        await doLogin(page);
        const cms = page.locator('.svg-menu-header').first();
        await cms.click();
        const solar = page.locator('div').filter({ hasText: /^Solar$/ });
        await expect(solar).toBeVisible();
        await solar.click();

        // Get all of the sub_Menu in Solar Tab
        const portfolio = page.locator("a[href='/cms/solar/portfolio/home']");
        const wms = page.locator("a[href='/cms/solar/wms/wms-dashboard']");
        const stringModule = page.locator("a[href='/cms/solar/string-module/home']");
        const mfm = page.locator("a[href='/cms/solar/mfm/home']")
        const Monitoring = page.locator("a[href='/cms/monitor/solar/home']");
        const deviceRawData = page.locator("a[href = '/cms/solar/rawdata']")
        const scada = page.getByText('SCADA')
        const plant = page.locator('div').filter({ hasText: /^Plant$/ });
        const inverter = page.getByText('Inverter');
        const alert = page.getByText('Alerts');
        const event = page.getByText('Event', { exact: true });
        const externalDevice = page.locator('div').filter({ hasText: /^External Device$/ });
        const fs = page.locator('div').filter({ hasText: /^F&S$/ });

        // check all of the sub menus
        await expect(portfolio).toBeVisible()
        await expect(scada).toBeVisible()
        await expect(plant).toBeVisible()
        await expect(inverter).toBeVisible()
        await expect(wms).toBeVisible()
        await expect(stringModule).toBeVisible()
        await expect(mfm).toBeVisible()
        await expect(Monitoring).toBeVisible()
        await expect(alert).toBeVisible()
        await expect(event).toBeVisible()
        await expect(externalDevice).toBeVisible()
        await expect(deviceRawData).toBeVisible()
        await expect(fs).toBeVisible()

        // Check SCADA's Sub-Menu
        await scada.click();
        const scadaDashboard = page.locator("a[href = '/cms/solar/scada/home']");
        const heatMaps = page.getByText('Heatmaps');
        await expect(scadaDashboard).toBeVisible();
        await expect(heatMaps).toBeVisible();

        // Check HeapMaps's Sub-Menu
        await heatMaps.click();
        const production = page.locator("a[href='/cms/solar/scada/heatmap/production']");
        const isbt = page.locator("a[href='/cms/solar/scada/heatmap/igbt']");
        const inverterUnit = page.locator("a[href='/cms/solar/scada/heatmap/inverter-unit']");
        const transformer = page.locator("a[href='/cms/solar/scada/heatmap/transformer']")

        // check all of the sub menus of HeatMaps
        await expect(production).toBeVisible();
        await expect(isbt).toBeVisible();
        await expect(inverterUnit).toBeVisible();
        await expect(transformer).toBeVisible();


        // check plant's sub menu
        await plant.click();
        const plantDashboard = page.locator('a[href="/cms/solar/plant/home"]');
        const kpi = page.locator('a[href="/cms/solar/plant/kpi"]');
        await expect(plantDashboard).toBeVisible();
        await expect(kpi).toBeVisible();

        // Check the Inverter's Sub-Menu
        await inverter.click();
        const inverterDashboard = page.locator("a[href='/cms/solar/inverter/home']");
        const inverterKPI = page.locator("a[href='/cms/solar/inverter/kpi']");
        await expect(inverterDashboard).toBeVisible();
        await expect(inverterKPI).toBeVisible();


        // check alerts's sub menu
        await alert.click();
        const alertsToday = page.locator("a[href='/cms/notification/solar/alerts/today']");
        const alertsCurrentWeek = page.locator("a[href='/cms/notification/solar/alerts/current-week']");
        const alertsCurrentMonth = page.locator("a[href='/cms/notification/solar/alerts/current-month']");
        const alertsHistory = page.locator("a[href='/cms/notification/solar/alerts/history']");
        await expect(alertsToday).toBeVisible();
        await expect(alertsCurrentWeek).toBeVisible();
        await expect(alertsCurrentMonth).toBeVisible();
        await expect(alertsHistory).toBeVisible();

        // check event's sub menu
        await event.click();
        const eventToday = page.locator("a[href='/cms/notification/solar/events/today']");
        const eventCurrentWeek = page.locator("a[href='/cms/notification/solar/events/current-week']");
        const eventCurrentMonth = page.locator("a[href='/cms/notification/solar/events/current-month']");
        const eventHistory = page.locator("a[href='/cms/notification/solar/events/history']");
        await expect(eventToday).toBeVisible();
        await expect(eventCurrentWeek).toBeVisible();
        await expect(eventCurrentMonth).toBeVisible();
        await expect(eventHistory).toBeVisible();

        // Check the External Device's Sub-Menu
        await externalDevice.click();
        const jmr = page.locator("a[href = '/cms/solar/external-device/jmr/home']");
        const abt = page.locator("a[href='/cms/solar/external-device/abt/home']");
        await expect(jmr).toBeVisible();
        await expect(abt).toBeVisible();

        // Check the F&S's Sub-Menu
        await fs.click()
        const dashboardFS = page.locator("a[href='/cms/solar/f&s/dashboard']");
        const dsmSummary = page.locator("a[href='/cms/solar/f&s/DSM-Summary']")
        await expect(dashboardFS).toBeVisible();
        await expect(dsmSummary).toBeVisible();

    });
});



