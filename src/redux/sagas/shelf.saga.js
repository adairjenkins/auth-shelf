import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";


function* addItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload)
        // yield put({type: 'GET_SHELF'});

    } catch (error) {
        console.log(error);
    }
}
function* shelfSaga (){
yield takeEvery('ADD_ITEM', addItem)

}
export default shelfSaga;

