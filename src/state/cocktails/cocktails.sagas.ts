import { takeEvery, call, put, select } from 'redux-saga/effects';
import {setSelectedCocktail, addCocktails, startLoadApi, stopLoadApi} from './cocktails.slice';
import {selectCocktails} from "./cocktails.selectrors";
import {requestShowError} from "../view/view.slice";
import {fetchCocktailByName} from '../../api/cocktailsApi';

function* handleSelectedCocktailChange(action: ReturnType<typeof setSelectedCocktail>): any {
  const cocktailType = action.payload;

  const cocktails = yield select(selectCocktails);

  if (cocktails[cocktailType]) {
    console.log(`Cocktails for "${cocktailType}" already in cache`, cocktails[cocktailType]);
    yield put(stopLoadApi());
  } else {
    try {
      yield put(startLoadApi());
      const data = yield call(fetchCocktailByName, cocktailType);
      if (data.drinks) {
        yield put(addCocktails({cocktailType, data}));
        yield put(stopLoadApi());
      } else {
        yield put(requestShowError({ message: `The list of cocktails "${cocktailType}" is empty` }));
        yield put(stopLoadApi());
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      yield put(requestShowError({ message: `Error requesting cocktail: ${errorMessage}` }));
    }
  }
}

export function* cocktailSagas() {
  yield takeEvery(setSelectedCocktail.type, handleSelectedCocktailChange);
}
