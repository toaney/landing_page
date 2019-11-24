import React from 'react';
import { shallow } from 'enzyme';
import Feature from './feature';

describe('basic Feature component', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<Feature />).find('div.feature').exists()).toBe(true)
    })

    it('should render with a title', () => {
        const wrapper = shallow(
            <Feature 
                featureTitle = "title"
            />
        );
        expect(wrapper.find('.feature-header').at(0).text()).toEqual("title");
    });

    it('should render with a caption', () => {
        const wrapper = shallow(
            <Feature 
            captionBody = "caption"
            />
        );
        expect(wrapper.find('.feature-caption').at(0).text()).toEqual("caption");
    });
});