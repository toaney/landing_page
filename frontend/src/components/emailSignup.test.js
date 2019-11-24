import React from 'react';
import { shallow } from 'enzyme';
import EmailSignup from './emailSignup';

describe('basic EmailSignup component', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<EmailSignup />).find('div.email-signup').exists()).toBe(true)
    })

    it('should render with placeholder text: Email address', () => {
        const wrapper = shallow(<EmailSignup/>);
        expect(wrapper.find('.email-input').at(0).props().placeholder).toEqual("Email address");
    });

    it('should render without error messaging', () => {
        expect(shallow(<EmailSignup />).find('div.email-signup-error').exists()).toBe(false)
    })
});