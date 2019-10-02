import React from 'react';
import { mount } from 'enzyme';
import { ViewSingleArticle } from '../GetSingleArticleComponent';

const renderViewSingleArticle = args => {
  const initialProps = {
    // articles: [dummyData.returnedArticle],
    slug: 'kenya moja films99494',
    handleLike: () => {},
    handleDislike: () => {},
    article: {

    }
  };
  const props = { ...initialProps, ...args };
  return mount(<ViewSingleArticle {...props} />);
};

describe('Get All Articles Components tests', () => {
  it('Should render a form inputs', () => {
    const wrapper = renderViewSingleArticle();
    expect(wrapper.find('.likes').length).toBe(1);
    expect(wrapper.find('.dislikes').length).toBe(1);
    expect(wrapper.find('div').length).toBe(3);
  });
});
