const axios = require('axios');
const ShopifyPage = require('../pageobjects/shopify.page');
const URLS = require('../data/urls'); 
const { response } = require('express');
const { func } = require('joi');
const SHOPIFY_URL = URLS.heroUrls.qa.shopifyUrl;

describe("Open plugin", function() {
    it("Navigate to shopify url", () => {
        browser.url(SHOPIFY_URL);
        //browser.setupInterceptor();
    })

    it("Enter shopify page password and click to login", () => {
        ShopifyPage.clickEnterPasswordBtn();
        ShopifyPage.enterShopifyPassword("*QAtesting0nly-tryheronow!");
        ShopifyPage.clickLoginBtn();
     })

    it("Click on custom Buttons", () => {
        ShopifyPage.clickcustomBtns();
     })

     it("Login to the associate app", () => {
         axios.post('https://api.qa.usehero.com/auth/login', {
            email: "tunde@sayhero.com", 
            password: "Abundance23!"
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error){
                console.log(error);
             })
       })
 })