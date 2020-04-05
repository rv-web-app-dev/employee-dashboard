import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import { mount } from 'enzyme'
import 'jest-enzyme'
import EmployeeDialog from './EmployeeDialog';

configure({ adapter: new Adapter() });

const clickedCardDetail = {
    id: "9b9b81a1",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/thewillbeard/128.jpg",
    firstName: "William",
    lastName: "Leffler",
    jobTitle: "Direct Intranet Strategist",
    age: 41,
    bio: "Est error aperiam qui ab minus quia dignissimos. Nostrum deleniti quo enim ipsam veniam et qui. Reiciendis consequatur et consectetur quidem ipsa molestiae. Nemo occaecati suscipit aliquam. Aut rem iure minima quam et magnam. Voluptatibus commodi repellendus perferendis.",
    dateJoined: "2017-02-03T11:24:36.952Z"
  };

it('Testcase: Employee dialog component renders with valid DOM content', () => {
    const component = mount(<EmployeeDialog clickedCardDetail={clickedCardDetail}/>)
    expect(component.find('dialog#favDialog').children()).toHaveLength(1)
    expect(component.contains('div#9b9b81a1'))
    expect(component.find({src: clickedCardDetail.avatar})).toHaveLength(1)
    expect(component.find('dialog.left-section').contains(clickedCardDetail.firstName))
    expect(component.find('dialog.left-section').contains(clickedCardDetail.dateJoined))
    expect(component.find('dialog.left-section').contains(clickedCardDetail.jobTitle))
    expect(component.find('dialog.right-section').contains(clickedCardDetail.bio))
})
