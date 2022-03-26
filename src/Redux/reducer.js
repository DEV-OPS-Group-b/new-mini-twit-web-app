import {
    GET_USER,
    SET_USER,
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
    SET_IS_USER_FOLLOWING,

    GET_ALL_TWEETS,
    SET_ALL_TWEETS,
    GET_USER_TWEETS,
    SET_USER_TWEETS,
    CREATE_TWEET,
    CREATE_TWEET_SUCCESS,
    CREATE_TWEET_ERROR,
    UPDATE_TWEET_FLAG,
    UPDATE_TWEET_FLAG_SUCCESS,
    UPDATE_TWEET_FLAG_ERROR,

    RESET_TYPE
} from './constants';

const initialState = {
    user: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        
        case CREATE_USER:
        case CREATE_USER_SUCCESS:
        case CREATE_USER_ERROR:
        case LOGIN_USER:
        case LOGIN_USER_SUCCESS:
        case LOGIN_USER_ERROR:
        case FOLLOW_USER:
        case FOLLOW_USER_SUCCESS:
        case FOLLOW_USER_ERROR:
        case UNFOLLOW_USER:
        case UNFOLLOW_USER_SUCCESS:
        case UNFOLLOW_USER_ERROR:
        case CREATE_TWEET:
        case CREATE_TWEET_SUCCESS:
        case CREATE_TWEET_ERROR:
        case UPDATE_TWEET_FLAG:
        case UPDATE_TWEET_FLAG_SUCCESS:
        case UPDATE_TWEET_FLAG_ERROR:
        case RESET_TYPE:
            const { type } = action;
            return { ...state, type };

        case GET_USER:
            case SET_USER:
                const { user } = action;
                return { ...state, user };


        case GET_IS_USER_FOLLOWING:
        case SET_IS_USER_FOLLOWING:
            const { isFollowing } = action;
            return { ...state, isFollowing };
            
        case GET_ALL_TWEETS:
        case SET_ALL_TWEETS:
            const { allTweets } = action;
            return { ...state, allTweets };
        case GET_USER_TWEETS:
        case SET_USER_TWEETS:
            const { userTweets } = action;
            return { ...state, userTweets };
        default:
            return state;
    }
};