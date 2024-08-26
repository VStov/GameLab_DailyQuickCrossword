const { test, expect } = require('@playwright/test');

test('Page Title', async ({page})=>{
     
   await page.goto('https://www.gamelab.com/');

   const pageTitle=await page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('Play Free Online Games | Free Games | GameLab');

       const pageURL=page.url();
       console.log('Page URL is:', pageURL);

    await expect(page).toHaveURL('https://www.gamelab.com/');

    await page.close();
} )