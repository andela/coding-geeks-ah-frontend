/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { LikeDislike } from '../LikeDislikeComponent';

const mockStore = configureStore([thunk]);
const renderLikesAndDislikes = args => {
  const initialProps = {
    slug: '',
    likeArticle: () => {},
    dislikeArticle: () => {},
    handleLike: () => {},
    handleDisike: () => {},
    article: {
      article: {}
    }
  };
  const props = { ...initialProps, ...args };
  return shallow(<LikeDislike {...props} />);
};

describe('Get All Articles Components tests', () => {
  it('Should render a form inputs', () => {
    const wrapper = renderLikesAndDislikes();
    expect(wrapper.find('.likes').length).toBe(1);
    expect(wrapper.find('.dislikes').length).toBe(1);
    expect(wrapper.find('div').length).toBe(3);
  });
});
describe('Get All Articles Components tests', () => {
  it('Should render a form inputs', () => {
    const wrapper = renderLikesAndDislikes();
    wrapper.setProps({ isAuthenticated: true });
    const likeArticle = wrapper.find('img');
    likeArticle.at(0).simulate('click');
  });
  it('Should render a form inputs', () => {
    const wrapper = renderLikesAndDislikes();
    wrapper.setProps({ isAuthenticated: true });
    const dislikeArticle = wrapper.find('img');
    dislikeArticle.at(1).simulate('click');
  });
});
describe('Get All Articles Components tests', () => {
  it('Should render a form inputs', () => {
    const wrapper = renderLikesAndDislikes();
    wrapper.setProps({ isAuthenticated: false });
    const likeArticle = wrapper.find('img');
    likeArticle.at(0).simulate('click');
  });
  it('Should render a form inputs', () => {
    const wrapper = renderLikesAndDislikes();
    wrapper.setProps({ isAuthenticated: false });
    const dislikeArticle = wrapper.find('img');
    dislikeArticle.at(1).simulate('click');
  });
});
describe('Test MapStateToprops', () => {
  const initialState = {
    isAuthenticated: false
  };
  const store = mockStore(initialState);
  const wrapper = mount(<LikeDislike store={store} />);
  it('Should get IsaAuthenticated to be false', () => {
    expect(wrapper.props().store.getState().isAuthenticated).toBe(false);
  });
});
