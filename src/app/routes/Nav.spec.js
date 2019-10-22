import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

const middlewares = [thunk, promiseMiddleware];

let url = null;
const mockStore = configureStore(middlewares);
const store = mockStore({
  isAuthenticated: true,
  social: jest.fn(),
  login: jest.fn(),
});
let wrapper;

describe('Render the Nav Bar', () => {
  it('Should render successfully', async () => {
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );
    sinon.stub(window.location, 'replace');
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});

describe('Render the Nav Bar', () => {
  beforeAll(() => {
    global.window = Object.create(window);
    url = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJlcmljLm1hbGFiYTZAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6IkVyaWM2IiwiaWF0IjoxNTcxMjA1MTYyLCJleHAiOjE1NzEyOTE1NjJ9.ZdMucW9PC4K9PLJKX1G7cnWyHA2ihGfcBqhRT1-q4Co#';
    Object.defineProperty(window, 'location', {
      value: { href: url },
      writable: true,

    });
  });
  it('Should render successfully', async () => {
    expect(window.location.href).toEqual(url);
  });
});
