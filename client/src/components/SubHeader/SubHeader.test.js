import React from 'react';
import { shallow } from 'enzyme';
import SubHeader from './SubHeader';

describe('SubHeader', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<SubHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
