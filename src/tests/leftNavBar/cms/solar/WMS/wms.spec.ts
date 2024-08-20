import { test, expect } from "@playwright/test";
import { doLogin } from "../../../../../utils/utils";
import { routeslist } from "../../../../router.const";
import { getBaseUrl } from "../../../../../../config";
import { wmsVariables } from "../../../../../utils/constant";

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/Median WMS", async () => {
  test("Left Nav solar/WMS", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
    .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //selct POA Field
    await page.locator("app-wms-poa").getByText(wmsVariables.wmsHeaderText).click();
    //Maximixe
    await page.locator("app-wms-poa").getByRole("button").click();
    await page.locator("app-wms-poa").getByText(wmsVariables.wmsHeaderText).click();
    //Minimixe
    await page.locator("app-wms-poa").getByRole("button").click();
    //Select GHI
    await page.locator("app-wms-ghi").getByText(wmsVariables.wmsHeaderText01).click();
    //Maximixe
    await page.locator("app-wms-ghi").getByRole("button").click();
    await page.locator("app-wms-ghi").getByText(wmsVariables.wmsHeaderText01)
      .click();
    //Minimixe
    await page.locator("app-wms-ghi").getByRole("button").click();
    // select Module Temp
    await page.getByText(wmsVariables.wmsheaderText02, { exact: true }).click();
    // Maximize
    await page.locator("app-wms-mod-temp").getByRole("button").click();
    await page.getByText(wmsVariables.wmsheaderText02, { exact: true }).click();
    // Minimize
    await page.locator("app-wms-mod-temp").getByRole("button").click();
    //select AMBIENT TEMP
    await page.getByText(wmsVariables.wmsheaderText03, { exact: true }).click();
    //Maximize
    await page.locator("app-wms-amb-temp").getByRole("button").click();
    await page.getByText(wmsVariables.wmsheaderText03, { exact: true }).click();
    //Minimixe
    await page.locator("app-wms-amb-temp").getByRole("button").click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/Plant Dropdown", async () => {
  test("Verify Left Nav functionalities for CMS/solar/WMS/Median WMS", async ({
    page,
  }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
      .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //check Median WMS
    await page.getByText(wmsVariables.wmsParameterheader).click();
    //PARAMETER
    await page.getByText(wmsVariables.wmsTableHeader).click();

    //Parameter filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsTableHeader }).locator("nz-table-sorters").click({
        clickCount: 3,
      });
    //UNIT
    await page.getByText(wmsVariables.wmsTableHeader01).click();
    //Unit filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsTableHeader01 }).locator("nz-table-sorters").dblclick();
    //MEDIAN
    await page.getByText(wmsVariables.wmsTableHeader02, { exact: true }).click();
    //Median filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsTableHeader02 }).locator("nz-table-sorters").dblclick();
    //Export
    await page.locator("app-wms-median app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
    //Maximixe
    await page.locator("app-wms-median app-expand").getByRole("button").click();
    //PARAMETER
    await page.getByText(wmsVariables.wmsTableHeader).click();
    //Parameter filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsTableHeader }).locator("nz-table-sorters").click({
        clickCount: 3,
      });
    //UNIT
    await page.getByText(wmsVariables.wmsTableHeader01).click();
    //Unit filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsTableHeader01 }).locator("nz-table-sorters").click({
        clickCount: 3,
      });
    //MEDIAN
    await page.getByText(wmsVariables.wmsTableHeader02, { exact: true }).click();
    //Median filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsTableHeader02 }).locator("nz-table-sorters").click({
        clickCount: 3,
      });
    //Export
    await page.locator("app-wms-median app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
    //Minimixe
    await page.locator("app-wms-median app-expand").getByRole("button").click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS2 WMS Table", async () => {
  test("Left Nav CMS/solar/WMS/IS2 WMS Table", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);
    // await page.waitForTimeout(1*1000)

    const currentDate: Date = new Date();

    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
    .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    // IS2 WMS
    await page.getByRole("tab", { name: wmsVariables.deviceName }).click();
    //Date time  filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2Text }).locator("nz-table-sorters").dblclick();
    //POA (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit }).locator("nz-table-sorters").dblclick();
    //GHI (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit01 }).locator("nz-table-sorters").dblclick();
    //Module temperature (°C)  filter
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit02 }).locator("nz-table-sorters").dblclick();
    //Module temperature 2 (°C) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit03 }).locator("nz-table-sorters").dblclick();
    //Ambient Temperature (°C) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2Textunit04 }).locator("nz-table-sorters").dblclick();
    //Battery voltage (V) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit05 }).locator("nz-table-sorters").dblclick();
    //Humidity (%)
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit06 }).locator("nz-table-sorters").dblclick();
    //Inst Rain (mm) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit07 }).locator("nz-table-sorters").click({
        clickCount: 2,
      });
    //Total Rain (mm) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit08 }).locator("nz-table-sorters").dblclick();
    //GHI_DW (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit09 }).locator("nz-table-sorters").dblclick();
    //POA_DW (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit10 }).locator("nz-table-sorters").dblclick();
    //Wind speed (m/s) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit11 }).locator("nz-table-sorters").dblclick();
    //Wind Direction (°) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit12 }).locator("nz-table-sorters").dblclick();
    //BAR_PRES (Kpa)  filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit13 }).locator("nz-table-sorters").dblclick();
    //Cloud cover (Okta)  filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit14 }).locator("nz-table-sorters").dblclick();
    //Diffuse (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit15 }).locator("nz-table-sorters").dblclick();
    //Direct (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit16 }).locator("nz-table-sorters").dblclick();
    //GLOBAL (W/m²)  filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit17 }).locator("nz-table-sorters").dblclick();
    //ALBEDO_GHI (%) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit18 }).locator("nz-table-sorters").dblclick();
    //ALBEDO_POA (%) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit19 }).locator("nz-table-sorters").dblclick();
    //Total ghi (kW/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit20 }).locator("nz-table-sorters").dblclick();
    //Total poa (kW/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit21 }).locator("nz-table-sorters").dblclick();
    //Total ghi DW (kW/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit22 }).locator("nz-table-sorters").dblclick();
    //Total poa DW (kW/m²) filter checking )
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit23 }).locator("nz-table-sorters").dblclick();
    //Export
    await page.locator("app-wms-view app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS2 WMS Table/maximize", async () => {
  test("Left Nav CMS/solar/WMS/IS2 WMS Table/maximize", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();

    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
      .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //Maximize
    await page.locator("app-wms-view app-expand").getByRole("button").click();
    //Date time  filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2Text }).locator("nz-table-sorters").dblclick();
    //POA (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit }).locator("nz-table-sorters").dblclick();
    //GHI (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit01 }).locator("nz-table-sorters").dblclick();
    //Module temperature (°C)  filter
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit02 }).locator("nz-table-sorters").dblclick();
    //Module temperature 2 (°C) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit03 }).locator("nz-table-sorters").dblclick();
    //Ambient Temperature (°C) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2Textunit04 }) .locator("nz-table-sorters").dblclick();
    //Battery voltage (V) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit05 }).locator("nz-table-sorters").dblclick();
    //Humidity (%)
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit06 }).locator("nz-table-sorters").dblclick();
    //Inst Rain (mm) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit07 }).locator("nz-table-sorters").dblclick();
    //Total Rain (mm) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit08 }).locator("nz-table-sorters").dblclick();
    //GHI_DW (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit09 }).locator("nz-table-sorters").dblclick();
    //POA_DW (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit10 }).locator("nz-table-sorters").dblclick();
    //Wind speed (m/s) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit11 }).locator("nz-table-sorters").dblclick();
    //Wind Direction (°) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit12 }).locator("nz-table-sorters").dblclick();
    //BAR_PRES (Kpa)  filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit13 }).locator("nz-table-sorters").dblclick();
    //Cloud cover (Okta)  filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit14 }).locator("nz-table-sorters").dblclick();
    //Diffuse (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit15 }).locator("nz-table-sorters").dblclick();
    //Direct (W/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit16 }).locator("nz-table-sorters").dblclick();
    //GLOBAL (W/m²)  filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit17 }).locator("nz-table-sorters").dblclick();
    // ALBEDO_GHI (%) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit18 }).locator("nz-table-sorters").dblclick();
    //ALBEDO_POA (%) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit19 }).locator("nz-table-sorters").dblclick();
    //Total ghi (kW/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit20 }).locator("nz-table-sorters").dblclick();
    //Total poa (kW/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit21 }).locator("nz-table-sorters").dblclick();
    //Total ghi DW (kW/m²) filter checking
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit22 }).locator("nz-table-sorters").dblclick();
    //Total poa DW (kW/m²) filter checking )
    await page.getByRole("cell", { name: wmsVariables.wmsIs2TextUnit23 }).locator("nz-table-sorters").dblclick();
    //Export
    await page.locator("app-wms-view app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
    //Minimixe
    await page.locator("app-wms-view app-expand").getByRole("button").click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS2 wms Device", async () => {
  test("Left Nav CMS/solar/WMS/IS2 wms Device", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();

    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
      .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //select IS2 WMS Device
    await page.getByRole("tab", { name: wmsVariables.deviceName }).click();
    //Export
    await page.getByRole("tablist").locator("app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
    //Maximize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
    //Export
    await page.getByRole("tablist").locator("app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS6 wms Device", async () => {
  test("Left Nav CMS/solar/WMS/IS6 wms Device", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
    .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //select IS6 WMS Device
    await page.getByRole("tab", { name: wmsVariables.deviceName01 }).click();
    //Export
    await page.getByRole("tablist").locator("app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
    //Maximize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
    //Export
    await page.getByRole("tablist").locator("app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS9 wms Device", async () => {
  test("Left Nav CMS/solar/WMS/IS9 wms Device", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();

    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
      .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");
    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //select IS9 WMS Device
    await page.getByRole("tab", { name: wmsVariables.deviceName02 }).click();
    //Export
    await page.getByRole("tablist").locator("app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
    //Maximize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
    //Export
    await page.getByRole("tablist").locator("app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS15 wms Device", async () => {
  test("Left Nav CMS/solar/WMS/IS15 wms Device", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();

    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
      .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //select IS15 WMS Device
    await page.getByRole("tab", { name: wmsVariables.deviceName03 }).click();
    //Export
    await page.getByRole("tablist").locator("app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
    //Maximize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
    //Export
    await page.getByRole("tablist").locator("app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS19 wms Device", async () => {
  test("Left Nav CMS/solar/WMS/IS19 wms Device", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
    .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");
    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //select IS19 WMS Device
    await page.getByRole("tab", { name: wmsVariables.deviceName04 }).click();
    //Export
    await page.getByRole("tablist").locator("app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
    //Maximize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
    //Export
    await page.getByRole("tablist").locator("app-menu").getByRole("button").click();
    await page.getByText(wmsVariables.wmsExportButton).click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS2 wms Device", async () => {
  test("Left Nav CMS/solar/WMS/IS2 Maximize", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
      .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //select IS2 WMS Device
    await page.getByRole("tab", { name: wmsVariables.deviceName }).click();

    //Maximize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();

    //Minimize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS6 wms Device", async () => {
  test("Left Nav CMS/solar/WMS/IS6 wms Device maximize", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();

    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate
      .toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
      .split("/")
      .reverse()
      .map((part) => part.padStart(2, "0"))
      .join("-");

    await page
      .locator("input[placeholder = 'Select date']")
      .fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //select IS6 WMS Device
    await page.getByRole("tab", { name: wmsVariables.deviceName01 }).click();

    //Maximize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
    //Minimize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS9 wms Device", async () => {
  test("Left Nav CMS/solar/WMS/IS9 wms Device maximize", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();

    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
      .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //select IS9 WMS Device
    await page.getByRole("tab", { name: wmsVariables.deviceName02 }).click();

    //Maximize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
    //Minimize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS15 wms Device", async () => {
  test("Left Nav CMS/solar/WMS/IS15 wms Device maximize", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();

    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
      .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //select IS15 WMS Device
    await page.getByRole("tab", { name: wmsVariables.deviceName03 }).click();

    //Maximize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
    //Minimize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/IS19 wms Device", async () => {
  test("Left Nav CMS/solar/WMS/IS19 wms Device maximize", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();

    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
      .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //select IS4 WMS Device
    await page.getByRole("tab", { name: wmsVariables.deviceName04 }).click();

    //Maximize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
    //Minimize
    await page.getByRole("tablist").locator("app-expand").getByRole("button").click();
  });
});

test.describe("Verify the functionalities of Left Nav  for cms/solar/WMS/Plant Dropdown", async () => {
  test("Left Nav CMS/solar/WMS/Plant Dropdown", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const currentDate: Date = new Date();
    const previousDate: Date = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    // Format previous date as d-m-yyyy
    const formattedPreviousDate: string = previousDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })
      .split("/").reverse().map((part) => part.padStart(2, "0")).join("-");

    await page.locator("input[placeholder = 'Select date']").fill(formattedPreviousDate);
    await page.keyboard.press("Enter");

    //changing plant
    await page.locator("nz-select-arrow svg").click();
    await page.getByText(wmsVariables.plantName).click();
    //selct POA Field
    await page.locator("app-wms-poa").getByText(wmsVariables.wmsHeaderText).click();
    //Maximixe
    await page.locator("app-wms-poa").getByRole("button").click();
    await page.locator("app-wms-poa").getByText(wmsVariables.wmsHeaderText).click();
    //Minimixe
    await page.locator("app-wms-poa").getByRole("button").click();
    //Select GHI
    await page.locator("app-wms-ghi").getByText(wmsVariables.wmsHeaderText01).click();
    //Maximixe
    await page.locator("app-wms-ghi").getByRole("button").click();
    await page.locator("app-wms-ghi").getByText(wmsVariables.wmsHeaderText01).click();
    //Minimixe
    await page.locator("app-wms-ghi").getByRole("button").click();
    // select Module Temp
    await page.getByText(wmsVariables.wmsheaderText02, { exact: true }).click();
    // Maximize
    await page.locator("app-wms-mod-temp").getByRole("button").click();
    await page.getByText(wmsVariables.wmsheaderText02, { exact: true }).click();
    // Minimize
    await page.locator("app-wms-mod-temp").getByRole("button").click();
    //select AMBIENT TEMP
    await page.getByText(wmsVariables.wmsheaderText03, { exact: true }).click();
    //Maximize
    await page.locator("app-wms-amb-temp").getByRole("button").click();
    await page.getByText(wmsVariables.wmsheaderText03, { exact: true }).click();
    //Minimixe
    await page.locator("app-wms-amb-temp").getByRole("button").click();
  });
});

test.describe("Verify the functionalities for cms/solar/wms Plant Dropdowns", async () => {
  test("CMS/solar/mfm Plant Dropdowns", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.WMS_DASHBOARD}`);

    const dropdownSelector: string = "nz-select-top-control";

    const dropdown = await page.$(dropdownSelector);

    if (dropdown) {
      await dropdown.waitForElementState("visible");
      for (let optionIndex = 0; optionIndex <= 6; optionIndex++) {
        await page.waitForTimeout(1 * 200);
        await dropdown.click();
        const optionSelector: string = `#cdk-overlay-0 > nz-option-container > div > cdk-virtual-scroll-viewport > div.cdk-virtual-scroll-content-wrapper > nz-option-item:nth-child(${
          optionIndex + 1
        })`;
        await page.waitForSelector(optionSelector);
        await page.click(optionSelector);
      }
    }
  });
});
