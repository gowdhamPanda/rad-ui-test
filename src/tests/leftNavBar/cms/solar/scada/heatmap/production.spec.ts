import { test, expect } from '@playwright/test';
import { delay, doLogin } from '../../../../../../utils/utils';
import { routeslist } from '../../../../../router.const';
import { getBaseUrl } from '../../../../../../../config';
import { Sacada_Heatmap_Production } from '../../../../../../utils/constant';

test.describe("SCADA /Heatmap", async () => {
  test("SCADA /Heatmap/Production ", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.SCADA_HEATMAP_PRODUCTION}`);

    const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
const year = currentDate.getFullYear();

const formattedDate = `${day}-${month}-${year}`;
await page.getByText(formattedDate).click();

    await page.getByText(Sacada_Heatmap_Production.HeatmapProduction).click();
    await page.getByRole('heading', { name: (Sacada_Heatmap_Production.ProductionPower) }).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionActivePower).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionDailyProduction).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionPeakPower).click();
    await page.getByRole('heading', { name: (Sacada_Heatmap_Production.ProductionKPI) }).click();
    await page.getByText((Sacada_Heatmap_Production.ProductionPr), { exact: true }).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionPa).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionCUFAC).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionTotalGHI).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionTotalPOA).click();

    await page.getByRole('heading', { name: (Sacada_Heatmap_Production.ProductionHeatmapWMS) }).nth(1).click();

    await page.getByText(Sacada_Heatmap_Production.ProductionModuleTemp).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionAmbientTemp).click();
    
    await page.locator(Sacada_Heatmap_Production.ForwardLocator).click();

    await page.getByText(Sacada_Heatmap_Production.ProductionRelativeHumidity).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionWindSpeed).click();

   await page.locator(Sacada_Heatmap_Production.BackwardLocator).first().click();

    await page.getByText((Sacada_Heatmap_Production.ProductionHeaderText), { exact: true }).click();
    //Block
    await page.locator(Sacada_Heatmap_Production.SelectBlockLocator)
    .filter
    ({ 
      hasText: (Sacada_Heatmap_Production.SelectBlockPlaceHolder)
     })
     .click();
    await page.getByTitle(Sacada_Heatmap_Production.ProductionBlockName).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionBlockName01).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionBlockName02).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionBlockName03).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionBlockName04).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionBlockName05).click();
    // await delay (3000) 


    const blockTypes: string[] = Sacada_Heatmap_Production.SelectBlock
    const blockCount: number = blockTypes.length;

for (let type of blockTypes) {
    for (let block = 1; block <= blockCount; block++) {
        const blockName: string = `${type} Inverter ${block}`;
        await page.getByText(blockName).click();
    }
}

    //Production  Expand
    await page.locator(Sacada_Heatmap_Production.ProductionExpand).getByRole('button').click();

    await page.getByText((Sacada_Heatmap_Production.ProductionHeaderText), { exact: true }).click();

    await page.locator(Sacada_Heatmap_Production.SelectBlockCloseLocator).click();
    //Block
    await page.locator(Sacada_Heatmap_Production.SelectBlockLocator)
    .filter
    ({ 
      hasText: (Sacada_Heatmap_Production.SelectBlockPlaceHolder)
     })
     .click();
    await page.getByTitle(Sacada_Heatmap_Production.ProductionBlockName).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionBlockName01).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionBlockName02).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionBlockName03).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionBlockName04).click();
    await page.getByText(Sacada_Heatmap_Production.ProductionBlockName05).click();


    const blockTypes01: string[] = Sacada_Heatmap_Production.SelectBlock
    const blockCount01: number = blockTypes.length;

for (let type of blockTypes01) {
    for (let blocks = 1; blocks <= blockCount01; blocks++) {
        const blockName01: string = `${type} Inverter ${blocks}`;
        await page.getByText(blockName01).click();
    }
}
await page.locator(Sacada_Heatmap_Production.ProductionExpand).getByRole('button').click();

          //DropDown
            const powerPlantNames = Sacada_Heatmap_Production.HeatmapProductionPlant
            
            for (const powerPlantName of powerPlantNames) 
            {
              await page.locator('#screencontainer > app-bread-crums > div > div > nz-card > div > div > div.bread-col.ant-col.ant-col-12.ant-col-xs-24 > nz-space > div:nth-child(4) > span > app-header-plant-dropdown > form > nz-select > nz-select-top-control > nz-select-item').click();
              await delay(1*300);
              await page.getByText(powerPlantName).click();
            }
      });
  });


  