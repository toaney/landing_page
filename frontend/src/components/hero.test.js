import React from 'react';
import { shallow } from 'enzyme';
import Hero from './hero';

describe('basic Hero component', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<Hero />).find('div.hero').exists()).toBe(true)
    })

    it('should render with a title', () => {
        const wrapper = shallow(
            <Hero 
                heroTitle="Hero title"
            />
        );
        expect(wrapper.find('.hero-title').at(0).text()).toEqual("Hero title");
    });
});