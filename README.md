# CoachAnika.github.io

LINK TO PROJECT: https://coachanika.github.io/

The project from start to finish took a week to complete. 
The last few days of the project were spent, adding animations, sounds and better images.

DAY 4: 
At this point MVP is complete. Last night decided to take static images and make the character a little chicken, instead of animated Korean character Moolang. Have tried some animations to the chicken image character, but there was so much more I wanted to do with sights and sounds.

Next Steps:
1. Add back-ground sound for play button.
2. Add pet animation for eat button.
3. Add better CSS for the buttons. 
4. Add code so double-clicking a button is disabled. 
5. Nice to Have: Add background sound, when game starts. 
6. Nice to Have: Add a background image to the header/ footer. 

DAY 3:
Scope for the project changes by the day. It is good and going in the right -- sensible direction. Amazes me how all code logic is action driven! My wireframe just days ago seems amateur.
I want to make sure I have my MVP down before working on UI/ UX elements. 
Got the game timer set-up to start when user inputs name for the pet. 
Also, set up sleep timer to start as the game starts.
When user clicks the sleep button -- timer reduces.
Will try my best to keep it DRY, but most likely will be setting up boredom and feed timers from sleep timer.  
The animated progress bars are still on the page and scroll. I can tie the interval of the animation to the timers -- but they will remain aesthetic. 
I am showing actual scores with numbers -- as they are inset in the animated timer. 

Age in days also start counting as the game starts. 

Next Steps: 
1. See how pet can be morphed at a certain age. 
2. Setup the name to display and stick, once the user has added it and the game has started.  
3. Thinking through the game start and game end UI pages.
4. Look into how lights can be turned off with sleep timer. 
5. Set up timers for play and hunger.


DAY 2:
Got the pet on the page with it's eating, sleeping, dancing versions. Added event listeners for the buttons so that on clicking button Feed, eating pet shows up, on sleep, sleeping pet version shows up etc. Still have to clean this logic so that default pet shows all times.    

I have been trying to make progress bars show up. I have them animated -- challenge is to tie them to a function. TBD.
Will change scope to have logic in place and have numbers/ scores  show up on page instead of a progress bar.

Next Steps:
1. Set a timer to the game start when user has added name and hits play. 
2. As user hits buttons for feed, sleep, play, timer should reset, giving more time for user to play and tama to grow.
3. Rethink name and age in header. 
4. Research how multiple pages can be coded on one html file and how that might work for the different pages/ parts of the game.


DAY 1: 
a. Set up main Game Interface css grid to look like the wireframe. Created header, footer, main, aside elements to divide the page into sections. Brightly color coded these sections to see them clearly as I work in them. 
b. Worked on aside element section first, to add game instructions and progress bars. I was having overflow issues, which I tackled with overflow hidden on the body element. However, still having text flow overflow issues on the text in the game instructions block in the aside element, still need to solve for that.
c. Inserted animated progress bars under game instructions in aside element. It's an animated placeholder for now, much work still needed here. 
d. Added buttons with images for feed, play, sleep in footer. Solving for image issues, will tackle in good-to-have.
e. Added name and age elements to header, will have to work on logic to pre-populate name and age, when user lands on the page. 
f. Apart from the Game Interface, I also set up Main landing page for game, which is different from Game Interface. I set it up as a seperate index.html. I will have to link the two pages with a redirect, as user hits play.
g. Added pet image to Main, which I will need to change to an animated gif. I also added and styled play buttom and user input form for name.
h. On Main page, I am calling on a prebuilt CSS library from materialize, so not having overflow issues, and other design elements look more slick.

Next Steps: 
1. Working on main element of Game Interface to bring in pet. 
2. Starting with javascript to start building interactivity on the page -- first step link pet to feed, play, sleep buttons. 

