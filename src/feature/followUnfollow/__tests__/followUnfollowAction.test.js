import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { getFollowing, followAuthor, unfollowAuthor } from '../followUnfollowAction';
import LocalStorage from '../../../__mocks__/localStorage';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

let storage;
const token = 'Invalid token';
describe('Follow Author Tests', () => {
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
  test('Follow Author Tests', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            message: 'Successfully rated this article'
          }
        }
      });
    });
    return store.dispatch(followAuthor()).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
  test('Follow Author Fail', () => {
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
  test('Follow Author Fail for network', () => {
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
});


describe('unfollowAuthor', () => {
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
  test('unfollowAuthor testing success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            message: 'Successfully rated this article'
          }
        }
      });
    });
    return store.dispatch(unfollowAuthor()).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
  test('unfollowAuthor testing for fail', () => {
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
  test('unfollowAuthor testing network error', () => {
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
  test('getFollowing testing success ', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            message: 'Successfully rated this article'
          }
        }
      });
    });
    return store.dispatch(getFollowing()).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
  test('getFollowing testing fail', () => {
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
  test('getFollowing testing network error', () => {
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
});
