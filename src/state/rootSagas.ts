import { all } from 'redux-saga/effects';
import { watchSelectedCocktail } from './cocktails/cocktails.sagas';

export default function* rootSaga() {
    yield all([
        watchSelectedCocktail(),
    ]);
}
