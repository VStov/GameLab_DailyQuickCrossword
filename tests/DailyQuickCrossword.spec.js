const { test, expect } = require('@playwright/test');

test('GameLab_game start', async ({ page }) => {

  //Set a custom timeout for the test (to accommodate Ad loading times)
  test.setTimeout(60000);

  //Open necessary URL -> The URL is opened
  await page.goto('https://www.gamelab.com/games/daily-quick-crossword');
  await expect(page).toHaveURL('https://www.gamelab.com/games/daily-quick-crossword');
  
  //Confirm 'Personal data processing' pop-up -> it's no longer visible
  await page.getByLabel('CONFIRM').click();
  await expect(page.locator ('#popup_selector')).toBeHidden();

  //Wait for the Preroll Ad to load
  const prerollAd = await page.frameLocator('#ark_pre-roll iframe').frameLocator('iframe[name="google_ads_iframe_\\/100151972\\/www\\.gamelab\\.com\\/h5_0"]');
  
  //Check that the 'Close Ad' button is present
  const closeAdButton = prerollAd.getByLabel('Close Ad');
  await expect(closeAdButton).toBeVisible();

  //Click on the 'Close Ad' button -> the Ad pop-up is no longer visible
  await closeAdButton.click();
  await expect(page.locator ('#popup_selector')).toBeHidden();

  //Navigate to the game for the 23rd August by clicking appropriate button several times
  const canvasBox = '#canvas-box'
  const gameButton = page.frameLocator(canvasBox).locator('._29gcsfWZWwB6vRVJRcnvO4');
  for (let i=0; i<5; i++) {
     await gameButton.first().click();
   }

  //Confirm that the 'Play' button for the 23rd August is visible
  const playButton = page.frameLocator(canvasBox).locator('li').filter({ hasText: 'FRI23 0%PLAY' }).locator('div').nth(2);
  await expect(playButton).toBeVisible();

  //Click the 'Play' button and verify the crossword game
  await playButton.click();
  const crossDay = page.frameLocator(canvasBox).getByText('Daily Quick Crossword: 23 August 2024');
  await expect(crossDay).toBeVisible();

  //Open in-game menu
  await page.frameLocator(canvasBox).locator('section').filter({ hasText: /^00:00 Check Reveal Print$/ }).getByRole('button').first().click();

  //Click on the 'Exit' button 
  await page.frameLocator(canvasBox).getByRole('button', { name: 'Exit' }).click();

  //Wait for the exit confirmation pop-up is shown
  const exitPopUp = await page.frameLocator(canvasBox).getByText('Exit Puzzle');
  await expect(exitPopUp).toBeVisible();

  //Click on the 'Yes' button
  await page.frameLocator(canvasBox).getByRole('button', { name: 'Yes' }).click();

  //Confirm exit by clicking 'Yes' and check that the 'Results' pop-up is displayed
  const resultPopUp = await page.frameLocator(canvasBox).getByText('Results');
  await expect(resultPopUp).toBeVisible();

  //Click on the 'Submit total score' button and check that game end page is shown + screenshot of game end page
  await page.frameLocator(canvasBox).getByRole('button', { name: 'Submit Total Score' }).click();
  const gameEndPage = await page.locator("//div[@class='GameEnd__container___Sh31w5nT']");
  await expect(gameEndPage).toBeVisible();
  await page.screenshot({ path: 'screenshots/'+Date.now()+'FullPage.png', fullPage: true });

  //Click on 'Play again' button and check if the preroll Ad reappears
  await page.click("//button[normalize-space()='Play Again']");

  //Wait page reload
  await page.waitForLoadState('load');
  
  //Check that preroll Ad is display
  await page.frameLocator('#ark_pre-roll iframe').frameLocator('iframe[name="google_ads_iframe_\\/100151972\\/www\\.gamelab\\.com\\/h5_0"]').getByLabel('Close Ad');
  await expect(closeAdButton).toBeVisible();

  await page.close();
})