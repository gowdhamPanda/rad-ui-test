import { test } from '@playwright/test';
import { delay, doLogin, generateRandomNumberString } from "../../../../../utils/utils"
import { getBaseUrl } from '../../../../../../config';
import { routeslist } from '../../../../router.const';
import { Alert_Currentweek, Device } from '../../../../../utils/constant';

  test("Left Nav CMS/solar/alert/currentweek/Filter check and uncheck", async ({ page }) => {
      await doLogin(page);
      await page.goto(`${getBaseUrl()}${routeslist.SOLAR_ALERT_WEEK_DASHBOARD}`);

      // checking the de-selct description 
  await page.getByLabel('', { exact: true }).check();
  await page.getByLabel('', { exact: true }).uncheck();

    // checking the description Search
  await page.getByRole('cell', { name: Alert_Currentweek.AlertDescription }).locator(Alert_Currentweek.AlertDescriptionLocator).click();
  await page.getByPlaceholder(Alert_Currentweek.AlertSearchDescription).click();
  await page.getByPlaceholder(Alert_Currentweek.AlertSearchDescription).fill(generateRandomNumberString(3));
  await page.getByRole('button', { name: Alert_Currentweek.AlertSearch }).click();

// checking the de-select Plant name 
  await page.getByRole('cell', { name: Alert_Currentweek.AlertPlant }).locator('svg').click();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName01 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName02 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName03 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName04 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName05 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName06 }).getByLabel('').check();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
  await page.getByRole('cell', { name: Alert_Currentweek.AlertPlant }).locator('span').nth(1).click();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName01 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName02 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName03 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName04 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName05 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName06 }).getByLabel('').uncheck();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

// checking the de-select Block name 
  await page.getByRole('cell', { name: Alert_Currentweek.AlertBlock }).locator('span').nth(1).click();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName01 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName02 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName03 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName04 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName05 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName06 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName07 }).getByLabel('').check();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
  await page.getByRole('cell', { name: Alert_Currentweek.AlertBlock }).locator('span').nth(1).click();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName01 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName02 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName03 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName04 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName05 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName06 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName07 }).getByLabel('').uncheck();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

// checking the Device name Search
  await page.getByRole('cell', { name: Alert_Currentweek.AlertDevice }).locator('svg').click();
  await page.getByPlaceholder(Alert_Currentweek.AlertSearchDevice).click();
  await page.getByPlaceholder(Alert_Currentweek.AlertSearchDevice).press('CapsLock');
  await page.getByPlaceholder(Alert_Currentweek.AlertSearchDevice).fill(generateRandomNumberString(3));
  await page.getByRole('button', { name: Alert_Currentweek.AlertSearch }).click();

