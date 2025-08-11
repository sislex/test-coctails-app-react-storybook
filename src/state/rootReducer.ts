import { combineReducers } from '@reduxjs/toolkit';
import view from './view/view.slice';
import cocktails from './cocktailsData/cocktailsDataSlice';

const rootReducer = combineReducers({
  view,
  cocktails,
});

export default rootReducer;
