import { test, expect } from '@playwright/test';
import { doLogin } from '../../utils/utils';
import constant from '../../utils/constant';


test.describe("Log In/Log Out", () => {
  test("Should login with correct credentials and navigate to home page", async ({ page }) => {
    await doLogin(page);
    await page.waitForURL(constant.homeUrl);
    expect(page.url()).toMatch(/home/i);

    await page.locator('nz-header a').nth(1).click();
    await page.getByText('Logout').click();
    await page.waitForURL(constant.loginUrl);
    expect(page.url()).toMatch(/login/i);
    //await page.close();
  });

  // test("Should not navigate to home page if credential is wrong", async ({ page }) => {
  //   await doLogin(page, "pass", "email@something.com");
  //   expect(page.url()).not.toMatch(/home/i);
  //   await page.close();



  // });
});
