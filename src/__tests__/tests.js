import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme';
configure({ adapter: new Adapter() });

import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Tests whether the App is loaded. If its children throws test will pass', () => {
    const wrapper = shallow(<App />);
})
