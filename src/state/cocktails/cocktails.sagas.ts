import { takeEvery, call, put, select } from 'redux-saga/effects';
import {setSelectedCocktail, addCocktails, setStartTimeApi, setLoadingTimeApi} from "./cocktails.slice";
import {selectCocktails} from "./cocktails.selectrors";
import {requestShowError} from "../view/view.slice";

async function fetchCocktailByName(name: string) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name.toLowerCase()}`)
      .then((res) => res.json());
}

function* handleSelectedCocktailChange(action: ReturnType<typeof setSelectedCocktail>): any {
  const cocktailType = action.payload;

  const cocktails = yield select(selectCocktails);

  if (cocktails[cocktailType]) {
    console.log(`Cocktails for "${cocktailType}" already in cache`, cocktails[cocktailType]);
  } else {
    try {
      yield put(setStartTimeApi());
      const data = yield call(fetchCocktailByName, cocktailType);
      if (data.drinks) {
        yield put(addCocktails({cocktailType, data}));
        yield put(setLoadingTimeApi());
      } else {
        yield put(requestShowError({ message: `Список коктейлей "${cocktailType}" пуст` }));
        console.error('Список коктейлей пуст', data);
      }
    } catch (error) {
      console.error('Ошибка при запросе коктейля:', error);
    }
  }
}

export function* watchSelectedCocktail() {
  yield takeEvery(setSelectedCocktail.type, handleSelectedCocktailChange);
}