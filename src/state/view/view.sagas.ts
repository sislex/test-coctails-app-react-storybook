import { put, select, takeEvery, delay } from 'redux-saga/effects';
import {hideErrorPopup, requestShowError, showErrorPopup} from './view.slice';
import { selectPopupIds } from './view.selectors';

function getNextId(existingIds: number[]) {
  if (existingIds.length === 0) return 1;
  return Math.max(...existingIds) + 1;
}

function* showErrorPopupSaga(action: ReturnType<typeof requestShowError>) {
  const message = action.payload?.message || 'default error';
  const existingIds: number[] = yield select(selectPopupIds);
  const id = getNextId(existingIds);

  yield put(showErrorPopup({ id, message }));
  yield delay(3000);
  yield put(hideErrorPopup(id));
}

export function* watchShowError() {
  yield takeEvery(requestShowError.type, showErrorPopupSaga);
}

