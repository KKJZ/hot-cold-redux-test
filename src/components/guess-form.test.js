import React from 'react';
import {shallow} from 'enzyme';

import {GuessForm} from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crash', () => {
		shallow(<GuessForm />);
	});
})