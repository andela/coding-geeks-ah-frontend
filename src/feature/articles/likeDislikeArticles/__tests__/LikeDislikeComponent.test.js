import React from 'react';
import { shallow } from 'enzyme';
import { LikeDislike } from '../LikeDislikeComponent';

const renderLikesAndDislikes = args => {
  const initialProps = {
    handleLike: () => {}
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