// checking the de-select status
  await page.getByRole('cell', { name: Alert_Currentweek.AlertStatus }).locator(Alert_Currentweek.StatusLocator).click();
  await page.locator(Alert_Currentweek.AlertLocator).filter({ hasText: Alert_Currentweek.AlertStatusOn }).getByLabel('').check();
  await page.locator(Alert_Currentweek.AlertLocator).filter({ hasText: Alert_Currentweek.AlertStatusOff }).getByLabel('').check();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
  await page.getByRole('cell', { name: Alert_Currentweek.AlertStatus }).locator(Alert_Currentweek.StatusLocator).click();
  await page.locator(Alert_Currentweek.AlertLocator).filter({ hasText: Alert_Currentweek.AlertStatusOn }).getByLabel('').uncheck();
  await page.locator(Alert_Currentweek.AlertLocator).filter({ hasText: Alert_Currentweek.AlertStatusOff }).getByLabel('').uncheck();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

  // checking the Active At, Inactive At, and Duration
  await page.getByText(Alert_Currentweek.Alertactive, { exact: true }).click();
  await page.getByText(Alert_Currentweek.AlertInactive).click();
  await page.getByRole('cell', { name: Alert_Currentweek.AlertDuration }).click();

  // checking the Severity
  await page.getByRole('cell', { name: Alert_Currentweek.AlertSeverity }).locator('span').nth(1).click();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox01 }).locator('label').click();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox02 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox03 }).getByLabel('').check();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox04 }).getByLabel('').check();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
  await page.getByRole('cell', { name: Alert_Currentweek.AlertSeverity }).locator('span').nth(1).click();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox01 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox02 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox03 }).getByLabel('').uncheck();
  await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox04 }).getByLabel('').uncheck();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

  // checking the Acknowledged
  await page.getByText(Alert_Currentweek.AlertAcknowledge, { exact: true }).click();

  // checking the Acknowledge
  await page.getByRole('cell', { name: Alert_Currentweek.AlertAcknowledge, exact: true }).locator('span').nth(1).click();
  await page.locator(Alert_Currentweek.AlertLocator).filter({ hasText: Alert_Currentweek.AlertAcknowledge01 }).getByLabel('').check();
  await page.locator(Alert_Currentweek.AlertLocator).filter({ hasText: Alert_Currentweek.AlertUnAcknowledged }).getByLabel('').check();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
  await page.getByRole('cell', { name: Alert_Currentweek.AlertAcknowledge, exact: true }).locator('span').nth(1).click();
  await page.locator(Alert_Currentweek.AlertLocator).filter({ hasText: Alert_Currentweek.AlertAcknowledge01 }).getByLabel('').uncheck();
  await page.locator(Alert_Currentweek.AlertLocator).filter({ hasText: Alert_Currentweek.AlertUnAcknowledged }).getByLabel('').uncheck();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

  // checking the acknowledge calendar
  const currentDate: Date = new Date();
  currentDate.setHours(0, 0, 0, 0); 
  const formattedCurrentDate: string = currentDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
  .split('/').reverse().map(part => part.padStart(2, '0')).join('-') + ' 00:00';
  
  const previousDate: Date = new Date(currentDate);
  previousDate.setDate(currentDate.getDate() - 1);
  previousDate.setHours(0, 0, 0, 0); 
  
  const formattedPreviousDate: string = previousDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
  .split('/').reverse().map(part => part.padStart(2, '0')).join('-') + ' 00:00';
  
  await page.getByRole('cell', { name: Alert_Currentweek.AlertAcknowledgedAt }).locator(Alert_Currentweek.AlertAcknowledgedAtLocator).click();
  await page.getByPlaceholder(Alert_Currentweek.AlertStartDate).fill(formattedPreviousDate);
  await page.getByPlaceholder(Alert_Currentweek.AlertEndDate).fill(formattedCurrentDate);
  await page.getByPlaceholder(Alert_Currentweek.AlertStartDate).fill(formattedPreviousDate);
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
  
  // checking the Acknowledged By
  await page.getByRole('cell', { name: Alert_Currentweek.AlertAcknowledgedBy }).locator(Alert_Currentweek.AlertAcknowledgedByLocator).nth(1).click();
  await page.locator(Alert_Currentweek.AlertLocator).filter({ hasText: Alert_Currentweek.AlertAcknowledgedByCheckBox }).getByLabel('').check();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
  await page.getByRole('cell', { name: Alert_Currentweek.AlertTool }).click();
  
  });

  test("Left Nav CMS/solar/alert/currentweek/Reset", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.SOLAR_ALERT_WEEK_DASHBOARD}`);

    // checking the description check box 
await page.getByLabel('', { exact: true }).check();

// Checking the description
await page.getByRole('cell', { name: Alert_Currentweek.AlertDescription }).locator(Alert_Currentweek.AlertDescriptionLocator).click();
await page.getByPlaceholder(Alert_Currentweek.AlertSearchDescription).click();
await page.getByPlaceholder(Alert_Currentweek.AlertSearchDescription).fill(generateRandomNumberString(3));
await page.getByRole('button', { name: Alert_Currentweek.AlertSearch }).click();

// checking the Plant name 
await page.getByRole('cell', { name: Alert_Currentweek.AlertPlant }).locator('svg').click();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName01 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName02 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName03 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName04 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName05 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertPlantName06 }).getByLabel('').check();
await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

// checking the Block name
await page.getByRole('cell', { name: Alert_Currentweek.AlertBlock }).locator('span').nth(1).click();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName01 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName02 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName03 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName04 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName05 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName06 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertBlockName07 }).getByLabel('').check();
await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

// checking the Device name 
await page.getByRole('cell', { name: Alert_Currentweek.AlertDevice }).locator('svg').click();
await page.getByPlaceholder(Alert_Currentweek.AlertSearchDevice).click();
await page.getByPlaceholder(Alert_Currentweek.AlertSearchDevice).press('CapsLock');
await page.getByPlaceholder(Alert_Currentweek.AlertSearchDevice).fill(generateRandomNumberString(3));
await page.getByRole('button', { name: Alert_Currentweek.AlertSearch }).click();

// checking the status checkbox
await page.getByRole('cell', { name: Alert_Currentweek.AlertStatus }).locator(Alert_Currentweek.StatusLocator).click();
await page.locator(Alert_Currentweek.AlertLocator).filter({ hasText: Alert_Currentweek.AlertStatusOn }).getByLabel('').check();
await page.locator(Alert_Currentweek.AlertLocator).filter({ hasText: Alert_Currentweek.AlertStatusOff }).getByLabel('').check();
await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

// checking the Active At, Inactive At and Duration 
await page.getByText(Alert_Currentweek.Alertactive, { exact: true }).click();
await page.getByText(Alert_Currentweek.AlertInactive).click();
await page.getByRole('cell', { name: Alert_Currentweek.AlertDuration }).click();

// checking the Severity
await page.getByRole('cell', { name: Alert_Currentweek.AlertSeverity }).locator('span').nth(1).click();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox01 }).locator('label').click();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox02 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox03 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertSeverityCheckBox04 }).getByLabel('').check();
await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

// check the acknowledge text
await page.getByText(Alert_Currentweek.AlertAcknowledge, { exact: true }).click();

// checking the Acknowledge checkbox 
await page.getByRole('cell', { name: Alert_Currentweek.AlertAcknowledge, exact: true }).locator('span').nth(1).click();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertAcknowledge01 }).getByLabel('').check();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertUnAcknowledged }).getByLabel('').check();
await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

// checking the acknowledge At calendar
const currentDate: Date = new Date();
currentDate.setHours(0, 0, 0, 0); 
const formattedCurrentDate: string = currentDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
.split('/').reverse().map(part => part.padStart(2, '0')).join('-') + ' 00:00';

const previousDate: Date = new Date(currentDate);
previousDate.setDate(currentDate.getDate() - 1);
previousDate.setHours(0, 0, 0, 0); 

const formattedPreviousDate: string = previousDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
.split('/').reverse().map(part => part.padStart(2, '0')).join('-') + ' 00:00';

await page.getByRole('cell', { name: Alert_Currentweek.AlertAcknowledgedAt }).locator(Alert_Currentweek.AlertAcknowledgedAtLocator).click();
await page.getByPlaceholder(Alert_Currentweek.AlertStartDate).fill(formattedPreviousDate);
await page.getByPlaceholder(Alert_Currentweek.AlertEndDate).fill(formattedCurrentDate);
await page.getByPlaceholder(Alert_Currentweek.AlertStartDate).fill(formattedPreviousDate);
await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

// checking the acknowledge By check box
await page.getByRole('cell', { name: Alert_Currentweek.AlertAcknowledgedBy }).locator(Alert_Currentweek.AlertAcknowledgedByLocator).nth(1).click();
await page.locator('li').filter({ hasText: Alert_Currentweek.AlertAcknowledgedByCheckBox }).getByLabel('').check();
await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
await page.getByRole('cell', { name: Alert_Currentweek.AlertTool }).click();

// checking the Reload
await page.getByRole('button', { name: Alert_Currentweek.AlertReload }).click();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

  // checking the Export
  await page.getByRole('button', { name: Alert_Currentweek.AlertExport }).click();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

  // checking the reset
await page.getByRole('button', { name: Alert_Currentweek.AlertReset }).click();
await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();

// checking the acknowledge remark
await page.getByRole('button', { name: Alert_Currentweek.AlertAcknowledgedButton }).click();
await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
await page.getByPlaceholder(Alert_Currentweek.AlertRemark).click();
await page.getByPlaceholder(Alert_Currentweek.AlertRemark).fill(Device.RemarkText);
await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
await page.getByText(Alert_Currentweek.successfullMessage).click();

// Negative scenario checking the acknowledge remark
  await page.getByRole('button', { name: Alert_Currentweek.AlertAcknowledgedButton }).click();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
  await page.getByText(Alert_Currentweek.AlertAcknowledgeRemark).click();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
   await delay(4000)
   await page.screenshot({ path:'screenshots/'+Date.now()+'Acknowledge remark Error.png',fullPage:true})
  await page.getByText(Alert_Currentweek.RemarkErrorMessage).click();

});

test("Left Nav CMS/solar/alert/currentweek/creating a notification", async ({ page }) => {
  await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.Device}`);
   
  await page.getByRole('row', { name: Device.DeviceParameterButton }).getByRole('button').first().click();
  await page.getByRole('button', { name: Device.DeviceNotificationButton }).first().click();
  await page.getByRole('button', { name: Device.DeviceAddNotification }).click();
  await page.getByPlaceholder(Device.DeviceNoificationPlaceholder).fill(Device.NotificationDisplayName);
  await page.locator(Device.NotificationLocator).filter({ hasText: Device.NotificationTypeDropdown }).getByRole('textbox').click();
  await page.getByText(Device.DropdownOption).click();
  await page.locator(Device.NotificationLocator).filter({ hasText: Device.NotificationComparison }).getByRole('textbox').click();
  await page.getByText(Device.DropdownOption01, { exact: true }).click();
  await page.locator(Device.NotificationLocator).filter({ hasText: Device.NotificationSeverity }).getByRole('textbox').click();
  await page.getByText(Device.DropdownOption02).click();
  await page.getByPlaceholder(Device.NotificationDisplayPlaceholder).click();
  await page.getByPlaceholder(Device.NotificationDisplayPlaceholder).fill(Device.NotificationName);
  await page.getByRole('button', { name: Device.SaveOption }).click();
  await page.getByText(Device.NotificationMessage).click();

});

