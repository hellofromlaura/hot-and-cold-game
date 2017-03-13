/*
1. enter a random number between 1-100
1.5 guess button
2. display how hot the number is
3. reset the input box
4. diplay the numbers entered
5. record the attempt number
6. when the right number is entered display won message
7. start new game button displayed at all times
*/

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = content => ({
  type: ADD_GUESS,
  content
});

export const START_GAME = 'START_GAME';
export const startGame = type => ({
  type: START_GAME
});

export const HOW_TO = 'HOW_TO';
export const howTo = type => ({
  type: HOW_TO
});

export const CLOSE_HOW_TO = "CLOSE_HOW_TO";
export const closeHowTo = type => ({
  type: CLOSE_HOW_TO
});
