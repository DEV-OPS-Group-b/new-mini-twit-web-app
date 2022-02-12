import {
    GET_USER,
    SET_USER,
    GET_ALL_TWEETS,
    SET_ALL_TWEETS,
    GET_USER_TWEETS,
    SET_USER_TWEETS,
    CREATE_TWEET,
    CREATE_TWEET_SUCCESS,
    CREATE_TWEET_ERROR
} from './constants';

const initialState = {
    user: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
        case SET_USER:
            const { user } = action;
            return { ...state, user };
        case GET_ALL_TWEETS:
        case SET_ALL_TWEETS:
            const { allTweets } = action;
            return { ...state, allTweets };
        case GET_USER_TWEETS:
        case SET_USER_TWEETS:
            const { userTweets } = action;
            return { ...state, userTweets };
        case CREATE_TWEET:
        case CREATE_TWEET_SUCCESS:
        case CREATE_TWEET_ERROR:
        default:
            return state;
    }
};