test("Left Nav CMS/solar/alert/currentweek/Negative scenario/Re-creating a notification with same name", async ({ page }) => {
  await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.Device}`);
   
     await page.getByRole('row', { name: Device.DeviceParameterButton }).getByRole('button').first().click();
  await page.getByRole('button', { name: Device.DeviceNotificationButton }).first().click();
  await page.getByRole('button', { name: Device.DeviceAddNotification }).click();
  await page.getByPlaceholder(Device.DeviceNoificationPlaceholder).fill(Device.NotificationDisplayName);
  await page.locator(Device.NotificationLocator).filter({ hasText: Device.NotificationTypeDropdown }).getByRole('textbox').click();
  await page.getByText(Device.DropdownOption).click();
  await page.locator(Device.NotificationLocator).filter({ hasText: Device.NotificationComparison }).getByRole('textbox').click();
  await page.getByText(Device.DropdownOption01, { exact: true }).click();
  await page.locator(Device.NotificationLocator).filter({ hasText: Device.NotificationSeverity }).getByRole('textbox').click();
  await page.getByText(Device.DropdownOption02).click();
  await page.getByPlaceholder(Device.NotificationDisplayPlaceholder).click();
  await page.getByPlaceholder(Device.NotificationDisplayPlaceholder).fill(Device.NotificationName);
  await page.getByRole('button', { name: Device.SaveOption }).click();
    await delay(3000)
    await page.screenshot({ path:'screenshots/'+Date.now()+'Same Notification Name.png',fullPage:true})
    await page.getByText(Device.ErrorMessage).click();

});


test("Left Nav CMS/solar/alert/currentweek/alert log for current week", async ({ page }) => {

  await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.SOLAR_ALERT_WEEK_DASHBOARD}`);

  await page.getByRole('button', { name: Alert_Currentweek.AlertAdd }).click();
  await page.getByText(Alert_Currentweek.AlertAdd01).click();
  await page.locator(Alert_Currentweek.AlertDropDownSelector).filter({ hasText: Alert_Currentweek.AlertAddPlantName }).getByRole('textbox').click();
  await page.getByText(Alert_Currentweek.AlertAddPlantOption).click();
  await page.locator(Alert_Currentweek.AlertDropDownSelector).filter({ hasText: Alert_Currentweek.AlertAddBlockName }).getByRole('textbox').click();
  await page.getByText(Alert_Currentweek.AlertAddBlockOption).click();
  await page.locator(Alert_Currentweek.AlertDropDownSelector).filter({ hasText: Alert_Currentweek.AlertAddDeviceName }).getByRole('textbox').click();
  await page.getByText(Alert_Currentweek.AlertAddDeviceOption).click();
  await page.locator(Alert_Currentweek.AlertDropDownSelector).filter({ hasText: Alert_Currentweek.AlertAddParameterName }).getByRole('textbox').click();
  await page.getByText(Alert_Currentweek.AlertAddParameterOption).first().click();
  await page.locator(Alert_Currentweek.AlertDropDownSelector).filter({ hasText: Alert_Currentweek.AlertAddNotifictionName }).getByRole('textbox').click();
  await page.getByTitle(Alert_Currentweek.AlertAddNotificationOption).click();
  await page.locator(Alert_Currentweek.AlertStartDateLocator).filter({ hasText: Alert_Currentweek.AlertaddStartDate }).getByPlaceholder('Select Date').click();
  await delay(2000)
  await page.getByText(Alert_Currentweek.AlertCalendarButton, { exact: true }).click();
  await page.getByText(Alert_Currentweek.AlertCalendarButton, { exact: true }).hover();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK, exact: true }).click();
  await page.getByRole('button', { name: Alert_Currentweek.AlertSaveOption }).click();
  await page.getByText(Alert_Currentweek.ALertAddSuccessfullMessage).click();
});

  test("Left Nav CMS/solar/alert/currentweek/Re-creating alert log for current week", async ({ page }) => {
    await doLogin(page);
      await page.goto(`${getBaseUrl()}${routeslist.SOLAR_ALERT_WEEK_DASHBOARD}`);
//  re-creating the Alert 
await page.getByRole('button', { name: Alert_Currentweek.AlertAdd }).click();
  await page.getByText(Alert_Currentweek.AlertAdd01).click();
  await page.locator(Alert_Currentweek.AlertDropDownSelector).filter({ hasText: Alert_Currentweek.AlertAddPlantName }).getByRole('textbox').click();
  await page.getByText(Alert_Currentweek.AlertAddPlantOption).click();
  await page.locator(Alert_Currentweek.AlertDropDownSelector).filter({ hasText: Alert_Currentweek.AlertAddBlockName }).getByRole('textbox').click();
  await page.getByText(Alert_Currentweek.AlertAddBlockOption).click();
  await page.locator(Alert_Currentweek.AlertDropDownSelector).filter({ hasText: Alert_Currentweek.AlertAddDeviceName }).getByRole('textbox').click();
  await page.getByText(Alert_Currentweek.AlertAddDeviceOption).click();
  await page.locator(Alert_Currentweek.AlertDropDownSelector).filter({ hasText: Alert_Currentweek.AlertAddParameterName }).getByRole('textbox').click();
  await page.getByText(Alert_Currentweek.AlertAddParameterOption).first().click();
  await page.locator(Alert_Currentweek.AlertDropDownSelector).filter({ hasText: Alert_Currentweek.AlertAddNotifictionName }).getByRole('textbox').click();
  await page.getByTitle(Alert_Currentweek.AlertAddNotificationOption).click();
  await page.locator(Alert_Currentweek.AlertStartDateLocator).filter({ hasText: Alert_Currentweek.AlertaddStartDate }).getByPlaceholder('Select Date').click();
  await delay(2000)
  await page.getByText(Alert_Currentweek.AlertCalendarButton, { exact: true }).click();
  await page.getByText(Alert_Currentweek.AlertCalendarButton, { exact: true }).hover();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK, exact: true }).click();
  await page.getByRole('button', { name: Alert_Currentweek.AlertSaveOption }).click();
