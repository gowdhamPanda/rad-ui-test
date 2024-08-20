import { FullConfig, chromium } from '@playwright/test';
import login from './utils/utils';

const username = process.env.LOGIN_USERNAME ?? '';
const password = process.env.PASSWORD ?? '';
async function globalSetup(config: FullConfig): Promise<void> {
    const { storageState } = config.projects[0].use;
    // TODO: Remove headless after this has been tested
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await login(page, username, password);
    await page.context().storageState({
        path: "playwright/.auth/user.json",
    });
    await browser.close();
}

export default globalSetup;