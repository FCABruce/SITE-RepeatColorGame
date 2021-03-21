# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Francesca Calla Bruce**

Time spent: **4** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/8c6df1ba-c2eb-407d-9991-4b3c6638f6f3%2Fezgif.com-video-to-gif.gif?v=1616280166142)
## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

**Youtube Buttons tutorital:** :   https://www.youtube.com/watch?v=auv_F6LPmxs

**CSS Color Selection**:     https://www.w3schools.com/cssref/css_colors.asp

**How to generate a random int array in javascript:**:    https://stackoverflow.com/questions/34966459/creating-array-of-length-n-with-random-numbers-in-javascript

**How to add images in HTML (didnt end up using it but was inspired)**:   https://www.w3schools.com/tags/tag_img.asp

**How to add image in CSS file**:    https://smallbusiness.chron.com/add-image-css-file-51301.html

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 


My biggest challenge that I encountered during this project was familiarizing myself with javascript. Although I haven’t had much experience with HTML or CSS,  it was a lot harder to pick up on javascript. Before starting this project I thought it would be the complete opposite. But I have had experience programming in java and found myself writing code in java in my js file and I would get some errors because the coding environment was very similar to a java IDE. But after an hour or so of getting used to the flow vars instead of ints I grew more confident in javascript. 
Another challenge that I spent most of my time on was finding a way to decrease the playback speed of the clues after each correct guess. In the beginning, I was just subtracting from the clueHoldTime variable, which is the variable that kept track of the playback speed. I was first subtracting numbers in the range of 100-200 after each correct guess. I wasn’t content with this approach because the playback speed was barely noticeable unless you reached the 5th correct guess, I wanted the speed to decrease in a faster rate. I then just kept dividing the clueHoldTime variable by 2 after each correct guess. This approach would work until the 4th correct guess but after that the play back speed was too fast for the user to even comprehend which clues were played. I solved this challenge by using an if statement that made the 4th correct guess’ clueHoldTime the minimum value for that variable.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 



The main development question that I had was if there was a way for the images and buttons of my webpage to stay fixed and now go with the “flow”, this was my main concern during my development process.
I also wanted to know how webpages could be interchanged between a mobile setting and a desktop setting. How would the images and code change from a mobile device compared to a desktop device? Would I need to create an entirely new project if I wanted my webpage to be used on a mobile device or is there a way to integrate new code to make it compatible? I am very curious because I am always using my safari web browser on my iPhone and some webpages look entirely different compared to when I use my desktop. 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 


If I had a few more hours to work on this project and improve on my HTML, CSS and JS skills, I would find a way to make this game have a welcome page/ menu where the user was able to pick the theme of the color game. I made my project have a clouds theme but there could also be other themes that the user resonated with more and be more inclined to play.
I was also curious of making this game be a multiplayer game, where each player gets a turn and they would gain points based on their correct guesses. With this idea I thought of adding a score board, so that the users can keep track of how many clues they have guessed correctly or even how many clues they have left




## License

    Copyright FRANCESCA CALLA BRUCE

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.