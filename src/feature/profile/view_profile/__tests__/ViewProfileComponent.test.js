import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ViewProfileComponent from '../ViewProfileComponent';
import store from '../../../../app/store/index';

const Wrapper = mount(
  <Provider store={store}>
    <ViewProfileComponent />
  </Provider>
);

describe('View Profile Component Tests', () => {
  it('should render the view profile component', () => {
    expect(Wrapper.exists()).toBe(true);
  });
});
