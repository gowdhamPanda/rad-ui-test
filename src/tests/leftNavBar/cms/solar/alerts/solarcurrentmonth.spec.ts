import { test, expect } from '@playwright/test';
import { doLogin, getURL } from "../../../../../utils/utils"

test("Alert Month", async ({ page }) => {
    await doLogin(page);

    // Find the Locator for "CMS" Tab and Click
    const cms = page.locator('.svg-menu-header').first();
    expect(cms).toBeVisible();
    await cms.click();

    // Find the Locator for "Solar " Tab and Click
    const solar = page.locator(".ant-menu-submenu-title").getByText(/solar/i);
    await expect(solar).toBeVisible();
    await solar.click();

    // Check the Navigation URL for Alert Page 
    const alerts = page.getByText(/alerts/i)
    await expect(alerts).toBeVisible();
    await alerts.click();

    // Check the Navigation URL for  "Today Alert"  Page
    const alertsToday = page.getByText("Current Month");
    await expect(alertsToday).toBeVisible();
    await alertsToday.click();

    //Plant selection  Filter
    await page.getByRole('cell', { name: 'Plant Name' }).locator('path').click();
    await page.locator('li').filter({ hasText: 'CSBPL250MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'ESSP20MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'ESEP10MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'ESSP10MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES7MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES8MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'Panama10MW' }).getByLabel('').check();
    await page.getByRole('button', { name: 'OK' }).click();

    //Deselect option checking
    await page.getByRole('cell', { name: 'Plant Name' }).locator('path').click();
    await page.locator('li').filter({ hasText: 'CSBPL250MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'ESSP20MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'ESEP10MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'ESSP10MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES7MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES8MW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'Panama10MW' }).getByLabel('').check();
    await page.getByRole('button', { name: 'OK' }).click();

    //Block selection filter
    await page.getByRole('cell', { name: 'Block Name' }).locator('svg').click();
    await page.locator('li').filter({ hasText: 'DRES7MW_Block1' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES8MW_Block1' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'Panama10MW_Block1' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES7MW_Block2' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES8MW_Block2' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'Panama10MW_Block2' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES7MW_Block3' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES8MW_Block3' }).getByLabel('').check();
    await page.getByRole('button', { name: 'OK' }).click();

    //Deselect Selection filter
    await page.getByRole('cell', { name: 'Block Name' }).locator('svg').click();
    await page.locator('li').filter({ hasText: 'DRES7MW_Block1' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES8MW_Block1' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'Panama10MW_Block1' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES7MW_Block2' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES8MW_Block2' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'Panama10MW_Block2' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES7MW_Block3' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'DRES8MW_Block3' }).getByLabel('').check();
    await page.getByRole('button', { name: 'OK' }).click();

    //Device Name Searching 
    await page.getByRole('cell', { name: 'Device Name' }).locator('svg').click();
    await page.getByPlaceholder('Search Device Display Name').click();
    await page.getByPlaceholder('Search Device Display Name').fill('devicename');
    await page.getByRole('button', { name: 'Search' }).click();

     //reset Device Name Searching 
     await page.getByRole('cell', { name: 'Device Name' }).locator('svg').click();
     await page.getByPlaceholder('Search Device Display Name').click();
     await page.getByPlaceholder('Search Device Display Name').fill(' ');
     await page.getByRole('button', { name: 'Search' }).click();

    //Status checking Filter
    await page.getByRole('cell', { name: 'Status' }).locator('path').click();
    await page.locator('li').filter({ hasText: 'ALARM ON' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'ALARM OFF' }).getByLabel('').check();
    await page.getByRole('button', { name: 'OK' }).click();


    //Status deselect checking Filter
    await page.getByRole('cell', { name: 'Status' }).locator('path').click();
    await page.locator('li').filter({ hasText: 'ALARM ON' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'ALARM OFF' }).getByLabel('').check();
    await page.getByRole('button', { name: 'OK' }).click();


    //Severity checking Filter
    await page.getByRole('cell', { name: 'Severity' }).locator('svg').click();
    await page.locator('li').filter({ hasText: 'CRITICAL' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'HIGH' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'MEDIUM' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'LOW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'WARNING' }).getByLabel('').check();
    await page.getByRole('button', { name: 'OK' }).click();

    //Severity deselect checking Filter
    await page.getByRole('cell', { name: 'Severity' }).locator('svg').click();
    await page.locator('li').filter({ hasText: 'CRITICAL' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'HIGH' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'MEDIUM' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'LOW' }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'WARNING' }).getByLabel('').check();
    await page.getByRole('button', { name: 'OK' }).click();


    //Acknowledged checking Filter
    await page.getByRole('cell', { name: 'Acknowledged', exact: true }).locator('span').nth(1).click();
    await page.locator('li').filter({ hasText: /^Acknowledged$/ }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'Un Acknowledged' }).getByLabel('').check();
    await page.getByRole('button', { name: 'OK' }).click();

    //Acknowledged deselect checking Filter
    await page.getByRole('cell', { name: 'Acknowledged', exact: true }).locator('span').nth(1).click();
    await page.locator('li').filter({ hasText: /^Acknowledged$/ }).getByLabel('').check();
    await page.locator('li').filter({ hasText: 'Un Acknowledged' }).getByLabel('').check();
    await page.getByRole('button', { name: 'OK' }).click();


    //Acknowledged By checking Filter
    await page.getByRole('cell', { name: 'Acknowledged By' }).locator('svg').click();
    await page.getByText('CMS (cms@sgrids.io)').click();
    await page.getByRole('button', { name: 'OK' }).click();

    //Acknowledged By deselect checking Filter
    await page.getByRole('cell', { name: 'Acknowledged By' }).locator('svg').click();
    await page.getByText('CMS (cms@sgrids.io)').click();
    await page.getByRole('button', { name: 'OK' }).click();


    //Export       
    await page.getByRole('button', { name: 'Export' }).click();
    page.waitForEvent('download');
    await page.getByRole('button', { name: 'OK' }).click();



    //Acknowledge At
    await page.getByRole('cell', { name: 'Acknowledged At' }).locator('svg').click();
    await page.locator('nz-range-picker div').first().click();
    await page.getByRole('gridcell', { name: '11' }).locator('div').click();
    await page.getByText('16').nth(2).click();
    await page.getByPlaceholder('End date').click();
    await page.getByRole('gridcell', { name: '18' }).locator('div').click();
    await page.getByRole('button', { name: 'Ok' }).click();

    //Reset
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'OK' }).click();

    //Reload
    await page.getByRole('button', { name: 'Reload' }).click();
    await page.getByRole('button', { name: 'OK' }).click();

    //Add button
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByLabel('Close').click();
});
