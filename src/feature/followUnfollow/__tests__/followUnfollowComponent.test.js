/* eslint-disable react/jsx-props-no-spreading */
import { mount } from 'enzyme';
import React from 'react';

import { FollowUnfollowComponent } from '../FollowUnfollowComponent';

const renderFollowUnfollow = (args) => {
  const defaultProps = {
    isAuthenticated: true,
    loggedInUser: true,
    followAuthor: jest.fn(),
    unfollowAuthor: jest.fn(),
    getFollowing: jest.fn(),
    following: {
      map: jest.fn(),
    },
    history: {
      push: jest.fn(),
    },
  };
  const props = { ...defaultProps, ...args };
  return mount(<FollowUnfollowComponent {...props} />);
};

const wrapper = renderFollowUnfollow();

describe('Test Login Component...', () => {
  it('Should render FollowUnfollow component', () => {
    expect(wrapper).toHaveLength(1);
  });
});

it('should update props', () => {
  wrapper.setProps({ isAuthenticated: false });
  expect(wrapper).toHaveLength(1);
});

it('should update props', () => {
  wrapper.setProps({ isAuthenticated: true });
  expect(wrapper).toHaveLength(1);
});

describe('Click Follow button...', () => {
  wrapper.instance();
  const FollowButton = wrapper.find('.button');
  FollowButton.simulate('click');
});
