import { test, expect } from '@playwright/test';
import { doLogin } from '../../../../utils/utils';
import { getBaseUrl } from '../../../../../config';
import { routeslist } from '../../../router.const';
import { inverter_dashboard } from '../../../../utils/constant';

test.describe("Inverter Dasboard", async () => {
  test("Inverter dashboard/header/Cumulative Inverter Power and Inverter Kpi", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INVERTER_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
    .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator(inverter_dashboard.DateSelector).fill(formattedPreviousDate);
    await page.keyboard.press(inverter_dashboard.Enter);

    await page.getByLabel('breadcrumb').getByRole('button', { name: 'Inverter' }).click();
    await page.locator('nz-breadcrumb button').click();

    //checking the Today Energy 
    await page.getByText(inverter_dashboard.InverterTodayText).click();
    await page.locator(inverter_dashboard.InverterTodayLoactor).getByRole('button').click();
    await page.getByText(inverter_dashboard.InverterTodayText).click();
    await page.locator(inverter_dashboard.InverterTodayLoactor).getByRole('button').click();
    //checking the Weekly Engery
    await page.getByText(inverter_dashboard.InverterWeeklyText).click();
    await page.locator(inverter_dashboard.InverterWeeklyLocator).getByRole('button').click();
    await page.getByText(inverter_dashboard.InverterWeeklyText).click();
    await page.locator(inverter_dashboard.InverterWeeklyLocator).getByRole('button').click();
    //checking the Monthy Energy
    await page.getByText(inverter_dashboard.InverterMonthlyText).click();
    await page.locator(inverter_dashboard.InverterMonthlyLocator).getByRole('button').click();
    await page.getByText(inverter_dashboard.InverterMonthlyText).click();
    await page.locator(inverter_dashboard.InverterMonthlyLocator).getByRole('button').click();
    //checking the Total Energy
    await page.getByText(inverter_dashboard.InverterTotalText).click();
    await page.locator(inverter_dashboard.InverterTotalLocator).getByRole('button').click();
    await page.getByText(inverter_dashboard.InverterTotalText).click();
    await page.locator(inverter_dashboard.InverterTotalLocator).getByRole('button').click();

  // verifying the Cumulative Inverter Power
  await page.getByText(inverter_dashboard.InverterPowerText).click();
  await page.locator(inverter_dashboard.InverterPowerMenuLocator).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterExport).click();
  await page.getByText(inverter_dashboard.InverterPowerSuccessfull).click();
  await page.locator(inverter_dashboard.InverterPowerExpandLocator).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterPowerText).click();
  await page.locator(inverter_dashboard.InverterPowerMenuLocator).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterExport).click();
  await page.getByText(inverter_dashboard.InverterPowerSuccessfull).click();
  await page.locator(inverter_dashboard.InverterPowerExpandLocator).getByRole('button').click();

  // Verifying the Inverter KPI\'s
  await page.getByText(inverter_dashboard.InverterKpiText).click();
  await page.locator(inverter_dashboard.InverterKpiMenuLocator).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterExport).click();
  await page.getByText(inverter_dashboard.InverterkpiPopMessage).click();
  await page.locator(inverter_dashboard.InverterKpiExpandLocator).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterKpiText).click();
  await page.locator(inverter_dashboard.InverterKpiMenuLocator).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterExport).click();
  await page.getByText(inverter_dashboard.InverterkpiPopMessage).click();
  await page.locator(inverter_dashboard.InverterKpiExpandLocator).getByRole('button').click();
  })

  
