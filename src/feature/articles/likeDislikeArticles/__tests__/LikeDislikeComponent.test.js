/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { LikeDislike } from '../LikeDislikeComponent';

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
