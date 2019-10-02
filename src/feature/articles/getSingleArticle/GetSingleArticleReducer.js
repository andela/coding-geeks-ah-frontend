import {
  LIKE_ARTICLE_SUCCESS,
  LIKE_ARTICLE_FAIL,
  DISLIKE_ARTICLE_FAIL,
  DISLIKE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_FAIL
} from '../constants';

export const initialState = {
  article: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIKE_ARTICLE_SUCCESS:
    case DISLIKE_ARTICLE_SUCCESS:
    case GET_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case LIKE_ARTICLE_FAIL:
    case DISLIKE_ARTICLE_FAIL:
    case GET_SINGLE_ARTICLE_FAIL:
      return { ...state, ...payload };
    default:
      return {
        ...state
      };
  }
};
