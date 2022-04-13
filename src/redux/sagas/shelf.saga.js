import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getShelf() {

  try {
    const response = yield axios.get('/api/shelf');
    yield put({ type: 'SET_SHELF', payload: response.data });
  } catch (error) {
    console.log('Shelf get request failed', error);
  }

}

function* shelfSaga() {
  yield takeLatest('GET_SHELF', getShelf);
}

export default shelfSaga;