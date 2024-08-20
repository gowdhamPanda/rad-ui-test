import { test, expect } from '@playwright/test';
import { doLogin } from '../../utils/utils';


test.describe("Verify the functionalities of User-Profile of Home Page", async () => {

  test('User-Profile of Home Page', async ({ page }) => {
    await doLogin(page);

    // Click on UserProfile Icon
    const userProfileTab = page.locator('nz-header a').nth(1);
    await expect(userProfileTab).toBeVisible();

    // Get all of the input Field of User-Profile Form
    await userProfileTab.click();
    const userNameOfUserProfileTab = page.locator(".cdk-overlay-pane ul > li").first();
    await expect(userNameOfUserProfileTab).toBeVisible();

    
     //Click on User Profile to Open Email Input Field
     await userNameOfUserProfileTab.click()
    // const nameInputField = await page.locator("input[placeholder='Input Email ']").fill("aditya.m@sgrids.io");
    // //await nameInputField.fill("aditya.m@sgrids.io");
    // const mobileInputField = page.locator("input[placeholder='Input Last Mobile no']");
    // mobileInputField.fill("9876543210");
    // const firstName = page.locator("input[placeholder = 'input firstname ']")
    // firstName.fill("Aditya");
    // const lastName = page.locator("input[placeholder='Input Last Name']")
    // lastName.fill("Mohan")

    
    const signatureUpload =  page.locator("div.ant-col div.ant-upload>div.ant-upload");
    await expect(signatureUpload).toBeVisible();
     await signatureUpload.click();

    
    // File Name followed by Path
    await page.setInputFiles("input[type='file']", "resources/fileSign.jpg")

    

    

    

    // check  assertion in all input field of the  User-Profile Form
    // await expect(nameInputField).toBeVisible()
    // await expect(mobileInputField).toBeVisible()
    // await expect(firstName).toBeVisible()
    // await expect(lastName).toBeVisible()

  });

});
