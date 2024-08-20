import { test, expect } from '@playwright/test';
import { doLogin } from '../../../../../../utils/utils';


test.describe("SCADA", async () => {
    test("SCADA Module cls ", async ({ page }) => {
        await doLogin(page);

        // Click on CMS Icon
        const cms = page.locator('.svg-menu-header').first();
        expect(cms).toBeVisible();
        await cms.click();

        //click on solar
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
        const SCADA = page.getByText('SCADA')
        const plant = page.locator('div').filter({ hasText: /^Plant$/ });
        const inverter = page.getByText('Inverter');
        const alert = page.getByText('Alerts');
        const event = page.getByText('Event', { exact: true });
        const externalDevice = page.locator('div').filter({ hasText: /^External Device$/ });
        const fs = page.locator('div').filter({ hasText: /^F&S$/ });

        await expect(portfolio).toBeVisible();
        await expect(wms).toBeVisible();
        await expect(stringModule).toBeVisible();
        await expect(mfm).toBeVisible();
        await expect(Monitoring).toBeVisible();
        await expect(deviceRawData).toBeVisible();
        await expect(SCADA).toBeVisible();
        await expect(plant).toBeVisible();
        await expect(inverter).toBeVisible();
        await expect(alert).toBeVisible();
        await expect(event).toBeVisible();
        await expect(externalDevice).toBeVisible();
        await expect(fs).toBeVisible();

        // Click on SCADA  Tab Sub-Menu
        const scada = page.getByText('SCADA');
        await expect(scada).toBeVisible();
        await scada.click();


        // Get all of the sub_Menu in SCADA
        const Dashboard = page.getByText('Dashboard');
        await expect(Dashboard).toBeVisible();

        const Heatmaps = page.getByText('Heatmaps');
        await expect(Heatmaps).toBeVisible();

        //select heatmaps
        const Heatmap = page.getByText('Heatmaps');
        await expect(Heatmap).toBeVisible();
        await Heatmap.click();


        // Get all of the sub_Menu in SCADA
        const Production = page.getByText('Production')
        await expect(Production).toBeVisible();

        const IGBT = page.getByText('IGBT')
        await expect(IGBT).toBeVisible();

        const inverterunit = page.getByText('Inverter Unit')
        await expect(inverterunit).toBeVisible();

        const Transformer = page.getByText('Transformer')
        await expect(Transformer).toBeVisible();


        //click Transformer Module
        const transformer = page.getByText('Transformer')
        await expect(transformer).toBeVisible();
        await transformer.click();


        //forward navigation  
        const forword = page.locator('i:nth-child(2) > svg');
        await expect(forword).toBeVisible();
        await forword.click();

        //backward navigation 
        const previous = page.locator('app-header > i > svg').first();
        await expect(previous).toBeVisible();
        await previous.click();


        //Inverter Block
        await page.locator('nz-select-top-control').filter({ hasText: 'Select Block' }).click();
        await page.getByTitle('IS30').click();
        await page.getByText('IS4').click();
        await page.getByText('IS2').click();
        //await page.getByText('IS3').click();
        await page.getByText('IS6').click();
        await page.getByText('IS7').click();
        await page.getByText('IS5').click();
        await page.getByText('IS8').click();




        //Expand 
        await page.locator('app-expand').getByRole('button').click();
        await page.locator('app-expand').getByRole('button').click();



    });
});