import { test, expect } from '@playwright/test';
import { delay, doLogin, generateRandomNumberString, generateRandomString } from "../../../../../utils/utils";
import { routeslist } from '../../../../router.const'
import { getBaseUrl } from '../../../../../../config';
import { vendor_Type_Variables } from '../../../../../utils/constant';
const vendor_type_name = `vendor-type-name-${new Date().getTime()}`;
const new_Vendor_type_name = `new-vendor-type-name-${new Date().getTime()}`;
test.describe("Verify the functionalities of VendorType Dashboard Page for CMMS", async () => {
  test("Create VendorType", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`);

    await page.getByRole("button", { name: vendor_Type_Variables.operation.create }).click();
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).fill(vendor_type_name);
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).fill(vendor_Type_Variables.randomCodePrefix);
    await page.locator(vendor_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(vendor_Type_Variables.Enter);
    await page.getByRole('button', { name: vendor_Type_Variables.operation.save }).click();
    await expect(page.getByText(vendor_Type_Variables.CreateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`); 
  });

  test("Testing Alert while creating VendorType", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`);

    await page.getByRole("button", { name: vendor_Type_Variables.operation.create }).click();
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).fill(vendor_type_name);
    await page.keyboard.press(vendor_Type_Variables.Select);
    await page.keyboard.press(vendor_Type_Variables.Delete);
    await expect(page.getByText(vendor_Type_Variables.NameAlert)).toBeVisible();
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).fill(generateRandomString(3));
    await expect(page.getByText(vendor_Type_Variables.CodePrefixSizeAlert)).toBeVisible();
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).fill(generateRandomString(5));
    await page.keyboard.press(vendor_Type_Variables.Select);
    await page.keyboard.press(vendor_Type_Variables.Delete);
    await expect(page.getByText(vendor_Type_Variables.CodePrefixAlert)).toBeVisible();
    await page.locator(vendor_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(vendor_Type_Variables.Enter);
    await page.locator(vendor_Type_Variables.FormCancelSelector).click();
    await delay(3000);
    await expect(page.getByText(vendor_Type_Variables.FormAlert)).toBeVisible();
    await page.getByRole("button", { name: vendor_Type_Variables.operation.Cancel }).click();
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`);
  });

  test("Edit VendorType", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`);
    await delay(3000);
    await page.getByText(vendor_type_name).click();
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).click();
    await delay(3000);
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).fill(new_Vendor_type_name);
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).click();
    await page.keyboard.press(vendor_Type_Variables.Select);
    await page.keyboard.press(vendor_Type_Variables.Delete);
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).fill(vendor_Type_Variables.randomCodePrefix);
    await page.locator(vendor_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(vendor_Type_Variables.Enter);
    await page.getByRole('button', { name: vendor_Type_Variables.operation.save }).click();
    await expect(page.getByText(vendor_Type_Variables.UpdateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`); 
  });

  test("Testing Alert while updating VendorType", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`);
    await delay(3000);
    await page.getByText(new_Vendor_type_name).click();
    await delay(3000);
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).fill(new_Vendor_type_name);
    await page.keyboard.press(vendor_Type_Variables.Select);
    await page.keyboard.press(vendor_Type_Variables.Delete);
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).fill(generateRandomString(3));
    await expect(page.getByText(vendor_Type_Variables.CodePrefixSizeAlert)).toBeVisible();
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).fill(generateRandomString(3));
    await page.keyboard.press(vendor_Type_Variables.Select);
    await page.keyboard.press(vendor_Type_Variables.Delete);
    await expect(page.getByText(vendor_Type_Variables.CodePrefixAlert)).toBeVisible();
    await page.locator(vendor_Type_Variables.FormDropdownLocator).click();
    await page.keyboard.press(vendor_Type_Variables.Enter);
    await delay(3000);
    await page.locator(vendor_Type_Variables.FormEditCancelSelector).click();
    await delay(3000);
    await expect(page.getByText(vendor_Type_Variables.FormAlert)).toBeVisible();
    await page.getByRole("button", { name: vendor_Type_Variables.operation.Cancel }).click();
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`);
  });

  test("Validate VendorTypeName Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`);
    await delay(3000);
    await page.getByRole("button", { name: vendor_Type_Variables.operation.create }).click();
    await delay(3000);
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).fill(new_Vendor_type_name);
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).fill(vendor_Type_Variables.randomCodePrefix);
    await page.locator(vendor_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(vendor_Type_Variables.Enter);
    await page.getByRole('button', { name: vendor_Type_Variables.operation.save }).click();
    await expect(page.getByText(vendor_Type_Variables.NameExistAlert +`"${new_Vendor_type_name}"`+ vendor_Type_Variables.NameExistalert)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`); 
  }); 
  test("Validate VendorCodePrefix Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`);

    await page.getByRole("button", { name: vendor_Type_Variables.operation.create }).click();
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.NamePlaceholder).fill(vendor_type_name);
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).click();
    await page.getByPlaceholder(vendor_Type_Variables.CodePrefixPlaceholder).fill(vendor_Type_Variables.randomCodePrefix);
    await page.locator(vendor_Type_Variables.FormDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(vendor_Type_Variables.Enter);
    await page.getByRole('button', { name: vendor_Type_Variables.operation.save }).click();
    await expect(page.getByText(vendor_Type_Variables.CodePrefixExistAlert +`"${vendor_Type_Variables.randomCodePrefix}"`+ vendor_Type_Variables.CodePrefixExistalert)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.VENDOR_TYPE}`); 
  });
});