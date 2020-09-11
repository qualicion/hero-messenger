class ShopifyPage {
    get plugIn(){
        return $("button[data-qa='launcher-icon-button']");
    }

    clickPlugin(){
        this.plugIn.waitForDisplayed();
        this.plugIn.click();
    }

    get enterPasswordBtn(){
        return $(".password-page.text-center header a");
    }

    clickEnterPasswordBtn(){
        this.enterPasswordBtn.waitForDisplayed(); 
        this.enterPasswordBtn.click();
    }

    get shopifyPassword(){
        return $("#Password");
    }

    enterShopifyPassword(text){
        this.shopifyPassword.waitForDisplayed(); 
        this.shopifyPassword.keys(text);
    }

    get loginBtn(){
        return $('#login_form div span button');
    }

    clickLoginBtn(){
        this.loginBtn.waitForDisplayed();
        this.loginBtn.click();
    }

    get pluginBtn(){
        return $("//*[@data-qa='launcher-message-iframe']"); 
    }


    clickPluginBtn(){
        this.pluginBtn.waitForDisplayed(); 
        this.pluginBtn.switchToParentFrame();
        this.pluginBtn.click(); 
    }

    get customBtn(){
        return $('#SiteNav > li:nth-child(3) > a');
    }

    clickCustomBtn(){
        this.customBtn.waitForDisplayed();
        this.customBtn.click(); 
    }
}

module.exports = new ShopifyPage();