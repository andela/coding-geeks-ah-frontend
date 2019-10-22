import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const middlewares = [thunk, promiseMiddleware];
const mockStore = configureStore(middlewares);
const store = mockStore({
  isAuthenticated: true,
  social: jest.fn(),
  login: jest.fn(),
});
let wrapper;

describe('Render the Nav Bar', () => {
  it('Should render Home page successfully', async () => {
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
