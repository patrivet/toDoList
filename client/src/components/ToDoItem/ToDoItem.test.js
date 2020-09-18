import React from 'react';
import { shallow } from 'enzyme';
import ToDoItem from './ToDoItem';

describe('ToDoItem', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ToDoItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