test("Inverter dashboard/live Inverter Kpi", async ({ page }) => {
  await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.INVERTER_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);
    
    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
    .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator(inverter_dashboard.DateSelector).fill(formattedPreviousDate);
    await page.keyboard.press(inverter_dashboard.Enter);

  await page.getByText(inverter_dashboard.LiveInverterText).click();
  await page.locator(inverter_dashboard.LiveInverterDeviation).getByRole('button').click();
  await page.getByRole('button', { name: (inverter_dashboard.LiveInverterMedian) }).click();
  await page.getByRole('button', { name: (inverter_dashboard.LiveInverterMax) }).click();
  await page.locator('button').filter({ hasText: (inverter_dashboard.LiveInverter) }).click();
  await page.getByRole('button', { name: (inverter_dashboard.LiveInverterModule) }).click();
  await page.getByText((inverter_dashboard.LiveInverterTracker), { exact: true }).click();
  await page.getByText((inverter_dashboard.LiveInverterNonTracker)).click();
  await page.getByText((inverter_dashboard.LiveInverterPr), { exact: true }).click();
  await page.getByText((inverter_dashboard.LiveInverterYield), { exact: true }).click();
  await page.locator(inverter_dashboard.LiveInverterMenu).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterExport).click();
  await page.locator(inverter_dashboard.LiveInverterExpand).getByRole('button').click();
  await page.getByText(inverter_dashboard.LiveInverterText).click();
  await page.locator(inverter_dashboard.LiveInverterDeviation).getByRole('button').click();
  await page.getByRole('button', { name: (inverter_dashboard.LiveInverterMedian) }).click();
  await page.getByRole('button', { name: (inverter_dashboard.LiveInverterMax) }).click();
  await page.locator('button').filter({ hasText: inverter_dashboard.LiveInverter }).click();
  await page.getByRole('button', { name: (inverter_dashboard.LiveInverterModule) }).click();
  await page.getByText(inverter_dashboard.LiveInverterAll).click();
  await page.getByText('Tracker', { exact: true }).click();
  await page.getByText((inverter_dashboard.LiveInverterYield), { exact: true }).click();
  await page.getByText((inverter_dashboard.LiveInverterPr), { exact: true }).click();
  await page.locator(inverter_dashboard.LiveInverterMenu).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterExport).click();
  await page.locator(inverter_dashboard.LiveInverterExpand).getByRole('button').click();
  await page.getByText(inverter_dashboard.LiveInverterAll).click();
  const inverterList = inverter_dashboard.LiveInverterMonitor
        for (let Grids = 0; Grids < inverterList.length; Grids++) {
          await page.locator('.ant-avatar').nth(Grids).click();
        }  
  });


  test("Inverter dashboard/Inverter Ranking", async ({ page }) => {
    await doLogin(page)
    await page.goto(`${getBaseUrl()}${routeslist.INVERTER_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
    .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator(inverter_dashboard.DateSelector).fill(formattedPreviousDate);
    await page.keyboard.press(inverter_dashboard.Enter);

  await page.getByRole('tab', { name: (inverter_dashboard.InverterRankingText) }).click();
  await page.locator(inverter_dashboard.InverterRankingLocator).getByText(inverter_dashboard.InverterRankingText).click();
  await page.getByText(inverter_dashboard.InverterRankingSort).click({
    clickCount: 2
  });
  await page.getByText(inverter_dashboard.InverterRankingSort01).click({
    clickCount: 2
  });
  await page.getByText(inverter_dashboard.InverterRankingSort02).click({
    clickCount: 2
  });
  await page.getByText(inverter_dashboard.InverterRankingSort03).click({
    clickCount: 2
  });
  await page.getByText(inverter_dashboard.InverterRankingSort04).click({
    clickCount: 2
  });
  await page.locator(inverter_dashboard.InverterRankingMenu).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterExport).click();
  
  await page.locator(inverter_dashboard.InverterRankingExpand).getByRole('button').click();
  await page.locator(inverter_dashboard.InverterRankingLocator).getByText(inverter_dashboard.InverterRankingText).click();
  await page.getByText(inverter_dashboard.InverterRankingSort).dblclick();
  await page.getByText(inverter_dashboard.InverterRankingSort01).dblclick();
  await page.getByText(inverter_dashboard.InverterRankingSort02).dblclick();
  await page.getByText(inverter_dashboard.InverterRankingSort03).dblclick();
  await page.getByText(inverter_dashboard.InverterRankingSort04).dblclick();
  await page.locator(inverter_dashboard.InverterRankingMenu).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterExport).click();
  await page.locator(inverter_dashboard.InverterRankingExpand).getByRole('button').click();
})


test("Inverter dashboard/Inverter Heatmap", async ({ page }) => {
  await doLogin(page)
  await page.goto(`${getBaseUrl()}${routeslist.INVERTER_DASHBOARD}`);

  const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
    .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator(inverter_dashboard.DateSelector).fill(formattedPreviousDate);
    await page.keyboard.press(inverter_dashboard.Enter);

  await page.getByRole('tab', { name: (inverter_dashboard.InverterHeatMapText) }).click();
  await page.getByText((inverter_dashboard.HeatmapText), { exact: true }).click();
  await page.getByText(inverter_dashboard.InverterHeatmapYield).click();
  await page.getByText(inverter_dashboard.InverterHeatmapAvailability).click();
  await page.getByText(inverter_dashboard.InverterHeatmapEfficiency).click();
  await page.locator(inverter_dashboard.InverterHeatmapMenu).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterExport).click();
  await page.getByText(inverter_dashboard.InverterHeatmapMessage).click();
  await page.locator(inverter_dashboard.InverterHeatmapExpand).getByRole('button').click();
  await page.getByText(inverter_dashboard.HeatmapText, { exact: true }).click();
  await page.locator(inverter_dashboard.InverterHeatmapPrLoactor).getByText(inverter_dashboard.InverterHeatmapPr).click();
  await page.getByText(inverter_dashboard.InverterHeatmapYield).click();
  await page.getByText(inverter_dashboard.InverterHeatmapAvailability).click();
  await page.getByText(inverter_dashboard.InverterHeatmapEfficiency).click();
  await page.locator(inverter_dashboard.InverterHeatmapMenu).getByRole('button').click();
  await page.getByText(inverter_dashboard.InverterExport).click();
  await page.getByText(inverter_dashboard.InverterHeatmapMessage).click();
  await page.locator(inverter_dashboard.InverterHeatmapExpand).getByRole('button').click();
});
test("CMS/solar/inverter dashboard Plant Dropdowns", async ({ page }) => {
  await doLogin(page);
  await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

  const dropdownSelector: string = "nz-select-top-control";

  const dropdown = await page.$(dropdownSelector);

  if (dropdown) {
    await dropdown.waitForElementState("visible");
    for (let optionIndex = 0; optionIndex <= 6; optionIndex++) {
      await page.waitForTimeout(1 * 200);
      await dropdown.click();
      const optionSelector: string = `#cdk-overlay-0 > nz-option-container > div > cdk-virtual-scroll-viewport > div.cdk-virtual-scroll-content-wrapper > nz-option-item:nth-child(${
        optionIndex + 1
      })`;
      await page.waitForSelector(optionSelector);
      await page.click(optionSelector);
    }
  }
});
});
