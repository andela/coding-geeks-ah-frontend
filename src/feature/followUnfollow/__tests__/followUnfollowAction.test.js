import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import mockData from '../../../__mocks__/mockData';
import {
  getFollowing, followAuthor, unfollowAuthor, clearFollowing
} from '../followUnfollowAction';
import LocalStorage from '../../../__mocks__/localStorage';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

let storage;
const token = 'Invalid token';
beforeEach(() => {
  moxios.install(axios);
  storage = window.localStorage.setItem('token', token);
  window.localStorage = new LocalStorage();
});
afterEach(() => {
  moxios.uninstall(axios);
  store.clearActions();
  window.localStorage = storage;
});
describe('FollowUnfollow ActionCreator', () => {
  it('Follow Author Tests', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockData.followSucces
      });
    });
    const expectedAction = [{ payload: mockData.followSucces, type: 'FOLLOW_AUTHOR_SUCCES' }];
    return store.dispatch(followAuthor()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('Follow Author Fail', () => {
    const expected = {
      data: {
        error: 'Bad request',
      },
    };
    moxios.stubRequest(/.*/, {
      status: 400,
      response: expected,
    });
    return store.dispatch(followAuthor()).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
  it('Follow Author Fail for network', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        data: {
          error: 'Network Error',
        }
      });
    });
    return store.dispatch(followAuthor()).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });

  it('unfollowAuthor testing success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: mockData.unfollowSucces
        }
      });
    });
    return store.dispatch(unfollowAuthor()).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
  it('unfollowAuthor testing for fail', () => {
    const expected = {
      data: {
        error: 'Bad request',
      },
    };
    moxios.stubRequest(/.*/, {
      status: 400,
      response: expected,
    });
    return store.dispatch(unfollowAuthor()).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
  it('unfollowAuthor testing network error', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        data: {
          message: 'Network Error',
        }
      });
    });
    return store.dispatch(unfollowAuthor()).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
});

describe('getFollowing', () => {
  it('getFollowing testing success ', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    return store.dispatch(getFollowing()).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
  it('getFollowing testing fail', () => {
    const expected = {
      data: {
        error: 'Bad request',
      },
    };
    moxios.stubRequest(/.*/, {
      status: 400,
      response: expected,
    });
    return store.dispatch(getFollowing()).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
  it('getFollowing testing network error', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        data: {
          message: 'Network Error',
        }
      });
    });
    return store.dispatch(getFollowing()).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
  it('clear follow', () => {
    store.dispatch(clearFollowing());
    expect(store.getActions().length).toEqual(1);
  });
});
