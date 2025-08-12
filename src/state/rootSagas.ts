import { all } from 'redux-saga/effects';
import { watchSelectedCocktail } from './cocktails/cocktails.sagas';
import {watchShowError} from "./view/view.sagas";

export default function* rootSaga() {
    yield all([
        watchSelectedCocktail(),
        watchShowError(),
    ]);
}
