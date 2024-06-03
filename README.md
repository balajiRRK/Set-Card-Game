
# Contents
***
* Game installation
* Game Instructions
* Extra Functionalities
* Troubleshooting
* Contributors
* Sources Referenced

## Game Installation: 
***
Cloning the repository:

To clone from https
`git clone https://github.com/cse-3901-sharkey/2024-su-Team-3-Lab-1.git`

To clone from ssh
`git clone git@github.com:cse-3901-sharkey/2024-su-Team-3-Lab-1.git`

To run the game:
Simply right-click on the "home.html" file from the repository and open in any browser.  

## Game Instructions:
---

How to Play Set:

Objective:

Select three cards that form a set. You are given a random deck of cards with a set amount, and you need to find all the set combinations within it before the timer runs out. The deck will not change after a set has been found.

Card Characteristics:

Each card has four characteristics:

1. **Number:** 1, 2, or 3
2. **Color:** Red, Purple, or Green
3. **Shape:** Squiggle, Diamond, or Oval
4. **Fill:** Solid, Striped, or Open

Forming a Set:

A set consists of three cards where each characteristic is either:

- All the same across the three cards, or
- All different across the three cards.

Examples:

- **Set:** All cards are purple, squiggles, and solid fill, but have different numbers (e.g., 1, 2, and 3).
- **Not a Set:** All cards are diamonds with different colors and numbers, but two are striped, and one is open.

Difficulty Levels:

- **Easy:** Find 1 set in 3 minutes
- **Normal:** Find 2 sets in 2 minutes
- **Hard:** Find 4 sets in 1 minute

The timer starts when the game begins. You must find the required number of sets within the allotted time to win.

Happy playing!

## Extra Functionalities:

Different Game Modes:

Our Set game includes three difficulty levels to challenge players of all skill levels:

 **Easy Mode:**
- Objective: Find 1 set
- Card: 6 cards
- Time Limit: 3 minutes

**Normal Mode:**
- Objective: Find 2 sets
- Card: 12 cards
- Time Limit: 2 minutes

**Hard Mode:**
- Objective: Find 4 sets
- Card: 12 cards
- Time Limit: 1 minute

Timer:

Each game mode comes with a timer that starts as soon as the game begins. The timer is set according to the difficulty level chosen:

- Easy Mode: 3 minutes
- Normal Mode: 2 minutes
- Hard Mode: 1 minute

Players must find the required number of sets before the timer runs out to win the game. This feature adds an exciting and challenging time constraint to the game, enhancing the overall experience.

## Troubleshooting:
---

**Game Freezing or Crashing:**
- **Solution:**
    - Close the application and restart it.
    - Check for updates to ensure you are using the latest version of the game.
    - Reclone the repository and make sure there are no files missing 
    
**Timer Not Working:**
- **Solution:** 
	- Verify that the difficulty level is properly selected. 
	- If the problem persists, try restarting the application. 
	- Ensure that the `stopwatch.js` script is properly loaded.

**Difficulty Level Not Changing:**
- **Solution:** 
	- Ensure you are selecting the difficulty level on the "Difficulty Selection" page. 
	- Restart the application if the issue persists.
	- Ensure that the `difficulty-selection.html` script is properly loaded.

## Contributors:
---

Ivy Qian - created and contributed to mainPageLayout.html and styles.css; modified and contributed to MainGame.js.

Shristi Keshri - created issues, merged pull requests, assigned tasks among the team members, and supervised the meetings.

Bikash Subba - created the color and number functions; created the opening-style.css; created opening-index.html and opening-index.css, which got reorganized into various scripts; Created the readme file.

Javan Roundtree - created and contributed to the stopwatch, card graphics, various functions in main-game.js, and revised code.

Balaji Radhakrishnan - created and contributed to the cards.js having came up with most of the methods; helped create issues and reorganized html files; created game-over.html with its css, and revised code.

Ryan Parand - created the shading and shape functions, added difficulty page, and checked for comments. 


## Sources Referenced
---

Source used by the team to learn how to play set:
https://www.youtube.com/watch?v=NzXDfSFQ1c0

Source used by the team to learn how to connect Git to Github:
https://www.youtube.com/watch?v=qYoc07Da6kg

Sources used by the team to learn javascript:
https://www.w3schools.com/js/
https://developer.mozilla.org/en-US/docs/Web/javascript

Sources used by the team to learn CSS:
https://www.w3schools.com/css/default.asp

Sources used by the team to learn html:
https://www.w3schools.com/html/default.asp












