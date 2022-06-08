import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '../slices';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
