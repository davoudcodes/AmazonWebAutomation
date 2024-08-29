const Locators = require('./Locators');
class AppPageObject
{
    constructor(page)
    {
        this.page = page;
        this.locators = new Locators(page);
    }

   async goto()
    {
        await this.page.goto('https://www.amazon.in/')
    }

    async SearchProduct()
    {
        await this.locators.searchString.type('Titan Watch', {delay:100});
        await this.locators.selectProduct.click();
    }

    async getProduct() {
        await this.locators.productDetails.first().click();
    }

    async addToCart(newPage) {
        const newLocators = new Locators(newPage);
        await newLocators.addToCartButton.nth(0).click();
    }

    async getProductPrice(newPage) {
        const newLocators = new Locators(newPage);
        return await newLocators.productPrice.textContent();
    }

    async proceedToCheckout(newPage) {
        const newLocators = new Locators(newPage);
        await newLocators.checkoutButton.click();
    }
}


module.exports  = {AppPageObject};