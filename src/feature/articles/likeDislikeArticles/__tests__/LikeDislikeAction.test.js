import moxios from 'moxios';
import { makeMockStore } from '../../../../app/common/config/mockStore';
import { likeArticle, dislikeArticle } from '../LikeDislikeAction';
import mockArticle from '../../../../__mocks__/mockData';

import {
  GET_SINGLE_ARTICLE_SUCCESS,
  LIKE_ARTICLE_FAIL,
  DISLIKE_ARTICLE_FAIL
} from '../../constants';

const store = makeMockStore({ article: {} });
const mockSuccess = data => ({ status: 200, response: data });
const mockError = error => ({ status: 400, response: error });

describe('Like Article Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it('Should dispatch LIKE_ARTICLE_FAIL action', async () => {
    const error = 'No articles the moment';
    const expected = { type: LIKE_ARTICLE_FAIL, error };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockError(error));
    });
    await store.dispatch(likeArticle(error));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[0].type).toEqual(expected.type);
  });
});

describe('Dislike Article Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('Should dispatch DISLIKE_ARTICLE_FAIL action', async () => {
    const error = 'No articles the moment';
    const expected = { type: DISLIKE_ARTICLE_FAIL, error };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockError(error));
    });
    await store.dispatch(dislikeArticle(error));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[1].type).toEqual(expected.type);
  });
});
describe('Dislike Article Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('Should dispatch DISLIKE_ARTICLE_SUCCESS action', async () => {
    const expected = GET_SINGLE_ARTICLE_SUCCESS;
    const slug = 'Should dispatch GET_SINGLE_ARTICLE_SUCCESS-3244';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(mockArticle.article));
    });
    await store.dispatch(dislikeArticle(slug));
    const dispatchedActions = store.getActions();
    const dispatchedTypes = dispatchedActions.map(action => action.type);
    expect(dispatchedTypes[0]).toEqual(expected);
  });
});
describe('SERVER ERROR', () => {
  it('Should return an error', async () => {
    const slug = 'Should dispatch GET_SINGLE_ARTICLE_SUCCESS-3244';
    const expected = DISLIKE_ARTICLE_FAIL;
    await store.dispatch(dislikeArticle(slug));
    const dispatchedActions = store.getActions();
    const dispatchedTypes = dispatchedActions.map(action => action.type);
    expect(dispatchedTypes[2]).toEqual(expected);
  });
});
