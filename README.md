# Taboo Browser Game

## Overview

This is a web-based version of the classic board game Taboo.  The goal of the game is for a player to get their teammates to guess a target word without using any of the forbidden words listed on the card.  The interface now includes responsive styles so it works smoothly on both mobile and desktop browsers.

## How to Play

* The game is played with teams.
* One player is the ""cluer"" and tries to get their teammates to guess the target word.
* The cluer cannot say the target word or any of the forbidden words.
* Teammates have a limited time to guess the word.
* If the teammates guess correctly, the team gets a point.

## Technologies Used

* HTML
* CSS
* JavaScript
* JSON (for card data)

## Setup (Optional - if you have any special setup)

1.  Clone this repository to your local machine.
    `git clone https://github.com/hlydecker/taboo-browser-game.git`
2.  Open the `index.html` file in your web browser.

## Game Data

The game data (words and forbidden words) is stored in the `cards_extended.json` file with 206 cards.

## Advanced Mode

By default the game uses this pre-generated deck. You can enable advanced mode to generate new cards with an LLM. Provide your API key in the setup form and set the **Advanced Mode** toggle to "On".

## Live Version

You can play the game here: [Link to your GitHub Pages site]

## Credits

