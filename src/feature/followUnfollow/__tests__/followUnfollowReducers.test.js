/* eslint-disable import/named */
import followReducers, { initialState } from '../followUnfollowReducer';
import {
  FOLLOW_AUTHOR_SUCCESS,
  FOLLOW_AUTHOR_FAIL,
  UNFOLLOW_AUTHOR_SUCCESS,
  UNFOLLOW_AUTHOR_FAIL,
  GET_FOLLOWING_AUTHOR_SUCCESS
} from '../followUnfollowTypes';

describe('FOLLOW AUTHOR', () => {
  test('FOLLOW AUTHOR SUCCESS', () => {
    const reducer = followReducers(initialState, {
      type: FOLLOW_AUTHOR_SUCCESS,
      follow: undefined,
      payload: {},
      following: []
    });
    expect(reducer).toHaveProperty('following');
    expect(reducer).toHaveProperty('payload');
  });

  test('FOLLOW AUTHOR FAIL', () => {
    const reducer = followReducers(initialState, {
      type: FOLLOW_AUTHOR_FAIL,
      follow: undefined,
      payload: {},
      following: []
    });
    expect(reducer).toHaveProperty('following');
    expect(reducer).toHaveProperty('payload');
  });
});

describe('GET FOLLOWING', () => {
  test('UNFOLLOW AUTHOR SUCCESS', () => {
    const reducer = followReducers(initialState, {
      type: UNFOLLOW_AUTHOR_SUCCESS,
      follow: undefined,
      payload: {},
      following: []
    });
    expect(reducer).toHaveProperty('following');
    expect(reducer).toHaveProperty('payload');
  });

  test('UNFOLLOW AUTHOR FAIL', () => {
    const reducer = followReducers(initialState, {
      type: UNFOLLOW_AUTHOR_FAIL,
      follow: undefined,
      payload: {},
      following: []
    });
    expect(reducer).toHaveProperty('following');
    expect(reducer).toHaveProperty('payload');
  });
});

describe('GET FOLLOWING', () => {
  test('GET FOLLOWING SUCCESS', () => {
    const reducer = followReducers(initialState, {
      type: GET_FOLLOWING_AUTHOR_SUCCESS,
      follow: undefined,
      payload: {}
    });
    expect(reducer).toHaveProperty('following');
  });
});
