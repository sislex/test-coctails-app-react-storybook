import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
import internalLogicReducer from './internalLogic/internalLogicSlice';
import cocktailsDataReducer from './cocktailsData/cocktailsDataSlice';
// import rootSaga from "./cocktailsData/cocktailsDataSagas";

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    internalLogic: internalLogicReducer,
    cocktailsData: cocktailsDataReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(sagaMiddleware),
});

// sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch