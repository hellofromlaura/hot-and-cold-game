import * as actions from '../actions/index';

const initialState = {
  actualNumber: null,
  currentGuess: null,
  attempts: 0,
  alreadyGuessed: [],
  correctGuess: false
};

// const randomNumber = randomNumberGenerator();

function randomNumberGenerator() {
  return Math.floor(Math.random() * 100) + 1;
};

function checkAnswer(answer, number) {
  return answer === number;
}

export const gameReducer = (state=initialState, action) => {
  const currentState = state;
  if (state === initialState) {
    currentState.actualNumber = randomNumberGenerator();
    Object.assign(state, currentState);
  }

  if (action.type === actions.ADD_GUESS) {
    currentState.currentGuess = action.content;
    currentState.attempts += 1;
    currentState.alreadyGuessed.push(action.content);
    currentState.correctGuess = checkAnswer(currentState.actualNumber, currentState.currentGuess)
    return Object.assign(state, currentState);
  }

  console.log(action.type);
  console.log(actions.START_GAME);
  if (action.type === actions.START_GAME) {
    console.log('hello');
    console.log(initialState)
    return {
      actualNumber: null,
      currentGuess: null,
      attempts: 0,
      alreadyGuessed: [],
      correctGuess: false
    };
  }

  if (action.type === actions.HOW_TO) {
    return state;
  }

  if (action.type === actions.CLOSE_HOW_TO) {
    return state;
  }

  return state;
};
