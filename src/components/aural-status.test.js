import React from 'react';
import { shallow } from 'enzyme';

import {AuralStatus} from './aural-status';

describe('<AuralStatus />', () => {
	it('renders without crashing', () => {
		shallow(<AuralStatus />);
	});

	it('Renders an aural status', () => {
		let test = "test";
		let wrapper = shallow(<AuralStatus auralStatus={test} />);
		expect(wrapper.contains(test)).toEqual(true);
	})
})