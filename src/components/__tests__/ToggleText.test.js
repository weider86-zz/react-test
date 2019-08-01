import React from 'react';
import { shallow } from 'enzyme';

import ToggleText from '../ToggleText';

describe('ToggleText', () => {

  it('should render correctly with no props', () => {
    const component = shallow(<ToggleText/>);
    
    expect(component).toMatchSnapshot();
  });

  it('should shown the text', () => {
    const wrapper = shallow(<ToggleText />);
    const text = wrapper.find('h2');
    expect(text.text()).toBe('Text goes here');
  });

  it('should hide the text when button is clicked', () => {
    const wrapper = shallow(<ToggleText />);
    const button = wrapper.find('.button');
    button.simulate('click');
    const text = wrapper.find('h2');
    expect(text.length).toBe(0);
  })

  it('should shown the number', () => {
    const wrapper = shallow(<ToggleText />);
    const num = wrapper.find('h3');
    expect(num.text()).toBe('210885');
  });

  it('shoud change the number when mouse enter in span', () => {
    const wrapper = shallow(<ToggleText />);
    const span = wrapper.find('span');
    span.simulate('mouseover');
    const num = wrapper.find('h3');
    expect(num.text()).toBe('121216');
  });

  it('shoud change back the number when mouseout the span', () => {
    const wrapper = shallow(<ToggleText />);
    const span = wrapper.find('span');
    span.simulate('mouseout');
    const num = wrapper.find('h3');
    expect(num.text()).toBe('210885');
  });

});