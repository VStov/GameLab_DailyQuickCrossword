# GameLab_DailyQuickCrossword
1) to run the test use: npx playwright test DailyQuickCrossword.spec.js --project chromium



2) Test Execution Report
   Test Case: GameLab_game start
   
      Browser: Chrome
      OS: Windows
      URL: https://www.gamelab.com/games/daily-quick-crossword

   **Steps and Results:**
   
   ***1.Test Initialization:***
      
   *Action:* Set a custom timeout for the test to accommodate Ad loading times.
   *Result:* Timeout successfully set to 60 seconds.
   
   2.Navigate to GameLab Website:
   
   *Action:* Open the necessary URL.
   *Expected Result:* The URL should load, and the page URL should match https://www.gamelab.com/games/daily-quick-crossword.
   *Actual Result:* The URL was successfully opened, and the page URL matched the expected URL. 
   *Status:* **Passed**
   
   ***3.Handle 'Personal Data Processing' Pop-up:***
   
   *Action:* Confirm the 'Personal data processing' pop-up.
   *Expected Result:* The pop-up should no longer be visible.
   *Actual Result:* The pop-up was successfully dismissed and is no longer visible.
   *Status:* **Passed**
   
   ***4.Preroll Ad Handling:***
   
   *Action:* Wait for the Preroll Ad to load.
   *Expected Result:* The 'Close Ad' button should be visible within the Preroll Ad frame.
   *Actual Result:* The 'Close Ad' button appeared as expected.
   *Status:* **Passed**
   *Action:* Click on the 'Close Ad' button.
   *Expected Result:* The Ad pop-up should no longer be visible.
   *Actual Result:* The Ad pop-up was successfully closed.
   *Status:* **Passed**
   
   ***5.Navigate to August 23rd Game:***
   
   *Action:* Navigate to the game for August 23rd by clicking the appropriate button several times.
   *Expected Result:* The 'Play' button for August 23rd should be visible.
   *Actual Result:* The 'Play' button appeared as expected.
   *Status:* ***Passed***
   *Action:* Click the 'Play' button.
   *Expected Result:* The game should load, and the date "Daily Quick Crossword: 23 August 2024" should be visible.
   *Actual Result:* The game loaded successfully, and the date was displayed as expected.
   *Status:* **Passed**
   
   ***6.In-Game Menu and Exit:***
   
   *Action:* Open the in-game menu.
   *Expected Result:* The in-game menu should open successfully.
   *Actual Result:* The in-game menu opened as expected.
   *Status:* ***Passed***
   *Action:* Click on the 'Exit' button.
   *Expected Result:* The exit confirmation pop-up should be shown.
   *Actual Result:* The exit confirmation pop-up appeared as expected.
   *Status:* ***Passed***
   *Action:* Confirm the exit by clicking 'Yes'.
   *Expected Result:* The 'Results' pop-up should be displayed.
   *Actual Result:* The 'Results' pop-up was shown as expected.
   *Status:* ***Passed***
   
   ***7.Submit Score and Verify Game End Page:***
   
   *Action:* Click on the 'Submit total score' button.
   *Expected Result:* The game end page should be displayed.
   *Actual Result:* The game end page appeared as expected. Screenshot captured.
   *Status:* ***Passed***
   
   ***8.Replay and Preroll Ad Handling:***
   
   *Action:* Click on 'Play again' button.
   *Expected Result:* The page should reload, and the Preroll Ad should reappear.
   *Actual Result:* The page reloaded successfully, and the Preroll Ad appeared as expected.
   *Status:* ***Passed***

Test Summary
- Overall Status: Passed
- Total Test Cases Executed: 8
- Total Test Cases Passed: 8
- Total Test Cases Failed: 0
