import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ProgressBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
