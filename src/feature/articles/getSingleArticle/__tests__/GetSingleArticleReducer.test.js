import {
  GET_SINGLE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_FAIL
} from '../../constants';
import GetSingleArticleReducer, {
  initialState
} from '../GetSingleArticleReducer';
import mockData from '../../../../__mocks__/mockData';

describe('Get Single Article reducer', () => {
  const { payload } = mockData;
  it('Should test GET_ARTICLES_SUCCESS', () => {
    const reducer = GetSingleArticleReducer(initialState, {
      type: GET_SINGLE_ARTICLE_SUCCESS,
      payload: {
        payload
      }
    });
    expect(reducer.payload).toEqual(payload);
  });

  it('Should test GET_SINGLE_ARTICLE_FAIL', () => {
    const reducer = GetSingleArticleReducer(initialState, {
      type: GET_SINGLE_ARTICLE_FAIL,
      payload: {
        error: 'No articles found at the moment'
      }
    });
    expect(reducer.error).toEqual('No articles found at the moment');
  });
});
