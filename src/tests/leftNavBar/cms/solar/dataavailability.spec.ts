import { test } from '@playwright/test';
import { doLogin } from '../../../../utils/utils';
import { getBaseUrl } from '../../../../../config';
import { routeslist } from '../../../router.const';
// import { delay } from '../../../../utils/utils';
import { Data_Availbality } from '../../../../utils/constant';
    test("Data Availbality Module", async ({ page }) => {
        await doLogin(page);
        
        await page.goto(`${getBaseUrl()}${routeslist.DATA_AVAILIABLITY}`);
        await page.getByText(Data_Availbality.DataAvailbalityDashboard).click();
        await page.locator(Data_Availbality.DataAvailbalityBreadcrumb).click();
        await page.locator(Data_Availbality.DataAvailbalityClose).first().click();

        const targetDate: Date = new Date(); 
        // Calculate the date for the previous month
        const previousMonthDate: Date = new Date(targetDate);
        previousMonthDate.setMonth(targetDate.getMonth() - 1);

        // Format the date for the previous month as "YYYY-MM"
        const formattedDate: string = `${previousMonthDate.getFullYear()}-${(previousMonthDate.getMonth() + 1).toString().padStart(2, '0')}`;

        const datePickerSelector: string = Data_Availbality.DataAvailbalityDatePicker;
        const dateToFill: string = formattedDate; 
        await page.locator(datePickerSelector).click();
        await page.type(`${datePickerSelector} input`, dateToFill);

        await page.getByText(Data_Availbality.TablePlantName).click({
        clickCount: 3
        });
        await page.getByRole('cell', { name: Data_Availbality.TableAvailableData, exact: true }).click();
        await page.getByRole('cell', { name: Data_Availbality.TableNoData }).click();
        await page.getByRole('cell', { name: Data_Availbality.TableAvailable }).click();
        await page.getByRole('cell', { name: Data_Availbality.TableTool }).click();
       
        await page.getByRole('button', { name: Data_Availbality.DataAvailbalityExport }).click();
        
        const input: string = formattedDate;

        // input
        const parsedDate: Date = new Date(input + "-01");
        
        // Format the date as "M-YYYY"
        const DateMessage: string = `${parsedDate.getMonth() + 1}-${parsedDate.getFullYear()}`;
        await page.getByText(`Plant-Availability-report-${DateMessage} Downloaded Successfully`).click();
        
        //  check the view option
        await page.locator(Data_Availbality.ViewOptionLocator).click();
        await page.getByText('Heatmap').click();
        await page.locator(Data_Availbality.ViewDeleteDate).nth(2).click();
        await page.locator(datePickerSelector).click();
        await page.type(`${datePickerSelector} input`, dateToFill);
        await page.getByRole('button', { name: Data_Availbality.DataAvailbalityBackButton }).click();

        // checking the device view 
        await page.locator(Data_Availbality.DeviceViewLocator).click();

        await page.locator(Data_Availbality.DeviceViewClose).first().click();
   const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
    .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    const deviceViewSelector: string = Data_Availbality.DataAvailbalityDatePicker
        const deviceViewdateToFill: string = formattedDate; 
        await page.locator(deviceViewSelector).click();
        await page.type(`${deviceViewSelector} input`, deviceViewdateToFill);
  await page.getByText(Data_Availbality.DeviceNameSort).click({
    clickCount: 3
  });
  await page.getByText(Data_Availbality.DeviceAvailableCount).click({
    clickCount: 3
  });
  await page.getByText(Data_Availbality.DeviceAvailablePercentage).click({
    clickCount: 3
  });
  await page.getByRole('cell', { name: Data_Availbality.TableTool }).click();
  await page.getByRole('button', { name: Data_Availbality.DataAvailbalityExport }).click();
  await page.getByRole('button', { name: Data_Availbality.DataAvailbalityBackButton }).click();
});   