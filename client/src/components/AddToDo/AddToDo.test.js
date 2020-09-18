import React from 'react';
import { shallow } from 'enzyme';
import AddToDo from './AddToDo';

describe('AddToDo', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AddToDo />);
    expect(wrapper).toMatchSnapshot();
  });
});
