import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import internalLogicReducer from './slices/internalLogic';
import cocktailsDataReducer from './slices/cocktailsData';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    internalLogic: internalLogicReducer,
    cocktailsData: cocktailsDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch