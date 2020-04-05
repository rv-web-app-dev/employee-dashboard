import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import { mount } from 'enzyme'
import 'jest-enzyme'
import EmployeeGrid from "./EmployeeGrid"

configure({ adapter: new Adapter() });

const testEmployees = [
    {
      id: "9b9b81a1",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/thewillbeard/128.jpg",
      firstName: "William",
      lastName: "Leffler",
      jobTitle: "Direct Intranet Strategist",
      age: 41,
      bio: "Est error aperiam qui ab minus quia dignissimos. Nostrum deleniti quo enim ipsam veniam et qui. Reiciendis consequatur et consectetur quidem ipsa molestiae. Nemo occaecati suscipit aliquam. Aut rem iure minima quam et magnam. Voluptatibus commodi repellendus perferendis.",
      dateJoined: "2017-02-03T11:24:36.952Z"
    },
    {
      id: "e1de01d9",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/joeymurdah/128.jpg",
      firstName: "Lola",
      lastName: "Quigley",
      jobTitle: "Human Usability Specialist",
      age: 17,
      bio: "Non tempora eum repellendus maxime ex corporis in blanditiis. Voluptatem ut pariatur omnis aliquam nesciunt. Nostrum pariatur velit quibusdam aliquid explicabo provident optio sequi. Fuga suscipit dolorem velit et. Repellendus qui impedit cum error officia. Aliquam saepe eum et dolores nihil unde.",
      dateJoined: "2012-03-08T19:12:24.693Z"
    }
];
describe('TestSuite: employee grid testing using enzyme mount. Full DOM rendering', () => {
    it('TestCase: component should render', () => {
        const component = mount(<EmployeeGrid employees={testEmployees} />)
        expect(component.find('div.card-grid')).toHaveLength(1)
        expect(component.find('div.card-grid').children()).toHaveLength(2)
        expect(component.find('div.card-grid').contains('div#9b9b81a1'))
        expect(component.find('div.card-grid').contains('div#e1de01d9'))
    })

    it('TestCase: test event handler using enzyme simulate', () => {
        const mockFunction1 = jest.fn() // In-built Jest function mocker
        const component1 = mount(<EmployeeGrid employees={testEmployees} fetchCardId={mockFunction1} />)
        // Test before event
        expect(mockFunction1).not.toHaveBeenCalled()
        // simulate the click event
        component1.find('div.card').first().simulate('click')
        // Test after event
        expect(mockFunction1).toHaveBeenCalled()
    })
})