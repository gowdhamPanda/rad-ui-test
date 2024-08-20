import { test, expect } from '@playwright/test';
import { delay, doLogin } from "../../../../../utils/utils";
import { routeslist } from '../../../../router.const'
import { getBaseUrl } from '../../../../../../config';
import { storage_Location_Variables } from '../../../../../utils/constant';
const storage_location_name = `storage_location-type-name-${new Date().getTime()}`;
const new_storage_location_name = `new-storage_location-name-${new Date().getTime()}`;
test.describe("Verify the functionalities of StorageLocation Dashboard Page for CMMS", async () => {
  test("Create StorageLocation", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`);

    await page.getByRole("button", { name: storage_Location_Variables.operation.create }).click();
    await page.locator(storage_Location_Variables.StoreDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(storage_Location_Variables.Enter);
    await page.getByPlaceholder(storage_Location_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(storage_Location_Variables.NamePlaceholder).fill(storage_location_name);
    await page.getByRole('button', { name: storage_Location_Variables.operation.save }).click();
    await expect(page.getByText(storage_Location_Variables.CreateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`); 
  });

  test("Testing Alert while creating StorageLocation", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`);

    await page.getByRole("button", { name: storage_Location_Variables.operation.create }).click();
    await page.locator(storage_Location_Variables.StoreDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(storage_Location_Variables.Enter);
    await page.locator(storage_Location_Variables.StoreCancelLocator).click();
    await delay(3000);
    await expect(page.getByText(storage_Location_Variables.StoreAlert)).toBeVisible();
    await page.getByPlaceholder(storage_Location_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(storage_Location_Variables.NamePlaceholder).fill(storage_location_name);
    await page.keyboard.press(storage_Location_Variables.Select);
    await page.keyboard.press(storage_Location_Variables.Delete);
    await delay(3000);
    await expect(page.getByText(storage_Location_Variables.NameAlert)).toBeVisible();
    await page.getByRole("button", { name: storage_Location_Variables.operation.Cancel }).click();
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`);
  });

  test("Edit StorageLocation", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`);
    await delay(3000);
    await page.getByText(storage_location_name).click();
    await page.getByPlaceholder(storage_Location_Variables.NamePlaceholder).click();
    await delay(3000);
    await page.getByPlaceholder(storage_Location_Variables.NamePlaceholder).fill(new_storage_location_name);
    await page.getByRole('button', { name: storage_Location_Variables.operation.save }).click();
    await expect(page.getByText(storage_Location_Variables.UpdateSuccess)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`); 
  });

  test("Testing Alert while updating StorageLocation", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`);
    await delay(3000);
    await page.getByText(new_storage_location_name).click();
    await delay(3000);
    await page.getByPlaceholder(storage_Location_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(storage_Location_Variables.NamePlaceholder).fill(new_storage_location_name);
    await page.keyboard.press(storage_Location_Variables.Select);
    await page.keyboard.press(storage_Location_Variables.Delete);
    await delay(3000);
    await expect(page.getByText(storage_Location_Variables.NameAlert)).toBeVisible();
    await page.getByRole("button", { name: storage_Location_Variables.operation.Cancel }).click();
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`);
  });

  test("Validate Storage Location name Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`);
    await page.getByRole("button", { name: storage_Location_Variables.operation.create }).click();
    await page.locator(storage_Location_Variables.StoreDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(storage_Location_Variables.Enter);
    await page.getByPlaceholder(storage_Location_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(storage_Location_Variables.NamePlaceholder).fill(new_storage_location_name);
    await page.getByRole('button', { name: storage_Location_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(storage_Location_Variables.NameExistValidation)).toBeVisible();
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`); 
  }); 

  test("Disable StorageLocation", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`);
    await page.getByRole('row', { name: `${new_storage_location_name}` }).getByRole('button').nth(1).click()
    await page.getByText(storage_Location_Variables.DisableText).click();
    await expect(page.getByText(storage_Location_Variables.DisableSuccess)).toBeVisible();
  });

  test("Enable StorageLocation", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.STORAGE_LOCATION}`);
    await page.getByRole('row', { name: `${new_storage_location_name}` }).getByRole('button').nth(1).click()
    await page.getByText(storage_Location_Variables.EnableText).click();
    await expect(page.getByText(storage_Location_Variables.EnableSucess)).toBeVisible();
  });


});