Tamagotchi Game 
Game Start Page + Main Game Interface
![Screen Shot 2021-11-20 at 4 18 15 PM](https://user-images.githubusercontent.com/45264141/142744615-4ff3f1b8-2cba-4fe4-9cb7-c4032301b41d.png)
![Screen Shot 2021-11-20 at 5 01 06 PM](https://user-images.githubusercontent.com/45264141/142745320-2597160d-b52f-4b48-9fb5-078eb9b905d7.png)
![Screen Shot 2021-11-20 at 5 01 52 PM](https://user-images.githubusercontent.com/45264141/142745326-3e33f4c0-f0e9-4134-b3ba-63fe3909f326.png)
![Screen Shot 2021-11-20 at 4 24 50 PM](https://user-images.githubusercontent.com/45264141/142744736-00552c1d-921b-4d2b-8d9d-2ca7545edd8f.png)
![Screen Shot 2021-11-20 at 4 26 32 PM](https://user-images.githubusercontent.com/45264141/142744758-6fb07480-3559-424e-b645-aa2b396fb9cc.png)
![Screen Shot 2021-11-20 at 5 10 44 PM](https://user-images.githubusercontent.com/45264141/142745470-1053ffc6-6f2e-42ba-bf9b-b7a1b2e4a1ba.png)
![Screen Shot 2021-11-20 at 4 28 11 PM](https://user-images.githubusercontent.com/45264141/142744778-4d2b6d17-3902-4b4f-b286-bf91984b3389.png)



GOAL IS TO HAVE AN MVP AND THEN WORK ON THE NICE-TO-HAVES.

USER STORIES: 

The User is going to be a child – ages 8-12. 
The UX is going to be cartoonish.
The pet is going to be a hamster. 


•	User (U) lands on the page.

Sights: Sees a hamster in a forest background. 

Sounds: Hears forest sounds, with any click anywhere on the page as default is mute.

•	U is prompted to “Give your pet a name.”

•	U gives name and hits/clicks enter and lands on the main Game page/ interface.

•	U is prompted to play the game with an introduction:

“Keep ‘pet name’ fed, play with ‘pet name’ and give ‘pet name’ rest.” 

OR 

•	No prompt needed and U can see instructions clearly numbered on the main game interface.

Sights: U sees the controls/ buttons (feed, play, sleep); U sees the barometers Hunger, Boredom, Sleepiness.

Sounds: Continues to hear forest sounds.

-	Age: starts at 0 by default and increases to 1 after one cycle of eat, play, sleep is complete. 
-	Hunger: starts at 0 and increases to 10 
-	Boredom: starts at 0 and increases to 10
-	Sleepiness: starts at 0 and increases to 10

If U does nothing: 
-	Boredom increases by 1 after each second
-	Hunger increases by 1 after 5 seconds
-	Sleepiness increases by 1 after 10 seconds

•	U clicks on Play:

Sights: With POP sound, image changes to hamster playing the guitar.

Sounds: First sound: POP; Second sound: music.

Boredom: decreases by 1. 

•	U clicks on Eat:

Sights: With POP sound, image changes to hamster eating.

Sounds: First sound: POP; Second sound: crunch, crunch.

Hunger: decreases by 1

•	U clicks on Sleep:

Sights: With POP sound, image changes to hamster eyes shut, Second image: background image changes to the forest in the night. 

Sounds: First sound: POP; Second sound: snoring.

Sleepiness: decreases by 1

•	Game End: 

Game does not start without pet's name. Game ends if hunger reaches 10, boredom 	reaches 10 OR sleepiness reaches 10.

•	Game Continues: 

If age reaches 20, a new hamster is introduced and player is prompted to name it. 

•	Game Restart: 

If Game is over and player would like to re-play. The same starting landing page shows up. Here more hamster options could be added

NICE-TO-HAVES:

1)	Adding a radio for play, cookie for feed and cushion for sleep.
2)	Adding a day and night option for forest background image, so that lights/ game interface can be dimmed, when pet is sleeping.
3)	Adding at what speed the player wants to play the game – is a consideration.
4)	Adding prompts if any of the three barometers are half-way there, is another consideration.
5)	Adding a bonus exercise option with a hamster wheel in the background where the hamster can run for increasing play points. 
6)	Adding hamster movement, to and from buttons, or movement across screen – animations. 
7)	Adding sound-effects.
8)	Adding other hamster options to restart the game. 

-END-


