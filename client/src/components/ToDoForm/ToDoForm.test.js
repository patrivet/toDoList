import React from 'react';
import { shallow } from 'enzyme';
import AddToDo from './ToDoForm';

describe('ToDoForm', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ToDoForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
