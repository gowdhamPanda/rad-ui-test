import { test, expect } from '@playwright/test';
import { doLogin } from '../../utils/utils';


test.describe("Verify the functionalities of Header component of Home Page", async () => {
    test("Should Navigate to Home page ", async ({ page }) => {
        await doLogin(page);
        
        //should show the  Left logo on the header
        const leftLogo = page.locator("div.nav-wrap > ul.nav-left > li > img.logo.cursor");
        await expect(leftLogo).toBeVisible();

        //should show the Right logo on the header
        const rightLogo = page.locator("div.nav-wrap > ul.nav-right").getByRole("img").last()
        await expect(rightLogo).toBeVisible();

        //should show view more option on hover of bell icon
        const bellIcon = page.locator('#mainLayout nz-badge a');
        await bellIcon.hover();
        //await expect(page.getByText(/view more/i)).toBeVisible();

        // should show screenshot button
        const screenshotIcon = page.locator('[href="assets/svg/Cam.svg#Cam"]');
        await expect(screenshotIcon).toBeVisible();

        // should show profile icon
        const profileIcon = page.locator('[href="assets/svg/user.svg#user"]');
        await expect(profileIcon).toBeVisible();

        // should show theme toggle button
        const defaultThemeButton = page.getByRole('button', { name: /Light|Dark/i });
        const themeButtonText = await defaultThemeButton.textContent();
        await expect(defaultThemeButton).toBeVisible();

        // click to toggle theme to show light theme button
        await defaultThemeButton.click();
        const toggledThemeButton = page.getByRole('button', { name: /Light|Dark/ });
        const newButtonText = await toggledThemeButton.textContent();
        const toggleText = themeButtonText === "Light" ? "Dark" : "Light";
        expect(newButtonText).toBe(toggleText);

        // Verify the Title of the Page
        await expect(page).toHaveTitle("Smart Grid Analytics");

        // verify taking screenshot entire Home-Page
        await page.screenshot({ path: "screenshots/screenshots1.png" });

        // Verify the the Screenshot of Right Side Logo
        //await page.locator("div.nav-wrap>ul.nav-right").screenshot({ path: "screenshot.png" });

        // verify taking screenshot of the Solar Icon with AC AND DC Value
        // const solarWindWithAcDcValue = page.locator(".header-continer>div.nav-wrap>ul.nav-right>li.plant-capacity>ul.li-row svg.main-header-icon");
        // solarWindWithAcDcValue.screenshot({path: "solarWithWindTab.png"})
        // await expect(solarWindWithAcDcValue).toBeVisible()
        // solarWindWithAcDcValue.click();

        // Verify and Check the Solar AC Value 
        const solarACValue = page.locator(".header-continer>div.nav-wrap>ul.nav-right>li.plant-capacity >ul.li-row>li.solar-capacity");
        await expect(solarACValue).toBeVisible();

        // Verify and Check the Solar AC Value 
        const solarDCValue = page.locator(".header-continer>div.nav-wrap>ul.nav-right>li.plant-capacity >ul.li-row>li.solar-capacity")
        await expect(solarDCValue).toBeVisible();

        // Verify and Check the Slash Symbol between AC and  DC Values
        const slashSymbol = page.locator(".header-continer>div.nav-wrap>ul.nav-right>li.plant-capacity >ul.li-row>li.solar-capacity >span.ant-slash")
        await expect(slashSymbol).toBeVisible();


        // Checks if the element's text content matches the expected text
        expect(page.url()).toContain("home");
        // Verify the Navigation Page
        await page.goBack();
        await page.goForward();
        await page.close();
    });
});
