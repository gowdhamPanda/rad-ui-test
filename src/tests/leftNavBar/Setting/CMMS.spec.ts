import { test, expect } from '@playwright/test';
import { doLogin } from "../../../utils/utils";


test.describe("Verify the functionalities of Left Nav  CMMS inSetting Tab", async () => {
    test("Left Nav Setting Tab", async ({ page }) => {
        await doLogin(page);

        // Click on Setting Tab 
        const setting = page.locator('li:nth-child(4) > .ant-menu-submenu-title > span:nth-child(2) > .svg-menu-header')
        await expect(setting).toBeVisible();
        await setting.click();

        // Click on Setting Tab to Open CMMS
        const cmms = page.getByText('CMMS');
        await expect(cmms).toBeVisible();
        await cmms.click()

        // Get all of the sub_Menu in CMMS
        const jobs = page.locator('div').filter({ hasText: /^Jobs$/ });
        const forms = page.getByText('Forms');
        const incident = page.getByText('Incident', { exact: true });
        //const listDataSource = page.locator('div').filter({ hasText: /^List Data Source$/ });
        const ptw = page.locator('div').filter({ hasText: /^PTW$/ });
        const vendor = page.getByText('Vendor', { exact: true });
        const assets = page.locator('div').filter({ hasText: /^Assets$/ });
        const parts = page.locator('div').filter({ hasText: /^Parts$/ });
        const approvalMatrix = page.getByRole('link', { name: 'Approval Matrix', exact: true });
        const approvalMatrixMap = page.getByRole('link', { name: 'Approval Matrix Map' });
        const costCategory = page.getByRole('link', { name: 'Cost Category' })

        //Check  assertion all of the sub menus of CMMS
        await expect(jobs).toBeVisible();
        await expect(forms).toBeVisible();
        await expect(incident).toBeVisible();
        //await expect(listDataSource).toBeVisible();
        await expect(ptw).toBeVisible();
        await expect(vendor).toBeVisible();
        await expect(assets).toBeVisible();
        await expect(parts).toBeVisible();
        await expect(approvalMatrix).toBeVisible();
        await expect(approvalMatrixMap).toBeVisible();
        await expect(costCategory).toBeVisible();

        //Check all of the sub menus of Jobs Tab
        await jobs.click();
        const jobTemplate = page.getByRole('link', {name: /job template/i});
        const jobTags = page.locator("a[href='/cmms/job-tags/dashboard']");
        const jobsMenuBuilder = page.locator("a[href='/setting/jobtemplate-menubuilder']");
        await expect(jobTemplate).toBeVisible();
        await expect(jobTags).toBeVisible();
        await expect(jobsMenuBuilder).toBeVisible();

        //Check all of the sub menus of Forms Tab
        await forms.click()
        const formTag = page.locator("a[href='/cmms/form-tags/dashboard']");
        const formBuilder = page.locator("a[href='/cmms/form-builder/index']");
        await expect(formTag).toBeVisible();
        await expect(formBuilder).toBeVisible();

        //Check all of the sub menus of Incident Tab
        await incident.click()
        const incidentType = page.locator("a[href='/cmms/incident-type/dashboard']");
        const incidentTags = page.locator("a[href='/cmms/incident-tag/dashboard']");
        const menuBuilder = page.locator("a[href='/setting/incident-menubuilder']");
        await expect(incidentType).toBeVisible();
        await expect(incidentTags).toBeVisible();
        await expect(menuBuilder).toBeVisible();

        //Check all of the sub menus of List Data Source Tab
        //await listDataSource.click();
        //const listDataSourceOption = page.locator("a[href='/cmms/list-data-source/dashboard']");

        //Check all of the sub menus of PTW Tab
        await ptw.click()
        const ptwTemplate = page.locator("a[href='/cmms/ptw-template/index']");
        await expect(ptwTemplate).toBeVisible();


        //Check all of the sub menus of Vendor Tab
        await vendor.click()
        const vendorType = page.locator("a[href='/cmms/vendor-type/dashboard']");
        await expect(vendorType).toBeVisible();


        //Check all of the sub menus of Assets Tab
        await assets.click()
        const assetType = page.locator("a[href='/cmms/asset/assettype/dashboard']");
        const assetTag = page.locator("a[href='/cmms/asset/assettag/dashboard']");
        const assetMenuBuilder = page.locator("a[href ='/setting/assettype-menubuilder']");
        await expect(assetType).toBeVisible();
        await expect(assetTag).toBeVisible();
        await expect(assetMenuBuilder).toBeVisible();

        //Check all of the sub menus of Parts Tab
        await parts.click()
        const partsType = page.locator("a[href='/cmms/part-type/dashboard']");
        await expect(partsType).toBeVisible();

        //Check assertion in all of the Sub-Menus of CMMS
     
        //await expect(listDataSourceOption).toBeVisible();
    
      
    });
});