await delay(3000)
await page.screenshot({ path:'screenshots/'+Date.now()+'alert is already exist.png',fullPage:true})
await page.getByText(Alert_Currentweek.AlertAddErrorMessage).click();

})

test("Left Nav CMS/solar/alert/currentweek/delete alert log for current week", async ({ page }) => {
  await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.SOLAR_ALERT_WEEK_DASHBOARD}`);
  await page.getByText(Alert_Currentweek.AlertAddStatus).click();
  await page.getByRole('button', { name: Alert_Currentweek.AlertAddStatusEdit }).click();
  await page.locator(Alert_Currentweek.AlertDatePicker).click();
  await page.getByText('Now', { exact: true }).click();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
  await page.getByRole('button', { name: Alert_Currentweek.AlertSaveOption }).click();
  await page.getByText(Alert_Currentweek.ALertAddSuccessfullMessage).click();
  await page.getByText(Alert_Currentweek.AlertAddStatus).click();
  await page.getByRole('button', { name: (Alert_Currentweek.AlertAddStatusDeleted) }).click();
  await page.getByRole('button', { name: Alert_Currentweek.AlertOK }).click();
  await page.getByText(Alert_Currentweek.ALertAddSuccessfullMessage).click();

});

test("Left Nav CMS/solar/alert/currentweek/delete the Notification", async ({ page }) => {
  await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.Device}`);
  await page.getByRole('row', { name: Device.DeviceParameterButton }).getByRole('button').first().click();
  await page.getByRole('button', { name: Device.DeviceNotificationButton }).first().click();
  await page.getByRole('row', { name: Device.DeviceDeleteButton }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: Device.DeviceOkButton }).click();
  await page.getByText(Device.DeletedSuccessfully).click();

});