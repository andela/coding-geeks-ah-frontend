/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import '@ckeditor/ckeditor5-react';
import '@ckeditor/ckeditor5-build-classic';
import { CreateArticle } from '../createArticle/CreateArticleComponent';

jest.mock('@ckeditor/ckeditor5-react');
jest.mock('@ckeditor/ckeditor5-build-classic');
const renderCreateArtilce = args => {
  const initialProps = {
    article: {},
    getData: () => {},
    createArticle: () => {},
    handleSubmit: () => {}
  };
  const props = { ...initialProps, ...args };
  return shallow(<CreateArticle {...props} />);
};

describe('Form inputs tests', () => {
  it('Should render a form inputs', () => {
    const wrapper = renderCreateArtilce();
    expect(wrapper.find('input').length).toBe(4);
    expect(wrapper.find('div').length).toBe(7);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').text()).toBe('Create');
  });
  it('Should render an Editor', () => {
    const wrapper = renderCreateArtilce();
    const CKEditor = wrapper.find('.input__body');
    expect(CKEditor.length).toBe(1);
  });
});
describe('Iputs on change tests', () => {
  const wrapper = renderCreateArtilce();

  it('Should insert into title field', () => {
    const title = wrapper.find('input[name="title"]');
    title.simulate('change', {
      target: {
        value: 'Andela the best place to work in africa',
        name: 'title'
      }
    });
    expect(wrapper.state('title')).toEqual(
      'Andela the best place to work in africa'
    );
  });

  it('Should insert into description field', () => {
    const description = wrapper.find('input[name="description"]');
    description.simulate('change', {
      target: {
        value: 'Welcome to Africa, the land of Elephants',
        name: 'description'
      }
    });
    expect(wrapper.state('description')).toEqual(
      'Welcome to Africa, the land of Elephants'
    );
  });
  it('Should insert into tags field', () => {
    const tags = wrapper.find('input[name="tags"]');
    tags.simulate('change', {
      target: {
        value: 'Tourism Beaches Scuba-diving',
        name: 'tags'
      }
    });
    expect(wrapper.state('tags')).toEqual('Tourism Beaches Scuba-diving');
  });
  // it('Should insert into body field', () => {
  //   const CKEditor = wrapper.find('.input__body');
  //   // CKEditor.simulate('change', {
  //   //   ckeeditor: {
  //   //     data: 'Tourism Beaches Scuba-diving in watamu beaches'
  //   //   }
  //   // });
  //   // expect(wrapper.state('body')).toEqual('Tourism Beaches Scuba-diving');
  // });
});

describe('On submit tests', () => {
  const wrapper = renderCreateArtilce();
  it('Should make post request to the server', () => {
    const button = wrapper.find('button');
    button.simulate('click', { preventDefault: jest.fn() });
  });
});
