# Eldritch Horror #
-----------
## Description ##
This web application makes it easy to prepare for the famous board game Eldritch Horror in terms of building a deck of myths. To assemble a deck of myths, three different types of cards are used: blue, brown and green (the type is determined by the color of the strip in the card header) In addition, there are different card complexity:
* complex maps have tentacles around the title
* ordinary cards do not know any signs
* light cards have an image of snowflakes around the name

The composition of cards required for the game is calculated by the sum of cards of different colors for all 3 stages of the game.
From the general set of cards, you will need to select cards according to the selected difficulty:
1. Very easy difficulty level: all cards with snowflakes are taken from the set, if there are not enough cards, ordinary cards are taken
2. Easy Difficulty: Tentacle cards are removed from the set
3. Medium Difficulty: Set remains intact
4. High difficulty level: cards with snowflakes are removed from the set
5. Very high level of difficulty: all cards with tentacles are taken from the set, if there are not enough cards, ordinary cards get there

## Excerpt from the rules ##
Based on the example: we chose a very easy difficulty level and we need 9 brown cards, but there are only 5 brown cards with a snowflake in the whole set, so we take these five cards and then randomly select 4 cards of normal difficulty. After the required number of cards has been collected, we must create mini-decks for each stage. To do this, the selected cards are shuffled separately (there should be three small decks in which green blue and brown cards will be located, respectively, in random order
Then you need to choose the required number of cards for each stage from these decks: Based on the example:
For Stage 1 according to the scheme, we need 1 green, 2 brown and 1 blue card. We randomly select 1 card from the mini deck of selected green cards, 2 cards from the brown deck and 1 from the blue deck, after which we shuffle the resulting 4 cards.
We repeat this action for the second and third stages, as a result, the decks initially mixed in colors will turn into 3 decks of each of the stages.
Next, the laid decks must be placed on top of each other so that the cards from the first stage enter the game first, then the cards of the second stage go, and at the end of the third stage cards.
## Implementation ##
1. In this project, the main attention was paid to the algorithm, not layout
2. There is a minimum of one Ancient card to choose from (maximum 4)
3. There are several difficulty levels to choose from (maximum 5)
4. Cards are shuffled according to the rules of the game +40 points
5. There is a tracker for the current state of the deck
## Result ##
The result is available at the following [link](https://IvanLomovtsev.github.io/eldritch/ "eldritch")
