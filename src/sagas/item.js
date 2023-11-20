import {take, put, call, fork} from 'redux-saga/effects';
import {ApiHelper} from '../helper';
import {itemActions} from '../features/itemSlice';

const {request, success, failure} = itemActions;

function* callRequest(url, data, headers, requestType) {
  try {
    let response;

    if (requestType === 'POST') {
      response = yield call(ApiHelper.post, url, data, headers);
    } else {
      response = yield call(ApiHelper.get, url, {});
    }

    yield put(success(response));
  } catch (error) {
    yield put(failure(error));
  }
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    const {url, data, header, requestType} = payload;

    yield fork(callRequest, url, data, header, requestType);
  }
}

export default function* root() {
  yield fork(watchRequest);
}
