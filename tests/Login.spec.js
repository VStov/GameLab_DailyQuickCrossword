const { test, expect } = require('@playwright/test');

test('Login', async ({page})=>{

    //Open URL
    await page.goto("https://www.gamelab.com/");
    await expect(page).toHaveURL('https://www.gamelab.com/');

    //Confirm 'Personal data processing' pop-up -> it's no longer visible
    await page.click("//button[normalize-space()='CONFIRM']");
    await expect(page.locator ('#popup_selector')).toBeHidden();

    //Click on 'Games login' button
    await page.click("//div[@class='ark-header-row row-logo']//button[@class='button login-button'][normalize-space()='Games Login']");
    await expect(page.locator("//div[@class='ark-header-row row-logo']//button[@class='button login-button'][normalize-space()='Games Login']")).toBeVisible();

    //Fill email field
    await page.fill("input[placeholder='Email']",'testarkadium+003@gmail.com');
    await expect(page.locator("input[placeholder='Email']")).toHaveValue('testarkadium+003@gmail.com');

    //Fill password field
    await page.fill("input[placeholder='Password']", 'Qwerty12345');
    await expect(page.locator("input[placeholder='Password']")).toHaveValue('Qwerty12345');

    //Click 'Sign in' button
    await page.click("//span[@class='SignInUpButton__buttonText___Hy_w8h57']");
    
    //Check user button after login
    const profilelink = await page.locator("//div[@class='ark-header-row row-logo']//button[@class='button user-info-button']");
    await expect(profilelink).toBeVisible();
  
    await page.close();
  
})