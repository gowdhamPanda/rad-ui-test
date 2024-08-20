import { test, expect } from '@playwright/test';
import { doLogin } from "../../../../../utils/utils";
import { routeslist } from '../../../../router.const'
import { getBaseUrl } from '../../../../../../config';
import { jobTagVariables } from '../../../../../utils/constant';
const jobTagName = `job-tag-${new Date().getTime()}`;


test.describe("Verify the functionalities of Job Tag Dashboard Page for CMMS", async () => {
  test("Create Job Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.JOBTAG}`);
    

    await page.getByRole("button", { name: "Add" }).click();
    await page.getByPlaceholder(jobTagVariables.Placeholder).click();
    await page.getByPlaceholder(jobTagVariables.Placeholder).fill(jobTagName);
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.getByText(jobTagVariables.CreateSuccess)).toBeVisible();
  });

  test("Testing Alert while Craeting Job Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.JOBTAG}`);
    

    await page.getByRole("button", { name: "Add" }).click();
    await page.getByPlaceholder(jobTagVariables.Placeholder).click();
    await page.getByPlaceholder(jobTagVariables.Placeholder).fill(jobTagName);
    await page.keyboard.press(jobTagVariables.Select);
    await page.keyboard.press(jobTagVariables.Delete);
    await expect(page.getByText(jobTagVariables.Alert)).toBeVisible();
  });

  test("Validate Job tag Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.JOBTAG}`);

    await page.getByRole("button", { name: "Add" }).click();
    await page.getByPlaceholder(jobTagVariables.Placeholder).click();
    await page.getByPlaceholder(jobTagVariables.Placeholder).fill(jobTagName);
    await page.getByRole("button", { name: "Save" }).click();
    await expect(
      page.getByText(`Job Tag "${jobTagName}" already exists.`)
    ).toBeVisible();
  });

  test("Delete Job Tag", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.JOBTAG}`);
    const deleteButtonSelector = `tr.ant-table-row:has-text("${jobTagName}") button[ nztype="primary"][nzdanger=""]`;

    await page.locator(deleteButtonSelector).click();

    await page.getByRole("button", { name: "OK" }).click();
    await expect(
      page.getByText(jobTagVariables.DeleteSuccess)
    ).toBeVisible();
  });
});
