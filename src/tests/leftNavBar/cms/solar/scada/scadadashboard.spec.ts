import { test, expect } from '@playwright/test';
import { doLogin } from '../../../../../utils/utils';
import { routeslist } from '../../../../router.const';
import { getBaseUrl } from '../../../../../../config';


test.describe("SCADA", async () => {
    test("SCADA Module cls ", async ({ page }) => {
        await doLogin(page);
        await page.goto(`${getBaseUrl()}${routeslist.SCADA_DASHBOARD}`);

        const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
      .split('/').reverse().map(part => part.padStart(2, '0')).join('-');
 
    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate)
    await page.keyboard.press('Enter');  
        const powertext =  page.getByRole('heading', { name: 'Power' })
        await expect(powertext).toBeVisible
        await powertext.click();

      const activepowertext = 'Active Power[MW]';
     const activepowertext2 = await page.getByText(activepowertext)
     await expect(activepowertext2).toBeVisible();
      await activepowertext2.click();
  

  // await page.getByText('Active Power[MW]').click();
  const dailyproductiontext =  page.getByText('Daily Production');
  await expect(dailyproductiontext).toBeVisible();
  await dailyproductiontext.click();

  const peakpowertext = page.getByText('Peak Power')
  await expect(peakpowertext).toBeVisible();
  await peakpowertext.click();

  const kpitext = 'KPI'
  const text1 = page.getByRole('heading', { name: (kpitext) })
  await expect(text1).toBeVisible
  await text1.click();
  
  const prtext='PR'
  const prtext2= page.getByText((prtext), { exact: true })
  await expect(prtext2).toBeVisible();
  await prtext2.click();


  const patext ='PA'
  const patext2 = await page.getByText((patext), { exact: true })
  await expect(patext2).toBeVisible();
  await patext2.click();


  const cufactext =  page.getByText('CUFAC')
  await expect(cufactext).toBeVisible
  await cufactext.click();


  const totalghitext =  page.getByText('Total GHI')
  await expect(totalghitext).toBeVisible
  await totalghitext.click();
      
  const totalpoatext = page.getByText('Total POA')
  await expect(totalpoatext).toBeVisible
  await totalpoatext.click();

  const wmstext = 'WMS'
  const wmstext1 = page.getByRole('heading', { name: (wmstext) }).nth(1)
  await expect(wmstext1).toBeVisible();
  await wmstext1.click();

  const moduletemp = page.getByText('Module Temp')
  await expect(moduletemp).toBeVisible
  await moduletemp.click();

  const ambienttemptext =  page.getByText('Ambient Temp')
  await expect(ambienttemptext).toBeVisible();
  await ambienttemptext.click();

  // Forward button 
  const forward = 'i:nth-child(2) > svg'
  const forward1 = await page.locator(forward)
  await expect(forward1).toBeVisible();
  await forward1.click();

  const relativehumiditytext =  page.getByText('Relative Humidity')
  await expect(relativehumiditytext).toBeVisible();
  await relativehumiditytext.click();

  const windspeedtext =  page.getByText('Wind Speed')
  await expect(windspeedtext).toBeVisible();
  await windspeedtext.click();
  
  const backward = 'app-header > i > svg'
  const backward2 = await page.locator(backward).first()
  await expect(backward2).toBeVisible();
  await backward2.click();


        //backword navigation 
        const previous = page.locator('#screencontainer > div > app-scada > div:nth-child(1) > div > app-header > i.anticon.overflow-button.left-button.anticon-left-circle > svg');
        await expect(previous).toBeVisible();
        await previous.click();


        const previous1 = page.locator('#screencontainer > div > app-scada > div:nth-child(1) > div > app-header > i.anticon.overflow-button.left-button.anticon-left-circle > svg');
        await expect(previous1).toBeVisible();
        await previous1.click();

        //Inverter Heat Map 
        await page.locator('nz-select-top-control').filter({ hasText: 'Select Block' }).click();
        await page.getByTitle('IS30').click();
        await page.getByText('IS2').click();
        await page.getByText('IS6').click();
        await page.getByText('IS7').click();
        await page.getByText('IS5').click();
        await page.getByText('IS8').click();
        //Inverter Heat Map  Expand
        await page.locator('app-scada-inverter').getByRole('button').click();
        await page.locator('app-scada-inverter').getByRole('button').click();

        //Inverter Specific Yield
        await page.locator('app-inverter-specific-yield app-menu').getByRole('button').click();
        const downloadPromise0 = page.waitForEvent('download');
        await page.getByText('Export csv').click();
        await downloadPromise0;

        //Inverter Specific Yield Expand
        await page.locator('app-inverter-specific-yield app-expand').getByRole('button').click();
        await page.locator('app-inverter-specific-yield app-expand').getByRole('button').click();

        //WMS Comparison export
        await page.locator('app-wms-chart app-menu').getByRole('button').click();
        const downloadPromise = page.waitForEvent('download');
        await page.getByText('Export csv').click();
        await downloadPromise;

        //WMS Comparison expand
        await page.locator('app-wms-chart app-expand').getByRole('button').click();
        await page.locator('app-wms-chart app-expand').getByRole('button').click();

        //Active Power VS Reactive Power VS Irradiation
        await page.locator('app-yield app-menu').getByRole('button').click();
        const download1Promise = page.waitForEvent('download');
        await page.getByText('Export csv').click();
         await download1Promise;

        //Active Power VS Reactive Power VS Irradiation expand 
        await page.locator('app-yield app-expand').getByRole('button').click();
        await page.locator('app-yield app-expand').getByRole('button').click();

      });
    });
    
        //select plant dropdown
          test("CMS/solar/scadadashboard Plant Dropdowns", async ({ page }) => {
         
        const dropdownSelector: string = 'nz-select-top-control';
  
        const dropdown = await page.$(dropdownSelector);
        
        if (dropdown) {
          
          await dropdown.waitForElementState('visible');
          for (let optionIndex = 0; optionIndex <= 6; optionIndex++) {
            await page.waitForTimeout(1*200)
            await dropdown.click();
            const optionSelector: string = `#cdk-overlay-0 > nz-option-container > div > cdk-virtual-scroll-viewport > div.cdk-virtual-scroll-content-wrapper > nz-option-item:nth-child(${optionIndex + 1})`;
            await page.waitForSelector(optionSelector);
            await page.click(optionSelector);
            
          }
        }

      });

 

