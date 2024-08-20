import { test,expect } from '@playwright/test';
import { doLogin } from '../../../../../../utils/utils';
import { getBaseUrl } from '../../../../../../../config';
import { routeslist } from '../../../../../router.const';


test.describe("MFM ", async () => {
    test("CMS/solar/mfm/header text", async ({ page }) => {

    await doLogin(page);

    await page.goto(`${getBaseUrl()}${routeslist.MFM_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
      .split('/').reverse().map(part => part.padStart(2, '0')).join('-');

 
    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate)
    await page.keyboard.press('Enter');

  // checking the Text and unit 
  const todayexporttext = await page.locator('app-mfm-sub-today').getByRole('heading', { name: 'Today Export' })
await (todayexporttext).click();

const mwhtext = await page.locator('app-mfm-sub-today').getByRole('heading', { name: '[MWh]' }).first()
await (mwhtext).click();

const todayimporttext = await page.locator('app-mfm-sub-today').getByRole('heading', { name: 'Today Import' })
await (todayimporttext).click();

const mwhtext1 = await page.locator('app-mfm-sub-today').getByRole('heading', { name: '[MWh]' }).nth(1)
await (mwhtext1).click();

const weekexporttext = await page.locator('app-mfm-sub-week').getByRole('heading', { name: 'Weekly Export' })
await (weekexporttext).click();

const mwhtext2 =await page.locator('app-mfm-sub-week').getByRole('heading', { name: '[MWh]' }).first()
await (mwhtext2).click();

const weekimporttext  = await page.locator('app-mfm-sub-week').getByRole('heading', { name: 'Weekly Import' })
await (weekimporttext).click();

const mwhtext3 = await page.locator('app-mfm-sub-week').getByRole('heading', { name: '[MWh]' }).nth(1)
await (mwhtext3).click();

const monthlyexporttext = await page.locator('app-mfm-sub-monthly').getByRole('heading', { name: 'Monthly Export' })
await (monthlyexporttext).click();

const mwhtext4 = await page.locator('app-mfm-sub-monthly').getByRole('heading', { name: '[MWh]' }).first()
await (mwhtext4).click();

const monthlyimporttext= await page.locator('app-mfm-sub-monthly').getByRole('heading', { name: 'Monthly Import' })
await (monthlyimporttext).click();

const mwhtext5 = await page.locator('app-mfm-sub-monthly').getByRole('heading', { name: '[MWh]' }).nth(1)
await (mwhtext5).click();

const totalexporttext = await page.locator('app-mfm-sub-total').getByRole('heading', { name: 'Total Export' })
await (totalexporttext).click();

const mwhtext6 = await page.locator('app-mfm-sub-total').getByRole('heading', { name: '[MWh]' }).first()
await (mwhtext6).click();

const totalimporttext = await page.locator('app-mfm-sub-total').getByRole('heading', { name: 'Total Import' })
await (totalimporttext).click();

const mwhtext7 = await page.locator('app-mfm-sub-total').getByRole('heading', { name: '[MWh]' }).nth(1)
await (mwhtext7).click();

    });
});

test.describe("MFM/MCR PQM   ", async () => {
    test("CMS/solar/mfm/MCR PQM text", async ({ page }) => {
     
    await doLogin(page);

    await page.goto(`${getBaseUrl()}${routeslist.MFM_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
      .split('/').reverse().map(part => part.padStart(2, '0')).join('-');

 
    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate)
    await page.keyboard.press('Enter');


//   selecting the MCR POM
  await page.getByRole('tab', { name: 'MCR PQM' }).click();

//   checking the text and unit 
const todayexporttext = await page.locator('app-mfm-sub-today').getByRole('heading', { name: 'Today Export' })
await (todayexporttext).click();

const mwhtext = await page.locator('app-mfm-sub-today').getByRole('heading', { name: '[MWh]' }).first()
await (mwhtext).click();

const todayimporttext = await page.locator('app-mfm-sub-today').getByRole('heading', { name: 'Today Import' })
await (todayimporttext).click();

const mwhtext1 = await page.locator('app-mfm-sub-today').getByRole('heading', { name: '[MWh]' }).nth(1)
await (mwhtext1).click();

const weekexporttext = await page.locator('app-mfm-sub-week').getByRole('heading', { name: 'Weekly Export' })
await (weekexporttext).click();

const mwhtext2 =await page.locator('app-mfm-sub-week').getByRole('heading', { name: '[MWh]' }).first()
await (mwhtext2).click();

const weekimporttext  = await page.locator('app-mfm-sub-week').getByRole('heading', { name: 'Weekly Import' })
await (weekimporttext).click();

const mwhtext3 = await page.locator('app-mfm-sub-week').getByRole('heading', { name: '[MWh]' }).nth(1)
await (mwhtext3).click();

const monthlyexporttext = await page.locator('app-mfm-sub-monthly').getByRole('heading', { name: 'Monthly Export' })
await (monthlyexporttext).click();

const mwhtext4 = await page.locator('app-mfm-sub-monthly').getByRole('heading', { name: '[MWh]' }).first()
await (mwhtext4).click();

const monthlyimporttext= await page.locator('app-mfm-sub-monthly').getByRole('heading', { name: 'Monthly Import' })
await (monthlyimporttext).click();
const mwhtext5 = await page.locator('app-mfm-sub-monthly').getByRole('heading', { name: '[MWh]' }).nth(1)
await (mwhtext5).click();

const totalexporttext = await page.locator('app-mfm-sub-total').getByRole('heading', { name: 'Total Export' })
await (totalexporttext).click();

const mwhtext6 = await page.locator('app-mfm-sub-total').getByRole('heading', { name: '[MWh]' }).first()
await (mwhtext6).click();

const totalimporttext = await page.locator('app-mfm-sub-total').getByRole('heading', { name: 'Total Import' })
await (totalimporttext).click();

const mwhtext7 = await page.locator('app-mfm-sub-total').getByRole('heading', { name: '[MWh]' }).nth(1)
await (mwhtext7).click();

    });
});

test.describe("Verify the functionalities for cms/solar/mfm/MCR chart", async () => {
    test("CMS/solar/mfm/MCR chart", async ({ page }) => {
    await doLogin(page);

    await page.goto(`${getBaseUrl()}${routeslist.MFM_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
      .split('/').reverse().map(part => part.padStart(2, '0')).join('-');

 
    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate)
    await page.keyboard.press('Enter');

    //export for the MCR chart
    await page.getByText('MFM Chart').click();
  await page.locator('app-mfm-graph app-menu').getByRole('button').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByText('Export csv').click();
  await downloadPromise;
  await expect ( page.getByText('mfmgraph Downloaded Successfully')).toBeVisible();
  


    });
});

test.describe("Verify the functionalities for cms/solar/mfm/MCR chart ", async () => {
    test("CMS/solar/mfm/MCR chart for maximize & minimize", async ({ page }) => {
    await doLogin(page);

    await page.goto(`${getBaseUrl()}${routeslist.MFM_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    const formattedPreviousDate: string = previousDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
      .split('/').reverse().map(part => part.padStart(2, '0')).join('-');

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate)
    await page.keyboard.press('Enter');

    // Export for the maximize 
    await page.getByText('MFM Chart').click();
    await page.locator('app-mfm-graph app-expand').getByRole('button').click();
    await page.locator('app-mfm-graph app-menu').getByRole('button').click();
    const download1Promise = page.waitForEvent('download');
    await page.getByText('Export csv').click();
    await download1Promise;
    await expect ( page.getByText('mfmgraph Downloaded Successfully')).toBeVisible();
    // await page.waitForTimeout(5* 100)

    });
});

test.describe("Verify the functionalities for cms/solar/mfm/MCR PQM sorting", async () => {
    test("CMS/solar/mfm/MCR PQM sorting", async ({ page }) => {
    await doLogin(page);

    await page.goto(`${getBaseUrl()}${routeslist.MFM_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
      .split('/').reverse().map(part => part.padStart(2, '0')).join('-');

 
    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate)
    await page.keyboard.press('Enter');

    //checking the sorting all the parameter 
  const datetime =  page.getByText('Date & Time')
  await (datetime).dblclick();

  //sorting for Active Power 
  const activepower =  page.getByText('Active Power (kW)')
  await (activepower).click();

  //sorting for Apparent Power
  const apperentpower =  page.getByText('Apparent Power (kVA)')
  await (apperentpower).click({
    clickCount:3 
  });

  //sorting for B current 
  const bcurrent =  page.getByText('B Current (A)')
  await (bcurrent).dblclick();

  //sorting for B voltage
  const bvoltage =  page.getByText('B Voltage (V)', { exact: true })
  await (bvoltage).dblclick();

  //sorting 
  const brvoltage =  page.getByText('BR Voltage (V)')
  await (brvoltage).dblclick();

  //sorting for Frequency 
  const Frequency =  page.getByText('Frequency (Hz)')
  await (Frequency).dblclick();
  //sorting for Power Factor 
  const powerfactor =  page.getByText('Power Factor (-)')
  await (powerfactor).dblclick();

  // sortig for PQM health status 
  const pqmheatlh = page.getByText('PQM Health status (-)')
  await (pqmheatlh).dblclick();

  //sorting for R current
  const rcurrent =  page.getByText('R Current (A)')
  await (rcurrent).dblclick();

  //sorting for R voltage 
  const rvoltage =  page.getByText('R Voltage (V)', { exact: true })
  await (rvoltage).dblclick();

  //sorting for Reactive power 
  const reactivepower =  page.getByText('Reactive Power (kVAr)')
  await (reactivepower).dblclick();

  //sorting for RY Voltage 
  const ryvoltage =  page.getByText('RY Voltage (V)')
  await (ryvoltage).click();

  //sortning for total active Import 
  const totalactivepower =  page.getByText('Total Active Import (kWh)')
  await (totalactivepower).dblclick
  //sorting for Y Current 
  const ycurrent =  page.getByText('Y Current (A)')
  await (ycurrent).dblclick();

  //sorting for Y Voltage 
  const yvoltage =  page.getByText('Y Voltage (V)', { exact: true })
  await (yvoltage).dblclick();

  //sorting for YB Voltage 
  const ybvoltage =  page.getByText('YB Voltage (V)')
  await (ybvoltage).dblclick();
    })
})



test.describe("Verify the functionalities for cms/solar/mfm Plant Dropdowns", async () => {
  test("CMS/solar/mfm Plant Dropdowns", async ({ page }) => {
 
      await doLogin(page);
      await page.goto(`${getBaseUrl()}${routeslist.MFM_DASHBOARD}`); 

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

});





