import { test, expect } from '@playwright/test';
import { delay, doLogin, generateRandomNumber } from "../../../../../utils/utils";
import { routeslist } from '../../../../router.const'
import { getBaseUrl } from '../../../../../../config';
import { part_Type_Variables, vendor_Type_Variables } from '../../../../../utils/constant';
const part_type_name = `part-type-name-${new Date().getTime()}`;
const new_part_type_name = `new_part_type_name-${new Date().getTime()}`;
const randomValue = generateRandomNumber();
const incrementedValue = (Number(randomValue)+1).toString();
test.describe("Verify the functionalities of PartType Dashboard Page for CMMS", async () => {
  test("Create PartType", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`);

    await page.getByRole("button", { name: part_Type_Variables.operation.create }).click();
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).fill(part_type_name);
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).fill(part_Type_Variables.randomCodePrefix);
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).fill(randomValue);
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).fill(incrementedValue);
    await page.locator(part_Type_Variables.FormDropdownLocator).click();
    await delay(5000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.BatchLocator).click();
    await page.locator(part_Type_Variables.UnitDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.SelectSingleAssetTypeLocator).click();
    await page.locator(part_Type_Variables.SelectAssetTypeNextLocator).click();
    await page.locator(part_Type_Variables.SelectSingleDeviceTypeLocator).click();
    await page.locator(part_Type_Variables.SelectDeviceTypeNextLocator).click();
    await page.getByRole('button', { name: part_Type_Variables.operation.save }).click();
    await expect(page.getByText(part_Type_Variables.CreateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`); 
  });

  test("Testing Alert while creating PartType", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`);

    await page.getByRole("button", { name: part_Type_Variables.operation.create }).click();
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).fill(part_type_name);
    await page.keyboard.press(part_Type_Variables.Select);
    await page.keyboard.press(part_Type_Variables.Delete);
    await expect(page.getByText(part_Type_Variables.NameAlert)).toBeVisible();
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).fill(part_Type_Variables.randomCodePrefix);
    await page.keyboard.press(part_Type_Variables.Select);
    await page.keyboard.press(part_Type_Variables.Delete);
    await expect(page.getByText(part_Type_Variables.CodePrefixAlert)).toBeVisible();
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).fill(incrementedValue);
    await expect(page.getByText(part_Type_Variables.LowerThresholdAlert)).toBeVisible();
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).fill(randomValue);
    await page.locator(part_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.FormCancelSelector).click();
    await expect(page.getByText(part_Type_Variables.FormAlert)).toBeVisible();
    await page.locator(part_Type_Variables.UnitDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.UnitCancelSelector).click()
    await expect(page.getByText(part_Type_Variables.UnitAlert)).toBeVisible();
    await page.getByRole("button", { name: part_Type_Variables.operation.Cancel }).click();
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`);
  });

  test("Edit Part Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`);
    await delay(3000);
    await page.getByText(part_type_name).click();
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).click();
    await delay(3000);
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).fill(new_part_type_name);
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).fill(part_Type_Variables.randomCodePrefix);
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).fill(randomValue);
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).fill(incrementedValue);
    await page.locator(part_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.EditBatchLocator).click();
    await page.locator(part_Type_Variables.UnitDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.SelectAssetTypeLocator).click();
    await page.locator(part_Type_Variables.EditAssetTypeNextLocator).click();
    await page.locator(part_Type_Variables.SelectDeviceTypeLocator).click();
    await page.locator(part_Type_Variables.EditDeviceTypeNextLocator).click();
    await page.getByRole('button', { name: part_Type_Variables.operation.save }).click();
    await expect(page.getByText(part_Type_Variables.UpdateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`); 
  });

  test("Testing Alert while updating Part Type", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`);
    await delay(3000);
    await page.getByText(new_part_type_name).click();
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).fill(new_part_type_name);
    await page.keyboard.press(part_Type_Variables.Select);
    await page.keyboard.press(part_Type_Variables.Delete);
    await expect(page.getByText(part_Type_Variables.NameAlert)).toBeVisible();
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).fill(part_Type_Variables.randomCodePrefix);
    await page.keyboard.press(part_Type_Variables.Select);
    await page.keyboard.press(part_Type_Variables.Delete);
    await expect(page.getByText(part_Type_Variables.CodePrefixAlert)).toBeVisible();
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).click();
    await page.keyboard.press(part_Type_Variables.Select);
    await page.keyboard.press(part_Type_Variables.Delete);
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).fill(incrementedValue);
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).click();
    await page.keyboard.press(part_Type_Variables.Select);
    await page.keyboard.press(part_Type_Variables.Delete);
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).fill(randomValue);
    await page.locator(part_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.EditFormCancelSelector).click();
    await expect(page.getByText(part_Type_Variables.FormAlert)).toBeVisible();
    await page.locator(part_Type_Variables.UnitDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.EditUnitCancelSelector).click()
    await expect(page.getByText(part_Type_Variables.UnitAlert)).toBeVisible();
    await page.getByRole("button", { name: part_Type_Variables.operation.Cancel }).click();
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`);
  });

  test("Validate Part Type Name Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`);

    await page.getByRole("button", { name: part_Type_Variables.operation.create }).click();
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).fill(new_part_type_name);
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).fill(part_Type_Variables.randomCodePrefix);
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).fill(randomValue);
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).fill(incrementedValue);
    await page.locator(part_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.BatchLocator).click();
    await page.locator(part_Type_Variables.UnitDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.SelectSingleAssetTypeLocator).click();
    await page.locator(part_Type_Variables.SelectAssetTypeNextLocator).click();
    await page.locator(part_Type_Variables.SelectSingleDeviceTypeLocator).click();
    await page.locator(part_Type_Variables.SelectDeviceTypeNextLocator).click();
    await page.getByRole('button', { name: part_Type_Variables.operation.save }).click();
    await expect(page.getByText(part_Type_Variables.NameExistAlert +`"${new_part_type_name}"`+ part_Type_Variables.NameExistalert)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`); 
  });

  test("Validate Stock Code Prefix Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`);

    await page.getByRole("button", { name: part_Type_Variables.operation.create }).click();
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.NamePlaceholder).fill(part_type_name);
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.CodePrefixPlaceholder).fill(part_Type_Variables.randomCodePrefix);
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.LowerQuantityThresholdPlaceholder).fill(randomValue);
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).click();
    await page.getByPlaceholder(part_Type_Variables.UpperQuantityThresholdPlaceholder).fill(incrementedValue);
    await page.locator(part_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.BatchLocator).click();
    await page.locator(part_Type_Variables.UnitDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(part_Type_Variables.Enter);
    await page.locator(part_Type_Variables.SelectSingleAssetTypeLocator).click();
    await page.locator(part_Type_Variables.SelectAssetTypeNextLocator).click();
    await page.locator(part_Type_Variables.SelectSingleDeviceTypeLocator).click();
    await page.locator(part_Type_Variables.SelectDeviceTypeNextLocator).click();
    await page.getByRole('button', { name: part_Type_Variables.operation.save }).click();
    await expect(page.getByText(part_Type_Variables.CodePrefixExistAlert +`"${part_Type_Variables.randomCodePrefix}"`+ part_Type_Variables.CodePrefixExistalert)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`); 
  });

  test("Disable PartType", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`);
    await page.getByRole('row', { name: `${new_part_type_name}` }).getByRole('button').nth(1).click()
    await page.getByText(part_Type_Variables.DisableText).click();
    await expect(page.getByText(part_Type_Variables.DisableSuccess)).toBeVisible();
  });

  test("Enable PartType", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.PART_TYPE}`);
    await page.getByRole('row', { name: `${new_part_type_name}` }).getByRole('button').nth(1).click()
    await page.getByText(part_Type_Variables.EnableText).click();
    await expect(page.getByText(part_Type_Variables.EnableSucess)).toBeVisible();
  });
});
