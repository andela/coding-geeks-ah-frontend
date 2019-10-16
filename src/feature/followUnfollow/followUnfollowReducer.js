import {
  FOLLOW_AUTHOR_SUCCESS, FOLLOW_AUTHOR_FAIL, UNFOLLOW_AUTHOR_SUCCESS, UNFOLLOW_AUTHOR_FAIL
} from './followUnfollowTypes';

const initialState = {
  follow: undefined,
};

const followReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FOLLOW_AUTHOR_SUCCESS: return {
      ...state,
      payload
    };
    case FOLLOW_AUTHOR_FAIL: return {
      ...state,
      payload
    };
    case UNFOLLOW_AUTHOR_SUCCESS: return {
      ...state,
      payload
    };
    case UNFOLLOW_AUTHOR_FAIL: return {
      ...state,
      payload
    };
    default: return state;
  }
};

export default followReducers;
