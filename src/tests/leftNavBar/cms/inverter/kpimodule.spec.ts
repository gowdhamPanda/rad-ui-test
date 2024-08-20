import { test, expect } from '@playwright/test';
import { doLogin } from '../../../../utils/utils';
import { getBaseUrl } from '../../../../../config';
import { routeslist } from '../../../router.const';
import { inverterKpiVariables } from '../../../../utils/constant';

test.describe(" cms/solar/inverter/kpi module", async () => {
  test("inverter kpi Module cls ", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.SOLAR_INVERTER_KPI}`);
    
    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 4);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
      .split('/').reverse().map(part => part.padStart(2, '0')).join('-');

await page.getByPlaceholder(inverterKpiVariables.Placeholder).fill(formattedPreviousDate);
await page.getByPlaceholder(inverterKpiVariables.Placeholder01).fill(formattedPreviousDate);
await page.getByPlaceholder(inverterKpiVariables.Placeholder).fill(formattedPreviousDate);
await page.keyboard.press(inverterKpiVariables.KeyboardButton);

const kpitext = await page.getByText('KPI', { exact: true })
await (kpitext).click();

  await page.getByText(inverterKpiVariables.Text).click();
  await page.locator('app-info-button').getByRole('button').click();
  await page.getByRole('button', { name: (inverterKpiVariables.disableButton) }).click();
  await page.getByRole('button', { name: (inverterKpiVariables.enableButton) }).click();
  await page.locator('button').filter({ hasText: (inverterKpiVariables.disableButton01) }).click();
  await page.getByRole('button', { name: (inverterKpiVariables.enableButton01) }).click();
  await page.getByText((inverterKpiVariables.trackerOption), { exact: true }).click();
  await page.getByText(inverterKpiVariables.nonTrackerOption).click();
  await page.getByText((inverterKpiVariables.dropDownOption), { exact: true }).click();
  await page.getByText((inverterKpiVariables.dropDownOption01), { exact: true }).click();
  await page.locator('app-inverter-monitor app-menu').getByRole('button').click();
  await page.getByText(inverterKpiVariables.appMenuButton).click();
  await page.locator('#screencontainer > div > app-inverter-kpis > div:nth-child(1) > div > app-inverter-monitor > nz-card > div.ant-card-body > div > div:nth-child(1) > app-inverter-monitor-view > nz-avatar').click();
  await page.locator('app-inverter-monitor-details').getByRole('button').click();
  await page.locator('app-inverter-monitor-details').getByRole('button').click();

});
});
  test("inverter monitor/maximize ", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.SOLAR_INVERTER_KPI}`);

    await page.locator('app-inverter-monitor app-expand').getByRole('button').click();
    await page.getByText(inverterKpiVariables.Text).click();
  await page.locator('app-info-button').getByRole('button').click();
  await page.getByRole('button', { name: (inverterKpiVariables.disableButton) }).click();
  await page.getByRole('button', { name: (inverterKpiVariables.enableButton) }).click();
  await page.locator('button').filter({ hasText: (inverterKpiVariables.disableButton01) }).click();
  await page.getByRole('button', { name: (inverterKpiVariables.enableButton01) }).click();
  await page.getByText((inverterKpiVariables.trackerOption), { exact: true }).click();
  await page.getByText(inverterKpiVariables.nonTrackerOption).click();
  await page.getByText((inverterKpiVariables.dropDownOption), { exact: true }).click();
  await page.getByText((inverterKpiVariables.dropDownOption01), { exact: true }).click();
  await page.locator('app-inverter-monitor app-menu').getByRole('button').click();
  await page.getByText(inverterKpiVariables.appMenuButton).click();
  await page.locator('app-inverter-monitor app-expand').getByRole('button').click();
  })

test('cms/solar/inverter kpi and text', async ({ page }) => {
  await doLogin(page);
  await page.goto(`${getBaseUrl()}${routeslist.SOLAR_INVERTER_KPI}`);

  await page.getByText(inverterKpiVariables.text01).click();
  await page.locator('app-inverter-kpi-bar app-menu').getByRole('button').click();
  await page.getByText(inverterKpiVariables.appMenuButton).click();
  await page.locator('app-inverter-kpi-bar app-expand').getByRole('button').click();
  await page.getByText('Inverter KPI\'s').click();
  await page.locator('app-inverter-kpi-bar app-menu').getByRole('button').click();
  await page.locator('app-inverter-kpi-bar app-expand').getByRole('button').click();
  await page.getByRole('heading', { name: (inverterKpiVariables.text02) }).click();
  await page.getByRole('heading', { name: (inverterKpiVariables.text03) }).click();
  await page.getByRole('heading', { name: (inverterKpiVariables.text04) }).click();
  await page.getByRole('heading', { name: (inverterKpiVariables.text05) }).click();
  await page.getByRole('heading', { name: (inverterKpiVariables.text06) }).click();
  await page.getByRole('heading', { name: (inverterKpiVariables.text07) }).click();
});
  test("Left Nav CMS/solar/Inverter/Grids ", async ({ page }) => {
      await doLogin(page);
      await page.goto(`${getBaseUrl()}${routeslist.SOLAR_INVERTER_KPI}`);
        // checking the Inverter Grids
        const inverterList = inverterKpiVariables.Inverters;
        for (let Grids = 0; Grids < inverterList.length; Grids++) {
          await page.locator('.ant-avatar').nth(Grids).click();
        }  
  
    });
