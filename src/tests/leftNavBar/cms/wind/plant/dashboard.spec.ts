import { test, expect } from '@playwright/test';
import { doLogin, getURL } from "../../../../../utils/utils";



test.describe("Verify the functionalities of Left Nav  for cms/wind", async () => {
    test("Left Nav CMS/solar", async ({ page }) => {
        await doLogin(page);

        // Click on CMS Icon
        const cms = page.locator('.svg-menu-header').first();
        expect(cms).toBeVisible();
        await cms.click();

        // Click on Wind Tab Sub-Menu
        const wind = page.getByText(/wind/i)
        await expect(wind).toBeVisible();
        await wind.click();

        // Click on Plant  Tab Sub-Menu
        const plant = page.locator('div').filter({ hasText: /^Plant$/ })
        await expect(plant).toBeVisible();
        await plant.click()

        // Click on Plant Dashboard Tab Sub-Menu
        const plantDashboard = page.getByRole('link', { name: /dashboard/i })
        await expect(plantDashboard).toBeVisible();
        await plantDashboard.click();

        // Verify the Plant'S Drop-Down 
        //const dropdownPlant = page.locator('form').getByRole('textbox').
        const dropdownPlant = page.locator('form')
        await expect(dropdownPlant).toBeVisible();
        await dropdownPlant.click();
        const value1 = page.getByText(/panama80mw/i)
        const value2 = page.getByText(/Panama70MW/i)

        // Verify  Date Title and assert it
        const dateTitle = page.locator("div[class='ant-row ng-star-inserted'] div:nth-child(1) span:nth-child(1) p:nth-child(1)");
        await expect(dateTitle).toBeVisible();

        // Verify Time Tile and assert it 
        const timeTitle = page.locator("div[class='bread-col ant-col ant-col-12 ant-col-xs-24'] div:nth-child(2) span:nth-child(1) p:nth-child(1)")
        await expect(timeTitle).toBeVisible();

        // Verify and Select Date from Calender
        //const calender =  await page.getByPlaceholder('Select date').click();
        //await page.getByPlaceholder('Select date').fill('2023-10-09');

        // Alternative Way to Select Date from Calender
        let date = "2023-10-04";
        const calender = await page.locator("input[placeholder = 'Select date']").fill(date)
        await page.pause()


        // Verify and Check Turbine Status Block
        const turbineStatus = page.locator('app-wind-plant-status canvas')
        await turbineStatus.click({ position: { x: 89, y: 104 } });
        await expect(turbineStatus).toBeVisible();

        const windSpeed = page.getByRole('heading', { name: 'Wind speed' })
        await expect(windSpeed).toBeVisible();
        await windSpeed.click();

        const ms = page.getByRole('heading', { name: '0.00 m/s' })
        await expect(ms).toBeVisible()
        await ms.click();

        const activePower = await page.getByRole('heading', { name: 'Active power' })
        await expect(activePower).toBeVisible()
        activePower.click();

        const mw = page.getByRole('heading', { name: '0.00 MW' })
        await expect(mw).toBeVisible();
        await mw.click();



        // Verify and Check Production and Lost Production Block 
        const productionAndLostProduction = page.getByText('Production and Lost Production');
        await expect(productionAndLostProduction).toBeVisible();

        // Verify and Check ExportCSV Button 
        const exportCSV = page.locator('app-production-and-lost app-menu').getByRole('button');
        await expect(exportCSV).toBeVisible();
        await exportCSV.click();

        // Verify and Check Expand Button 
        const expandButton = page.locator('app-production-and-lost app-expand').getByRole('button')
        await expect(expandButton).toBeVisible();
        await expandButton.click();

        // Verify and Check Compress Button 
        const compressButton = page.locator('app-production-and-lost app-menu').getByRole('button')
        await expect(compressButton).toBeVisible();
        await compressButton.click();

        // Verify and Check Data-View  Button 
        const dataView = page.locator('app-production-and-lost canvas')
        await expect(dataView).toBeVisible();
        await dataView.click();


        await page.locator('app-production-and-lost canvas').click({
            position: {
                x: 288,
                y: 9
            }
        });


        await page.locator('app-production-and-lost canvas').click({
            position: {
                x: 287,
                y: 5
            }
        });
        await page.getByText('Close').click();
        await page.locator('app-production-and-lost canvas').click({
            position: {
                x: 288,
                y: 9
            }
        });
        await page.getByText('Refresh').click();

        const refreshButton = page.getByText("body app-root div[id='kpi'] div div div:nth-child(1)")
        await expect(refreshButton).toBeVisible();
        //await refreshButton.click();

        const closeButton = page.getByText("body app-root div[id='kpi'] div div div:nth-child(2)")
        await expect(closeButton).toBeVisible();
        await closeButton.click();

        // Verify and Check Restore Button 
        const restoreButton = page.locator("div[class='ant-col ant-col-xs-24 ant-col-lg-12 ant-col-xl-10'] app-production-and-lost nz-card[class='ant-card half-card ant-card-small'] div[class='ant-card-body'] div[id='kpi'] div canvas")
        await expect(restoreButton).toBeVisible();
        await restoreButton.click();

        // Verify and Check the Save as Image Icon with assert it
        const downloadPromise1 = page.waitForEvent('download');
        //await page.locator('app-production-and-lost canvas').click({
        const download1 = await downloadPromise1;
        await page.locator('app-production-and-lost canvas').click();

        // Click and Verify the Zoom Button
        const zoomButton = page.locator("div[class='ant-col ant-col-xs-24 ant-col-lg-12 ant-col-xl-10'] app-production-and-lost nz-card[class='ant-card half-card ant-card-small'] div[class='ant-card-body'] div[id='kpi'] div canvas");
        await expect(zoomButton).toBeFocused();
        await zoomButton.click();

        // Click and Verify the Zoom-Reset Button
        const zoomResetButton = page.locator("div[class='ant-col ant-col-xs-24 ant-col-lg-12 ant-col-xl-10'] app-production-and-lost nz-card[class='ant-card half-card ant-card-small'] div[class='ant-card-body'] div[id='kpi'] div canvas");
        await expect(zoomResetButton).toBeFocused();
        await zoomResetButton.click();

        // Verify and Check the Bar-Chart with assert it
        const barChart = page.locator("div[class='ant-col ant-col-xs-24 ant-col-lg-12 ant-col-xl-10'] app-production-and-lost nz-card[class='ant-card half-card ant-card-small'] div[class='ant-card-body'] div[id='kpi'] div canvas");
        await expect(barChart).toBeFocused();
        await barChart.click();

        // Verify and Check the Line-Chart with assert it
        const lineChart = page.locator("div[class='ant-col ant-col-xs-24 ant-col-lg-12 ant-col-xl-10'] app-production-and-lost nz-card[class='ant-card half-card ant-card-small'] div[class='ant-card-body'] div[id='kpi'] div canvas");
        await expect(lineChart).toBeFocused();
        await lineChart.click();

        // Check the all functionalities in the  Power vs Potential Power

        const exportCSV2 = page.locator('app-power-vs-potential app-menu').getByRole('button');
        await expect(exportCSV2).toBeVisible();
        await exportCSV2.click();

        const expandButton1 = page.locator('app-power-vs-potential app-expand').getByRole('button');
        await expect(expandButton1).toBeVisible();
        await expandButton1.click();

        const compressButton1 = page.locator('app-power-vs-potential app-expand').getByRole('button');
        await expect(compressButton1).toBeVisible();
        await compressButton1.click();



        const dataView1 = await page.locator('app-power-vs-potential canvas').click({
            position: {
                x: 289,
                y: 14
            }
        });
        const closeButton1 = await page.getByText('Close').click();
        await page.locator('app-power-vs-potential canvas').click({
            position: {
                x: 287,
                y: 10
            }
        });
        const restoreButton1 = await page.getByText('Refresh').click();
        await page.locator('app-power-vs-potential canvas').click({
            position: {
                x: 310,
                y: 10
            }
        });

        const downloadPromise = page.waitForEvent('download');
        await page.locator('app-power-vs-potential canvas').click({
            position: {
                x: 340,
                y: 12
            }
        });
        const download = await downloadPromise;
        await page.locator('app-power-vs-potential canvas').click({
            position: {
                x: 367,
                y: 11
            }
        });

        // Check and Verify the Turbine Grid View
        const DeviationButton = page.locator("div.ant-card-head-wrapper>div.ant-card-extra>nz-space.ant-space >div.ant-space-item>app-info-button")
        await expect(DeviationButton).toBeVisible()
        await DeviationButton.click();

        const toggleMedian = page.locator(".ant-card-head-wrapper>div.ant-card-extra>nz-space.ant-space>div.ant-space-item>app-median-max-switch");
        await expect(toggleMedian).toBeFocused()
        await toggleMedian.click();

        const toggleMax = page.locator(".ant-card-head-wrapper>div.ant-card-extra>nz-space.ant-space>div.ant-space-item>app-median-max-switch>nz-switch.ng-valid");
        await expect(toggleMax).toBeFocused()
        await toggleMax.click();

        const windTurbineDropDown = page.locator(".ant-card-head-wrapper>div.ant-card-extra>nz-space.ant-space>div.ant-space-item>app-wind-turbine-dropdown");
        windTurbineDropDown.selectOption("PLF") // 
        await expect(windTurbineDropDown).toBeFocused()
        await windTurbineDropDown.click();






    });
});