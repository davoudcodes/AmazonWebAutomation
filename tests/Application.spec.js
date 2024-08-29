const {test} = require('@playwright/test');
const {AppPageObject} = require('../PageObjects/AppPageObject');

test('BasicTest', async({browser})=>
{

    const context =  await browser.newContext();
    const page = await context.newPage();
    const appPageObject = new AppPageObject(page);
    await appPageObject.goto();
    await appPageObject.SearchProduct();
})