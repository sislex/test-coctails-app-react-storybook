import { all } from 'redux-saga/effects';
import {watchShowError} from "./view/view.sagas";
import {cocktailSagas} from './cocktails/cocktails.sagas';

export default function* rootSaga() {
    yield all([
        cocktailSagas(),
        watchShowError(),
    ]);
}
