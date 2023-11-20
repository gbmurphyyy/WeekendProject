import {take, put, call, fork} from 'redux-saga/effects';
import {ApiHelper} from '../helper';
import {userActions} from '../features/userSlice';

const {request, success, failure} = userActions;

function* callPostRequest(url, data, headers) {
  try {
    return yield call(ApiHelper.post, url, data, headers);
  } catch (err) {
    throw err.message;
  }
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    try {
      const response = yield call(callPostRequest, payload.url, payload.data);
      yield put(success(response));
    } catch (err) {
      yield put(failure(err));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
