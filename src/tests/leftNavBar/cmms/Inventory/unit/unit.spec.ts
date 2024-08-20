import { test, expect } from '@playwright/test';
import { doLogin } from "../../../../../utils/utils";
import { routeslist } from '../../../../router.const'
import { getBaseUrl } from '../../../../../../config';
import { unitVariables } from '../../../../../utils/constant';
const unitName = `unit-name-${new Date().getTime()}`;
const newUnitName = `new-unit-name-${new Date().getTime()}`;

test.describe("Verify the functionalities of Unit Dashboard Page for CMMS", async () => {
  test("Create Unit", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.UNIT}`);

    await page.getByRole("button", { name: "Add" }).click();
    await page.getByPlaceholder(unitVariables.Placeholder).click();
    await page.getByPlaceholder(unitVariables.Placeholder).fill(unitName);
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.getByText(unitVariables.CreateSuccess)).toBeVisible();
  });

  test("Testing Alert while creating Unit", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.UNIT}`);

    await page.getByRole("button", { name: "Add" }).click();
    await page.getByPlaceholder(unitVariables.Placeholder).click();
    await page.getByPlaceholder(unitVariables.Placeholder).fill(unitName);
    await page.keyboard.press(unitVariables.Select);
    await page.keyboard.press(unitVariables.Delete);
    await expect(page.getByText(unitVariables.Alert)).toBeVisible();
  });

  test('Edit Unit', async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.UNIT}`);
    await page.getByText(unitName).click();
    await page.getByPlaceholder(unitVariables.Placeholder).click();
    await page.getByPlaceholder(unitVariables.Placeholder).fill(newUnitName);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText(unitVariables.UpdateSuccess)).toBeVisible();
  });

  test("Testing Alert while updating Unit", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.UNIT}`);
    await page.getByRole("button", { name: "Add" }).click();
    await page.getByPlaceholder(unitVariables.Placeholder).click();
    await page.getByPlaceholder(unitVariables.Placeholder).fill(newUnitName);
    await page.keyboard.press(unitVariables.Select);
    await page.keyboard.press(unitVariables.Delete);
    await expect(page.getByText(unitVariables.Alert)).toBeVisible();
  });

  test("Validate Unit Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.UNIT}`);
    await page.getByRole("button", { name: "Add" }).click();
    await page.getByPlaceholder(unitVariables.Placeholder).click();
    await page.getByPlaceholder(unitVariables.Placeholder).fill(newUnitName);
    await page.getByRole("button", { name: "Save" }).click();
    await expect(
    page.getByText(`Unit Name - "${newUnitName}" Already Exist`)).toBeVisible();
  });

  test("Delete Unit", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.UNIT}`);
    const deleteButtonSelector = `tr.ant-table-row:has-text("${newUnitName}") button[ nztype="primary"][nzdanger=""]`;

    await page.locator(deleteButtonSelector).click();

    await page.getByRole("button", { name: "OK" }).click();
    await expect(
    page.getByText(unitVariables.DeleteSuccess)).toBeVisible();
  })
});

