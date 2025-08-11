import { takeEvery, call, put, all, select } from 'redux-saga/effects';
import {setSelectedCocktail, addCocktails} from "./cocktails.slice";
import {selectCocktails} from "./cocktails.selectrors";

async function fetchCocktailByName(name: string) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name.toLowerCase()}`)
      .then((res) => res.json());
}

function* handleSelectedCocktailChange(action: ReturnType<typeof setSelectedCocktail>): any {
  const cocktailType = action.payload;

  const cocktails = yield select(selectCocktails);

  if (cocktails[cocktailType]) {
    console.log(`Коктейли для "${cocktailType}" уже есть в кеше`, cocktails[cocktailType]);
  } else {
    try {
      const data = yield call(fetchCocktailByName, cocktailType);
      if (data.drinks) {
        yield put(addCocktails({cocktailType, data}));
      } else {
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

export default function* rootSaga() {
  yield all([
    watchSelectedCocktail(),
  ]);
}