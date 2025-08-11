import { takeEvery } from 'redux-saga/effects';

// Пустая сага-заглушка (аналог пустого эффекта в NgRX)
function* emptySaga() {
  // Пока ничего не делает, но может отслеживать экшены
}

// Watcher Saga (отслеживает экшены)
export function* watchEmptySaga() {
  yield takeEvery('SOME_ACTION_TYPE', emptySaga); // Ловит экшен, но не обрабатывает
}

// Корневая сага (входная точка)
export default function* rootSaga() {
  yield watchEmptySaga(); // Подключаем watcher
}