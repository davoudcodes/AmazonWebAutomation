class AppPageObject
{
    constructor(page)
    {
        this.page = page;
        this.searchString = page.locator("#twotabsearchtextbox");
        this.selectProduct= page.locator("[class='left-pane-results-container'] [aria-label='titan watch']");

    }

   async goto()
    {
        await this.page.goto('https://www.amazon.in/')
    }

    async SearchProduct()
    {
        await this.searchString.type('Titan Watch', {delay:100});
        await this.selectProduct.click();

    }
}


module.exports  = {AppPageObject};