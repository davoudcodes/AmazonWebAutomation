const {test} = require('@playwright/test');

test('BasicTest', async({browser})=>
{

    const context =  await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.amazon.in/');
})