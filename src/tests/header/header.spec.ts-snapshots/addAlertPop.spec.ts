import { test, expect } from '@playwright/test';
import { doLogin } from '../../../utils/utils';


test.describe("Verify the functionalities of Header component of Home Page", async () => {
    test("Should Navigate to Home page ", async ({ page }) => {
        await doLogin(page);

        //should show "bell icon"
        const bellIcon = page.locator('#mainLayout nz-badge a');
        await bellIcon.hover();

        // Check and Click the "View Button Tab" inside the Bell Icon 
        const viewOption = page.getByRole('button', { name: 'View More' })
        await expect(viewOption).toBeVisible();
        await viewOption.click();

        // Opens the Pop-Up after clicking the "View More" and Click Add Button 
        const addButton = page.locator("div[class='ant-card-head-wrapper'] div:nth-child(1) button:nth-child(1) span:nth-child(1)")
        await expect(addButton).toBeVisible();
        await addButton.click();

        
        // Applying  the for loop of iteration all values from plant dropdown
        //Find the Locator of the "Region" Dropdown
        const locatorOfRegionDropdown = page.locator('nz-select-top-control').filter({ hasText: 'Select Region' });
        await expect(locatorOfRegionDropdown).toBeVisible()
        await locatorOfRegionDropdown.click();

        // Find the Locator of the " All Options" from  the Region 

        const locatorofOptions = page.locator(".cdk-virtual-scroll-viewport div.cdk-virtual-scroll-content-wrapper nz-option item")
        let locatorofOptionsArr = [locatorofOptions];
        await expect(locatorofOptions).toHaveCount(4);

        for (let option of locatorofOptionsArr) {
            await locatorOfRegionDropdown.click()
            expect(option).toBe("Northern India");

     }
        
        
        
    });
});