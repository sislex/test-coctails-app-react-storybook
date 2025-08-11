import { combineReducers } from '@reduxjs/toolkit';
import view from './view/view.slice';
import cocktails from './cocktails/cocktails.slice';

const rootReducer = combineReducers({
  view,
  cocktails,
});

export default rootReducer;
