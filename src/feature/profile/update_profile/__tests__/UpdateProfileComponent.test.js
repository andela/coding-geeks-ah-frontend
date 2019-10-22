/* eslint-disable import/no-named-as-default */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import UpdateProfileComponent from '../UpdateProfileComponent';
import store from '../../../../app/store/index';

const Wrapper = mount(
  <Provider store={store}>
    <UpdateProfileComponent />
  </Provider>
);

const input = Wrapper.find('input');
const textarea = Wrapper.find('textarea');
const button = Wrapper.find('button');

describe('Update Profile Component Tests', () => {
  it('should render the update profile component', () => {
    expect(Wrapper.exists()).toBe(true);
  });
  it('should find the input field and textarea', () => {
    expect(input).toHaveLength(1);
    expect(textarea).toHaveLength(1);
    expect(button).toHaveLength(1);
  });
  it('should type in bio and upload an image and submit update the profile', () => {
    textarea.simulate('change', {
      target: { value: 'someone special', id: 'bio' }
    });
    input.simulate('change', {
      target: {
        files: [
          'someone.jpg'
        ]
      }
    });
    button.simulate('click');
  });
});
