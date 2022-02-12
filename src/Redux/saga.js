import { call, put } from "redux-saga/effects";
import { setUser, setAllTweets, setUserTweets } from './actions';
import { requestGetUserTweets } from "../Requests/tweet";

import { takeLatest } from "redux-saga/effects";

import {
    GET_USER,
    GET_ALL_TWEETS,
    GET_USER_TWEETS,
    CREATE_TWEET,
    CREATE_TWEET_SUCCESS,
    CREATE_TWEET_ERROR
} from './constants';

export function* watcherSaga() {
    // yield takeLatest(GET_USER, handleGetUser);
    yield takeLatest(GET_ALL_TWEETS, handleGetAllTweets);
    yield takeLatest(GET_USER_TWEETS, handleGetUserTweets);
    // yield takeLatest(CREATE_TWEET, handleCreateTweet);
}

// export function* handleGetUser({ userId, token }) {
//     try {
//       const response = yield call(requestGetUser, userId, token);
//       const { data } = response;
//       // Puts the data in the right redux action
//       yield put(setUser(data));
//     } catch (error) {
//       console.log(error);
//     }
// }

export function* handleGetAllTweets() {
    try {
    //   const response = yield call(requestGetUserTweets, userId, token);
    const response = yield call(requestGetUserTweets);
      yield put(setAllTweets(response));
    } catch (error) {
      console.log(error);
    }
}

// export function* handleGetUserTweets({ userId, token }) {
export function* handleGetUserTweets({ userId }) {
    try {
    //   const response = yield call(requestGetUserTweets, userId, token);
    const response = yield call(requestGetUserTweets, userId);
      yield put(setUserTweets(response));
    } catch (error) {
      console.log(error);
    }
}