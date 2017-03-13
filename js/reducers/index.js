import * as actions from './actions/index';

const initialState = {
  actualNumber: randomNumber;
  currentGuess: '',
  attempts: 0,
  alreadyGuessed: []
};

const randomNumber = randomNumber();
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
};

export const gameReducer = (state=initialState, action) => {
  return state;
};
