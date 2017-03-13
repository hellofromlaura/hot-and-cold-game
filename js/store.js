import {createStore} from 'redux';
import {gameReducer} from './reducers/index';
import * as actions from './actions/index';

export const store = createStore(gameReducer);
