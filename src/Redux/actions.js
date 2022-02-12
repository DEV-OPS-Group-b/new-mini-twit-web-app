import {
    GET_USER,
    SET_USER,
    GET_ALL_TWEETS,
    SET_ALL_TWEETS,
    GET_USER_TWEETS,
    SET_USER_TWEETS,
    CREATE_TWEET,
} from './constants';

export const getUser = (userId) => ({
    type: GET_USER,
    userId,
});
  
export const setUser = (user) => ({
    type: SET_USER,
    user,
});

export const getAllTweets = () => ({
    type: GET_ALL_TWEETS,
});
  
export const setAllTweets = (allTweets) => ({
    type: SET_ALL_TWEETS,
    allTweets,
});

export const getUserTweets = (userId) => ({
    type: GET_USER_TWEETS,
    userId,
});
  
export const setUserTweets = (userTweets) => ({
    type: SET_USER_TWEETS,
    userTweets,
});