import React from 'react';
import { shallow } from 'enzyme';
import Nav from './nav';

describe('basic Nav component', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<Nav />).find('div.nav').exists()).toBe(true)
    })
});