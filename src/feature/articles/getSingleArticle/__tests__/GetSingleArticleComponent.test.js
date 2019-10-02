/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { ViewSingleArticle } from '../GetSingleArticleComponent';

const renderViewSingleArticle = args => {
  const initialProps = {
    slug: 'kenya moja films99494',
    isAuthenticated: true,
    handleLike: jest.fn(),
    likeArticle: () => {},
    dislikeArticle: () => {},
    handleDislike: () => {},
    GetSingleArticle: () => {},
    article: {
      article: {
        author: ''
      }
    },
    currentUser: {
      user: {}
    }
  };
  const props = { ...initialProps, ...args };
  const match = { params: { slug: 'kenya moja films99494' } };
  return shallow(<ViewSingleArticle {...props} match={match} />);
};

describe('Get All Articles Components tests', () => {
  it('Should render a form inputs', () => {
    const wrapper = renderViewSingleArticle();
    expect(wrapper.find('div').length).toBe(20);
    expect(wrapper.find('img').length).toBe(3);
  });
});
