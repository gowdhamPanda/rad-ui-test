import { test, expect } from '@playwright/test';
import { doLogin, getURL } from "../../../../utils/utils";

const newFormName = `form-tag-${new Date().getTime()}`;
const editedFormName = newFormName.slice(0, -2);
const timeout = 10 * 100 * 1000;
const config = { timeout };


test.describe("Verify the functionalities of Form Tag Dashboard Page for CMMS", async () => {

    test('should create the new form tag', async ({ page }) => {
        test.setTimeout(timeout);
        await doLogin(page);
        // We can directly move form tag Dashboard page to Verify the functionalities
        await page.goto(getURL(`/cmms/form-tags/dashboard`));
        
        // create the new form
        await page.getByRole('button', { name: 'Add' }).click(config);
        await page.getByPlaceholder('Input Form Tag Name').click(config);
        await page.getByPlaceholder('Input Form Tag Name').fill(newFormName);
        await page.getByRole('button', { name: 'Submit' }).click(config);
        await expect(page.getByText("Form Tag Added successfully!!")).toBeVisible(config);
    });

    test('should cancel the edits if user clicks on the cancel button after modifying the form name', async ({ page }) => {
        test.setTimeout(timeout);
        await doLogin(page);
        await page.goto(getURL(`/cmms/form-tags/dashboard`));

        // try clicking the newly added form tag and click on cancel button so that new edits don't get saved
        await page.getByRole('cell', { name: newFormName, exact: true }).click(config);
        await page.getByPlaceholder('Input Form Tag Name').click(config);
        await page.getByPlaceholder('Input Form Tag Name').fill(editedFormName);
        await page.getByRole('button', { name: 'Cancel' }).click(config);
    })


    test('should change the form name after clicking on submit button', async ({ page }) => {
        test.setTimeout(timeout);
        await doLogin(page);
        await page.goto(getURL(`/cmms/form-tags/dashboard`));

        // try editing again and save the change this time
        await page.getByRole('cell', { name: newFormName, exact: true }).click(config);
        await page.getByPlaceholder('Input Form Tag Name').click(config);
        await page.getByPlaceholder('Input Form Tag Name').fill(editedFormName);
        await page.getByRole('button', { name: 'Submit' }).click(config);
        await expect(page.getByText("Form Tag Updated successfully!!")).toBeVisible(config);
    })


    test('should not allow creating a form name with existing name', async ({ page }) => {
        test.setTimeout(timeout);
        await doLogin(page);
        // We can directly move form tag Dashboard page to Verify the functionalities
        await page.goto(getURL(`/cmms/form-tags/dashboard`));

        // try creating a new form with the exiting form name
        await page.getByRole('button', { name: 'Add', exact: true }).click(config);
        await page.getByPlaceholder('Input Form Tag Name').click(config);
        await page.getByPlaceholder('Input Form Tag Name').fill(editedFormName);
        await page.getByRole('button', { name: 'Submit' }).click(config);
        await expect(page.getByText(`Tag with this Form Tag Name /${editedFormName}/ already exists.`)).toBeVisible();
        await page.getByRole('button', { name: 'Cancel' }).click(config);

    })

    test('should delete the already created form tag', async ({ page }) => {
        test.setTimeout(timeout);
        await doLogin(page);
        await page.goto(getURL(`/cmms/form-tags/dashboard`));

        //delete the newly added form
        await page.getByRole('row', { name: `${editedFormName} - Delete` }).getByRole('button').click(config);
        await page.getByRole('button', { name: 'OK' }).click(config);
        await expect(page.getByText(`Form Tag Removed successfully!!`)).toBeVisible(config);
    })

})
