require('babel-polyfill');
import {store} from './store'
import * as actions from './actions/index';

store.dispatch(actions.addGuess(5));
store.dispatch(actions.addGuess(15));
store.dispatch(actions.addGuess(20));
store.dispatch(actions.addGuess(50));
store.dispatch(actions.addGuess(100));
store.dispatch(actions.addGuess(89));
store.dispatch(actions.addGuess(58));
store.dispatch(actions.addGuess(42));
store.dispatch(actions.addGuess(18));
store.dispatch(actions.addGuess(13));
store.dispatch(actions.startGame());
console.log(store.getState());
