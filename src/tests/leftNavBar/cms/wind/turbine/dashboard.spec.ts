import { test, expect } from '@playwright/test';
import { doLogin, getURL } from "../../../../../utils/utils";



test.describe("Verify the functionalities of Left Nav for CMS/Wind", async () => {

  test("Left Nav CMS/Wind", async ({ page }) => {
    await doLogin(page);

    // const cmsIconLocator  =  nz-sider  ul[nz-menu] > li[nz-submenu] > div[nz-submenu-title] > span:nth-child(2 ) > svg.svg-menu-header
    // Click on CMS Icon
    // await page.locator('.svg-menu-header').nth(0).click();

    // // Click on Wind
    // await page.getByText(/wind/i).click();


    // // Click on Turbine
    // //await page.getByText(/turbine/i).click();
    // await page.getByText('Turbine').click()


    // // Click on Turbine-Dashboard
    // await page.getByRole('link', { name: 'Dashboard' }).click()


    await page.goto(getURL(`/cms/wind/turbine/home`));

    //Check and Verify the Calender Column 
    const calender = page.getByPlaceholder('Select date');
    //const calender = page.locator("div.ant-picker-input");
    await expect(calender).toBeVisible()
    await calender.click();

    //Select Date from Calender
    const selectDate = page.getByTitle('11/2/2023').getByText('2');
    await expect(selectDate).toBeVisible()
    await selectDate.click();


    // Check the title of the Text "Today Energy"
    const todayEnergy = page.getByText('Today Energy');
    await expect(todayEnergy).toBeVisible();

    // Check the title of the Text "Weekly Energy"
    const weeklyEnergy = page.getByText('Weekly Energy');
    await expect(weeklyEnergy).toBeVisible();

    // Check the title of the Text "Total Energy"
    const textTotal = page.getByText('Total Energy');
    await expect(textTotal).toBeVisible();

    // Check the title of the Text "Month Energy"
    const textMonth = page.getByText('Month Energy');
    await expect(textMonth).toBeVisible();


    // Check and Verify the Plant Select DropDown Option
    const dropdownValue1 = page.locator("nz-select-item[title='Panama80MW']")
    expect(dropdownValue1).toBeDefined()
    const dropdownValue2 = page.locator("nz-select-item[title='Panama70MW']")
    expect(dropdownValue2).toBeDefined()


    // Check the title of the Text "Turbine Grid View"
    const turbineGridView = page.getByText('Turbine Grid View');
    await expect(turbineGridView).toBeVisible();
    await turbineGridView.click();

    // Select and Verify the Deviation Button
    const deviationButton = page.locator('app-info-button').getByRole('button')
    await expect(deviationButton).toBeVisible();
    await deviationButton.click();

    // Check and Verify the Color in Deviation Button
    const colorDeviationButton = page.getByRole('cell', { name: 'Colors' });
    await expect(colorDeviationButton).toBeVisible();
    await colorDeviationButton.hover();

    // Check and Verify the Median Button
    const medianButton = page.getByRole('button', { name: 'Median' });
    await expect(medianButton).toBeVisible();
    await medianButton.click()

    // Check and Verify the Max Button
    const maxButton = page.getByRole('button', { name: 'Max' });
    await expect(maxButton).toBeVisible();
    await maxButton.click();

    // Check and Verify the DropDown
    const plfDropdown = page.locator("nz-select-item[title='PLF']");
    await expect(plfDropdown).toBeVisible();
    await plfDropdown.click();
    //OR
    page.locator('#cdk-overlay-6').getByText('PLF')

    //Check and Verify the DropDown
    const exportCSV = page.locator('app-menu').getByRole('button');
    await expect(exportCSV).toBeVisible();
    await exportCSV.click();

    const turbineGridViewOfCheckbox = page.locator('nz-avatar');
    await expect(turbineGridViewOfCheckbox).toBeVisible();
    await turbineGridViewOfCheckbox.click();

    // Check and Verify inside the Overview Block 
    const OverviewBlock = page.getByRole('heading', { name: 'Overview' });
    await expect(OverviewBlock).toBeVisible();
    await OverviewBlock.click();

    // Check and Verify  "Power" inside the Overview Block
    const Power = page.getByText('Power', { exact: true })
    await expect(Power).toBeVisible();
    await Power.click();

    // Check and Verify  "Power Value" inside the Overview Block
    const powerValue = page.getByText('1677.8 kW')
    await expect(powerValue).toBeVisible();
    await powerValue.click();

    // Check and Verify  Rotor Speed" inside the Overview Block
    const rotorSpeed = page.getByText('Rotor Speed');
    await expect(rotorSpeed).toBeVisible();
    //await rotorSpeed.click();

    // Check and Verify  Rotor Speed Value " inside the Overview Block
    const rotorSpeedValue = page.getByText('0.000 rpm')
    await expect(rotorSpeedValue).toBeVisible();
    await rotorSpeedValue.click();

    // Check and Verify "Wind Speed" inside the Overview Block
    const windSpeed = page.getByText('Wind speed', { exact: true });
    await expect(windSpeed).toBeVisible();
    await windSpeed.click();

    // Check and Verify "Wind Speed Value" inside the Overview Block
    const windSpeedValue = page.getByText('11.8 m/s');
    await expect(windSpeedValue).toBeVisible();
    await windSpeedValue.click();

    // Check and Verify "Generator Speed" inside the Overview Block
    const generatorSpeed = page.getByText('Generator Speed');
    await expect(windSpeedValue).toBeVisible();
    await windSpeedValue.click();

    // Check and Verify "Generator Speed Value " inside the Overview Block
    const generatorSpeedValue = page.getByText('- rpm');
    await expect(generatorSpeedValue).toBeVisible();
    await generatorSpeedValue.click();

    //Check and Verify "Electrical" Block
    const electrical = page.getByRole('heading', { name: 'Electrical' });
    await expect(electrical).toBeVisible();
    await electrical.click();

    // Check and Verify the Voltage" inside "Electrical Block"
    const voltage = page.getByText('Voltage')
    await expect(voltage).toBeVisible();
    await voltage.click();

    // Check and Verify the Voltage Value" inside "Electrical Block"
    const voltageValue = page.getByText('704.400 V');
    await expect(voltageValue).toBeVisible();
    await voltageValue.click();

    // Check and Verify the Current" inside "Electrical Block"
    const current = page.getByText('Current');
    await expect(current).toBeVisible();
    await current.click();


    // Check and Verify the "Current Value" inside "Electrical Block"
    const currentValue = page.getByText('- A');
    await expect(currentValue).toBeVisible();
    await currentValue.click();

    // Check and Verify the "Reactive Power" inside "Electrical Block"
    const reactivePower = page.getByText('Reactive Power', { exact: true });
    await expect(reactivePower).toBeVisible();
    await reactivePower.click();

    // Check and Verify the "Reactive Power Value " inside "Electrical Block"
    const reactivePowerValue = page.getByText('40.000 kVAR');
    await expect(reactivePowerValue).toBeVisible();
    //await reactivePowerValue.click();

    // Check and Verify the "Grid Frequency" inside "Electrical Block"
    const gridFrequency = page.getByText('Grid Frequency');
    await expect(gridFrequency).toBeVisible();
    await gridFrequency.click();

    // Check and Verify the "Grid Frequency" inside "Electrical Block"
    const gridFrequencyValue = page.getByText('0.000 Hz');
    await expect(gridFrequencyValue).toBeVisible();
    await gridFrequencyValue.click();


    // Check and Verify the "Generator Temperature" inside "Other  Block"
    const generatorTemperature = page.getByRole('heading', { name: 'Other' });
    await expect(generatorTemperature).toBeVisible();
    await generatorTemperature.click();

    // Check and Verify the "Generator Temperature" inside "Other  Block"
    const generatorTemperatureValue = page.getByText('- °C');
    await expect(generatorTemperatureValue).toBeVisible();
    await generatorTemperatureValue.click();

    // Check and Verify the "Nacelle Temperature" inside "Other Block"
    const nacelleTemperature = page.getByText('Nacelle Temperature');
    await expect(nacelleTemperature).toBeVisible();
    await nacelleTemperature.click();

    // Check and Verify the "Nacelle Temperature Value " inside "Other Block"
    const nacelleTemperatureValue = page.getByText('0.000 °C')
    await expect(nacelleTemperatureValue).toBeVisible();
    await nacelleTemperatureValue.click();

    // Check and Verify the "Ambient Temperature Value " inside "Other Block"
    const ambientTemperature = page.getByText('Ambient Temperature');
    await expect(ambientTemperature).toBeVisible();
    await ambientTemperature.click();

    // Check and Verify the "Ambient Temperature Value " inside "Other Block"
    const ambientTemperatureValue = page.getByText('23.300 °C')
    await expect(ambientTemperatureValue).toBeVisible();
    await ambientTemperatureValue.click();

    // Check and Verify the "Pitch Angle" inside "Other Block"
    const pitchAngle = page.getByText('Pitch Angle')
    await expect(pitchAngle).toBeVisible();
    await pitchAngle.click();

    // Check and Verify the "Pitch Angle Value " inside "Other Block"
    const pitchAngleValue = page.getByText('0.000 °', { exact: true })
    await expect(pitchAngleValue).toBeVisible();
    await pitchAngleValue.click();

    // Check the Title of the "Power Curve [ Block1 Turbine23 ]"
    const block1Turbine23 = page.getByText('Power Curve [ Block1 Turbine23 ]');
    await expect(block1Turbine23).toBeVisible();

    // Verify and Check "Data View Button" 
    const dataViewButton = page.locator('app-power-curve app-menu').getByRole('button');
    await expect(dataViewButton).toBeVisible();
    await dataViewButton.click();

    // Verify and Check Restore Button
     const restoreButton = page.locator('app-power-curve canvas');

    await page.locator('app-power-curve canvas').click({
      position: {
        x: 986,
        y: 15
      }
    });
    await page.getByText('Close').click();
    await page.locator('app-power-curve canvas').click({
      position: {
        x: 987,
        y: 13
      }
    });
    await page.getByText('Refresh').click();
    await page.locator('app-power-curve canvas').click({
      position: {
        x: 985,
        y: 13
      }
    });

     // const downloadPromise = page.waitForEvent('download');GIT 
     const saveImageButton =page.locator('app-power-curve canvas');
     await expect(saveImageButton).toBeVisible();
     

    // Verify and Check "Availability [ Block1 Turbine23 ]" Section 
    const availabilityBlock1Turbine23=  page.getByText('Availability [ Block1 Turbine23 ]');
    await expect(availabilityBlock1Turbine23).toBeVisible();

    // Verify and Check  Export CSV inside  "Availability [ Block1 Turbine23 ]" Section 
    const exportCsv =  page.locator('app-availablity app-menu').getByRole('button');
    await expect(exportCsv).toBeVisible();
    await exportCsv.click()


    // Verify and Check "Wind Rose [ Block1 Turbine23 ]" Section
    const windRose =  page.getByText('Wind Rose [ Block1 Turbine23 ]');
    await expect(windRose).toBeVisible();
    


    // Verify and Check Graph Chart inside  "Wind Rose [ Block1 Turbine23 ]" Section
    const graphChartOfWindRose =  page.locator('app-turbine-graph').getByText('Block1 Turbine23')
    await expect(graphChartOfWindRose).toBeVisible();
    await graphChartOfWindRose.click()


    // Verify and Check  Turbine Graph Chart inside "Wind Rose [ Block1 Turbine23 ]" Section
    const turbineGraph =  page.locator('app-turbine-graph app-menu').getByRole('button');
    await expect(turbineGraph).toBeVisible();
    await turbineGraph.click()


    await page.locator('app-turbine-graph canvas').click({
      position: {
        x: 892,
        y: 327
      }
    });

    // Check and Verify the Block1 Turbine23 Section with Assertion
    const block1Turbine = page.locator('app-turbine-view').getByText('Block1 Turbine23');
    await expect(block1Turbine).toBeVisible()
    await block1Turbine.click();

    // Check and Verify the  "Date and Time" inside the "Block1 Turbine23" Section with Assertion
    const dateTime =  page.getByRole('cell', { name: 'Date & Time' });
    await expect(dateTime).toBeVisible()
    await dateTime.click()


    // Check and Verify the  "Active Power " inside the "Block1 Turbine23" Section with Assertion
    const activePower =  page.getByRole('cell', { name: 'Active Power(kW)' });
    await expect(activePower).toBeVisible()
    await activePower.click()

    // Check and Verify the  "Reactive Power " inside the "Block1 Turbine23" Section with Assertion
    const reactivePower2 =  page.getByRole('cell', { name: 'Reactive Power(kvar)'});
    await expect(reactivePower2).toBeVisible()
    await reactivePower2.click();


    // Check and Verify the  "Wind Power " inside the "Block1 Turbine23" Section with Assertion
    const windSpeed1 =  page.getByRole('cell', { name: 'Wind Speed(m/s)' });
    await expect(windSpeed1).toBeVisible()
    await windSpeed1.click();

    // Check and Verify the  "Wind Direction" inside the "Block1 Turbine23" Section with Assertion
    const windDirection = page.getByRole('cell', { name: 'Wind Direction(°)' });
    await expect(windDirection).toBeVisible()
    await windDirection.click();

    // Check and Verify the  "Pitch" inside the "Block1 Turbine23" Section with Assertion
    const pitch =  page.getByRole('cell', { name: 'Pitch(°)' })
    await expect(pitch).toBeVisible()
    await pitch.click();


    // Check and Verify the  "Nacelle" inside the "Block1 Turbine23" Section with Assertion
    const nacelle =  page.getByRole('cell', { name: 'Nacelle(°)' });
    await expect(nacelle).toBeVisible()
    await nacelle.click();

    // Check and Verify the  "Gen-Speed(rpm)" inside the "Block1 Turbine23" Section with Assertion
    const genSpeed = page.getByRole('cell', { name: 'Gen-Speed(rpm)' });
    await expect(genSpeed).toBeVisible()
    await genSpeed.click();

  });
});