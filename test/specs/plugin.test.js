const ShopifyPage = require('../pageobjects/shopify.page');
const URLS = require('../data/urls'); 
const SHOPIFY_URL = URLS.heroUrls.qa.shopifyUrl;

describe("Open plugin", function() {
    it("Navigate to shopify url", () => {
        browser.url(SHOPIFY_URL);
    })

    it("Enter shopify page password and click to login", () => {
        ShopifyPage.clickEnterPasswordBtn();
        ShopifyPage.enterShopifyPassword("*QAtesting0nly-tryheronow!");
        ShopifyPage.clickLoginBtn();
     })

    it("Click on custom Buttons", () => {
        ShopifyPage.clickcustomBtns();
     })
 })