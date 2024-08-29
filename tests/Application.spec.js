const {test} = require('@playwright/test');
const {AppPageObject} = require('../PageObjects/AppPageObject');

test.only('BasicTest', async({browser})=>
{

    const context =  await browser.newContext();
    const page = await context.newPage();
    const appPageObject = new AppPageObject(page);
    await appPageObject.goto();
    await appPageObject.SearchProduct();
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        appPageObject.getProduct(),
      ]);
      await page.close();
      await newPage.pause();
})