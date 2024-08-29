class AppPageObject
{
    constructor(page)
    {
        this.page = page;
        this.searchString = page.locator("#twotabsearchtextbox");
        this.selectProduct= page.locator("[class='left-pane-results-container'] [aria-label='titan watch']");
        this.productDetails = page.locator("[class='s-image']");

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

    async getProduct() {
        await this.productDetails.first().click();
    }

    async addToCart(newPage) {
        this.addToCartButton = newPage.locator('#add-to-cart-button');
        await this.addToCartButton.nth(0).click();
    }
}


module.exports  = {AppPageObject};