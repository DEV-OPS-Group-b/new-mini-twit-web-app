import { call, put } from "redux-saga/effects";
import { setUser, setAllTweets, setUserTweets, setIsUserFollowing } from './actions';
import {  
  requestGetUser, 
  requestCreateUser, 
  requestLoginUser, 
  requestFollowUser, 
  requestUnfollowUser,
  requestIsUserFollowing } from "../Requests/user";
import { requestGetAllTweets, requestGetUserTweets, requestCreateTweets, requestUpdateTweetFlag } from "../Requests/tweet";

import { takeLatest } from "redux-saga/effects";

import {
    GET_USER,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    FOLLOW_USER,
    FOLLOW_USER_SUCCESS,
    FOLLOW_USER_ERROR,
    UNFOLLOW_USER,
    UNFOLLOW_USER_SUCCESS,
    UNFOLLOW_USER_ERROR,
    GET_IS_USER_FOLLOWING,
    
    GET_ALL_TWEETS,
    GET_USER_TWEETS,
    CREATE_TWEET,
    CREATE_TWEET_SUCCESS,
    CREATE_TWEET_ERROR,
    UPDATE_TWEET_FLAG,
    UPDATE_TWEET_FLAG_SUCCESS,
    UPDATE_TWEET_FLAG_ERROR,
} from './constants';

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetUser);
    yield takeLatest(CREATE_USER, handleCreateUser);
    yield takeLatest(LOGIN_USER, handleLoginUser);
    yield takeLatest(FOLLOW_USER, handleFollowUser);
    yield takeLatest(UNFOLLOW_USER, handleUnfollowUser);
    yield takeLatest(GET_IS_USER_FOLLOWING, handleIsUserFollowing);

    yield takeLatest(GET_ALL_TWEETS, handleGetAllTweets);
    yield takeLatest(GET_USER_TWEETS, handleGetUserTweets);
    yield takeLatest(CREATE_TWEET, handleCreateTweet);
    yield takeLatest(UPDATE_TWEET_FLAG, handleUpdateTweetFlag);
}

/**
 * User
 */
export function* handleGetUser(userId) {
  try {
    const response = yield call(requestGetUser, userId);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    // console.log(error);
  }
}

export function* handleCreateUser({username, email, password}) {
  try {
    const response = yield call(requestCreateUser, username, email, password);
    yield put({ type: CREATE_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: CREATE_USER_ERROR, error });
  }
}

export function* handleLoginUser({username, password}) {
  try {
    const response = yield call(requestLoginUser, username, password);
    yield put({ type: LOGIN_USER_SUCCESS, response });
    localStorage.setItem("user", username);
  } catch (error) {
    yield put({ type: LOGIN_USER_ERROR, error });
  }
}

export function* handleFollowUser({currentUsername, targetUsername}) {
  try {
    const response = yield call(requestFollowUser, currentUsername, targetUsername);    
    yield put({ type: FOLLOW_USER_SUCCESS, response });    
  } catch (error) {
    yield put({ type: FOLLOW_USER_ERROR, error });
  }
}

export function* handleUnfollowUser({currentUsername, targetUsername}) {
  try {
    const response = yield call(requestUnfollowUser, currentUsername, targetUsername);    
    yield put({ type: UNFOLLOW_USER_SUCCESS, response });    
  } catch (error) {
    yield put({ type: UNFOLLOW_USER_ERROR, error });
  }
}

export function* handleIsUserFollowing({currentUsername, targetUsername}) {
  try {
    const response = yield call(requestIsUserFollowing, currentUsername, targetUsername);  
    const { data } = response;  
    yield put(setIsUserFollowing(data));    
  } catch (error) {
    // console.log(error);
  }
}


/**
 * Tweet
 */
export function* handleGetAllTweets() {
    try {
    const response = yield call(requestGetAllTweets);
      yield put(setAllTweets(response));
    } catch (error) {
      // console.log(error);
    }
}

export function* handleGetUserTweets({ profileUsername }) {
    try {
      const response = yield call(requestGetUserTweets, profileUsername);
      yield put(setUserTweets(response));
    } catch (error) {
      // console.log(error);
    }
}

export function* handleCreateTweet({ username, tweet }) {
  try {
    const response = yield call(requestCreateTweets, username, tweet);
    yield put({ type: CREATE_TWEET_SUCCESS, response });
  } catch (error) {
    yield put({ type: CREATE_TWEET_ERROR, error });
  }
}

export function* handleUpdateTweetFlag({ tweetId, username, password }) {
  try {
    const response = yield call(requestUpdateTweetFlag, tweetId, username, password);
    yield put({ type: UPDATE_TWEET_FLAG_SUCCESS, response });
  } catch (error) {
    yield put({ type: UPDATE_TWEET_FLAG_ERROR, error });
  }
}