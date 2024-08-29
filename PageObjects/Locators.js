
class Locators {
    constructor(page) {
        this.page = page;
        this.searchString = page.locator("#twotabsearchtextbox");
        this.selectProduct = page.locator("[class='left-pane-results-container'] [aria-label='titan watch']");
        this.productDetails = page.locator("[class='s-image']");
        this.addToCartButton = page.locator('#add-to-cart-button');
        this.productPrice = page.locator("span[class='a-price sw-subtotal-amount'] span[class='a-price-whole']");
        this.checkoutButton = page.locator('[value*=checkout]');
    }
}

module.exports = Locators;
