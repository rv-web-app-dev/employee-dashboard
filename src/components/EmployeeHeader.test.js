import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import { mount } from 'enzyme'
import 'jest-enzyme'
import EmployeeHeader from './EmployeeHeader';

configure({ adapter: new Adapter() });

it('TestCase: Check whether EmployeeHeader returns valid component', () => {
    const component = mount(<EmployeeHeader/>)
    expect(component.find('header.filters-header').children()).toHaveLength(3)

});

it('TestCase: test event handler searchEmployeesis called on change', () => {
    const mockFunction1 = jest.fn() // In-built Jest function mocker
    const component1 = mount(<EmployeeHeader searchEmployees={mockFunction1} />)
    // Test before event
    expect(mockFunction1).not.toHaveBeenCalled()
    // simulate the click event
    component1.find('input#card-search').first().simulate('change')
    // Test after event
    expect(mockFunction1).toHaveBeenCalled()
})