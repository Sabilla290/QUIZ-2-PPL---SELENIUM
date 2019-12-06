const { Builder, By, Key, util } = require("selenium-webdriver");
var assert = require('assert');

async function login() {
  //buka browser
  try{
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
    await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.name("Submit")).click();

    const getValue = await driver.findElement(By.xpath("//li")).getText();
    assert.equal(getValue, "Welcome Admin", "Test Text Fail");
    console.log(getValue);
  }catch{
    console.log("Fail");
  }
  
}

login();
