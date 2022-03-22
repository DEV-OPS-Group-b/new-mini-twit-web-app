import {
    GET_USER,
    SET_USER,
    CREATE_USER,
    LOGIN_USER,
    FOLLOW_USER,
    UNFOLLOW_USER,
    GET_IS_USER_FOLLOWING,
    SET_IS_USER_FOLLOWING,

    GET_ALL_TWEETS,
    SET_ALL_TWEETS,
    GET_USER_TWEETS,
    SET_USER_TWEETS,
    CREATE_TWEET,
    UPDATE_TWEET_FLAG,

    RESET_TYPE,    
} from './constants';


/**
 * User
 */
export const getUser = (userId) => ({
    type: GET_USER,
    userId,
});
  
export const setUser = (user) => ({
    type: SET_USER,
    user,
});

export const createUser = (username, email, password) => ({
    type: CREATE_USER,
    username,
    email,
    password,
});

export const loginUser = (username, password) => ({
    type: LOGIN_USER,
    username,
    password,
});

export const followUser = (currentUsername, targetUsername) => ({
    type: FOLLOW_USER,
    currentUsername, 
    targetUsername,
});

export const unfollowUser = (currentUsername, targetUsername) => ({
    type: UNFOLLOW_USER,
    currentUsername, 
    targetUsername,
});

export const isUserFollowing = (currentUsername, targetUsername) => ({
    type: GET_IS_USER_FOLLOWING,
    currentUsername, 
    targetUsername,
});

export const setIsUserFollowing = (isFollowing) => ({
    type: SET_IS_USER_FOLLOWING,
    isFollowing,
});


/**
 * Tweet
 */
export const getAllTweets = () => ({
    type: GET_ALL_TWEETS,
});
  
export const setAllTweets = (allTweets) => ({
    type: SET_ALL_TWEETS,
    allTweets,
});

export const getUserTweets = (profileUsername) => ({
    type: GET_USER_TWEETS,
    profileUsername,
});
  
export const setUserTweets = (userTweets) => ({
    type: SET_USER_TWEETS,
    userTweets,
});

export const createTweet = (username, tweet) => ({
    type: CREATE_TWEET,
    username,
    tweet
});

export const updateTweetFlag = (tweetId, username, password) => ({
    type: UPDATE_TWEET_FLAG,
    tweetId,
    username,
    password
});



/**
 * Reset Response success/failure
 */
export const resetTypeValue = () => ({
    type: RESET_TYPE
  })