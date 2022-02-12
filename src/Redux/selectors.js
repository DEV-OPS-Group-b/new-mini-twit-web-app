import { createSelector } from 'reselect';
import get from 'lodash/get';

/**
* Direct selector to the user state domain
*/
export const selectUserDomain = (state) => state.user;

/**
*  User selector
*/
export const userSelector = createSelector(
  selectUserDomain,
  (substate) => {
    const user = get(substate, 'user');
    return user;
  }
);

/**
*  Get All tweets selector
*/
export const allTweetsSelector = createSelector(
    selectUserDomain,
    (substate) => {
      return get(substate, 'allTweets');
    }
);

/**
*  Get User tweets selector
*/
export const userTweetsSelector = createSelector(
    selectUserDomain,
    (substate) => {
      return get(substate, 'userTweets');
    }
);