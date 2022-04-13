import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getShelf() {

  try {
    const response = yield axios.get('/api/shelf');
    yield put({ type: 'SET_SHELF', payload: response.data });
  } catch (error) {
    console.log('Shelf get request failed', error);
  }

}

function* addItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload)
        yield put({type: 'GET_SHELF'});

    } catch (error) {
        console.log(error);
    }
}

function* shelfSaga (){
    yield takeEvery('ADD_ITEM', addItem)
    yield takeEvery('GET_SHELF', getShelf);
}

export default shelfSaga;
