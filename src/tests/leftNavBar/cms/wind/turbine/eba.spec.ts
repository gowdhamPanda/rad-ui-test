import { test, expect } from '@playwright/test';
import { doLogin, getURL } from "../../../../../utils/utils";



test.describe("Verify the functionalities of Left Nav for CMS/Wind", async () => {

    test("Left Nav CMS/Wind", async ({ page }) => {
        await doLogin(page);

        // Create a function where we have to perform the testing
        await page.goto(getURL(`/cms/wind/turbine/energyavailability`));

        // Check the "Calender" and verify through Assertion 
        const calender =page.getByPlaceholder('Start date');
        await expect(calender).toBeVisible()
        await calender.click()

        // Check the select "Date" and Verify through Assertion 
        const selectDate =  page.getByTitle('11/10/2023').getByText('10');
        await expect(selectDate).toBeVisible();
        await selectDate.click();

        // Check the select "Calender Range" and Verify through Assertion 
        const calenderRange =  page.locator('nz-range-picker svg').nth(1);
        await expect(calenderRange).toBeVisible();
        await calenderRange.click();

        // Check the select "Select Drop-Down" and Verify through Assertion 
        const value1 = "Panama80MW";
        const value2 = "Panama70MW"
        const selectDropdown =  page.getByText('Panama80MW')
        const dropdownValue1 = page.locator(".ant-picker-range-separator>span.ant-picker-separator").getByText(value1);
        await expect(selectDropdown).toBeVisible();
        // await calenderRange.click();
        const dropdownValue2 = page.locator('nz-range-picker svg').first()
        await expect(dropdownValue2).toBeVisible();
        await dropdownValue2.click();

    // Check the Tittle of 'Energy Based Availability'
        const EBA =  page.getByText('Energy Based Availability');
        await expect(dropdownValue2).toBeVisible();
        await dropdownValue2.click();


    });

})
