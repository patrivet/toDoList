import React from 'react';
import { shallow } from 'enzyme';
import CompletedToggle from './CompletedToggle';

describe('CompletedToggle', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CompletedToggle />);
    expect(wrapper).toMatchSnapshot();
  });
});
