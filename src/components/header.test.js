import React from 'react';
import {shallow} from 'enzyme';

import {Header} from './guess-count';

describe('<Header />', () => {
	it('Renders without crash', () => {
		shallow(<Header />);
	});
})