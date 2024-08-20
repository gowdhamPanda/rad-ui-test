import { test, expect } from '@playwright/test';
import { doLogin } from '../../../../../../utils/utils';
import { getBaseUrl } from '../../../../../../../config';
import { routeslist } from '../../../../../router.const';
import { igbtVariables } from '../../../../../../utils/constant';

test.describe("SCADA", async () => {
    test("SCADA Module cls ", async ({ page }) => {
        await doLogin(page);

        await page.goto(`${getBaseUrl()}${routeslist.SCADA_HEATMAP_IGBT}`);

        // Click on CMS text
        await page.getByText(igbtVariables.pageHeaderText).click();
        await page.getByRole('heading', { name: ('Power') }).click();

        await page.getByText(igbtVariables.headerText).click();
        await page.getByText(igbtVariables.headerText01).click();
        await page.getByText(igbtVariables.headerText02).click();
        await page.getByRole('heading', { name: igbtVariables.headerText03 }).click();
        await page.getByText((igbtVariables.headerText04), { exact: true }).click();
        await page.getByText(igbtVariables.headerText05).click();
        await page.getByText(igbtVariables.headerText06).click();
        await page.getByText(igbtVariables.headerText07).click();
        await page.getByText(igbtVariables.headerText08).click();
        await page.getByRole('heading', { name: (igbtVariables.headerText09) }).nth(1).click();
        await page.getByText(igbtVariables.headerText10).click();
        await page.getByText(igbtVariables.headerText11).click();

        // checking the forward button
       
        await page.locator('i:nth-child(2) > svg').click();
        await page.getByText(igbtVariables.headerText12).click();
        await page.getByText(igbtVariables.headerText13).click();
        
        // checking the backward button 
        
        await page.locator('app-header > i > svg').first().click();

        //srelect IGBT  Block
        await page.locator('nz-select-top-control').filter({ hasText: 'Select Block' }).click();
        await page.getByTitle(igbtVariables.deviceName).click();
        await page.getByText(igbtVariables.deviceName01).click();
        await page.getByText(igbtVariables.deviceName02).click();
        await page.getByText(igbtVariables.deviceName03).click();
        await page.getByText(igbtVariables.deviceName04).click();
        await page.getByText(igbtVariables.deviceName05).click();

        //expand
        await page.locator('app-expand').getByRole('button').click();
        await page.locator('app-expand').getByRole('button').click();

        //fill Temp Deviation
        await page.getByPlaceholder(igbtVariables.placeHolder).click();
        await page.getByPlaceholder(igbtVariables.placeHolder).fill(igbtVariables.inputValue);
        await page.getByRole('button', { name: (igbtVariables.setButton) }).click();

        //select Filter
        await page.locator('button').nth(2).click();
        await page.getByText((igbtVariables.dropDown), { exact: true }).click();
        //change filter
        await page.locator('button').nth(2).click();
        await page.getByText(igbtVariables.dropDown01).click();

        const powerPlantNames = igbtVariables.plantnames
          for (const powerPlantName of powerPlantNames) 
          {
            await page.locator('#screencontainer > app-bread-crums > div > div > nz-card > div > div > div.bread-col.ant-col.ant-col-12.ant-col-xs-24 > nz-space > div:nth-child(4) > span > app-header-plant-dropdown > form > nz-select > nz-select-top-control > nz-select-item').click();
            await page.waitForTimeout(1*300);
            await page.getByText(powerPlantName).click();
          }
    });
});


