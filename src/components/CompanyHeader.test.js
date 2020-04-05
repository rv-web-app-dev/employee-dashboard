import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme';
configure({ adapter: new Adapter() });
import { CompanyHeader } from './CompanyHeader';

const testCompanyInfo = { companyName: 'Test company', companyMotto: 'Test motto', companyEst: 9999 }
    
it('CompanyHeader renders without crashing', () => {
    ReactDOM.render(<CompanyHeader companyInfo={testCompanyInfo}/>, document.createElement('div'))
})

it('Test CompanyHeader dom content using shallow from enzyme', () => {
   const wrapper = shallow(<CompanyHeader companyInfo={testCompanyInfo}/>)
   expect(wrapper.find('div')).toHaveLength(5);
   expect(wrapper.find('div.company-header')).toHaveLength(1);
   expect(wrapper.find('div.company-header').childAt(0).equals(<div>Test company</div>));
   expect(wrapper.find('div.motto-since').children()).toHaveLength(2);
   expect(wrapper.find('div.motto-since').childAt(0).equals(<div>Test motto</div>));
   expect(wrapper.find('div.motto-since').childAt(1).equals(<div>Since 9999</div>));
   expect(wrapper.find('p')).toHaveLength(0);
})