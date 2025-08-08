import { all } from 'redux-saga/effects';

function* exampleSaga() {
  // yield takeEvery('ACTION_TYPE', handler);
}

export default function* rootSaga() {
  yield all([
    exampleSaga(),
  ]);
}
