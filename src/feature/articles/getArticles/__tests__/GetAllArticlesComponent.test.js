/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { GetAllArticles } from '../GetAllArticlesComponent';
import dummyData from '../../../../__mocks__/mockData';

const renderGetArtilces = args => {
  const initialProps = {
    articles: [dummyData.returnedArticle],
    getAllArticles: () => {},
    state: {
      loading: false
    }
  };

  const props = { ...initialProps, ...args };
  return shallow(<GetAllArticles {...props} />);
};

describe('Get All Articles Components tests', () => {
  it('Should render a form inputs', () => {
    const wrapper = renderGetArtilces();
    wrapper.setState({ loading: false });
    expect(wrapper.find('.mainDiv').length).toBe(1);
    expect(wrapper.find('div').length).toBe(13);
    expect(wrapper.find('.link').length).toBe(1);
  });
});
describe('Testing Images', () => {
  const initialProps = {
    articles: [dummyData.returnedArticleWithImage],
    getAllArticles: () => {},
    state: {
      loading: false
    }
  };
  it('Should return Provided images ', () => {
    const wrapper = shallow(<GetAllArticles {...initialProps} />);
    wrapper.setState({ loading: false });
    expect(wrapper.find('.article__image-box').prop('src')).toEqual(
      'http://res.cloudinary.com/jkadhuwa/image/upload/v1570696434/buxtk2bswoki2jhiwtr5.png'
    );
  });
});
describe('Return no articles', () => {
  const initialProps = {
    articles: [],
    getAllArticles: () => {}
  };
  it('Should return default images if images are not provided', () => {
    const wrapper = shallow(<GetAllArticles {...initialProps} />);
    expect(wrapper.find('.link').length).toBe(0);
  });
});
describe('Return article with default image', () => {
  const initialProps = {
    articles: [dummyData.ArticleWithDeaultImage],
    getAllArticles: () => {}
  };
  it('Should return default images if images are not provided', () => {
    const wrapper = shallow(<GetAllArticles {...initialProps} />);
    wrapper.setState({ loading: false });
    expect(wrapper.find('.article__image-box').prop('src')).toEqual(
      'defaultImage.png'
    );
  });
});
