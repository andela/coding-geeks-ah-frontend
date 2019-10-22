import {
  CLEAR_FOLLOW,
  FOLLOW_AUTHOR_SUCCESS,
  FOLLOW_AUTHOR_FAIL,
  UNFOLLOW_AUTHOR_SUCCESS,
  UNFOLLOW_AUTHOR_FAIL,
  GET_FOLLOWING_AUTHOR_SUCCESS
} from './followUnfollowTypes';

const initialState = {
  follow: undefined,
  following: []
};

const followReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CLEAR_FOLLOW: return {
      ...state,
      following: []
    };
    case GET_FOLLOWING_AUTHOR_SUCCESS: return {
      ...state,
      following: payload.data
    };
    case FOLLOW_AUTHOR_SUCCESS: return {
      ...state,
      payload,
      following: [...state.following, payload.data]
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
