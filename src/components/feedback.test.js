import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', () => {
	it('Renders without crashing.', () => {
		shallow(<Feedback />);
	});

	it('Renders state changes', () => {
		let testGuess = [1,2,3,4,5];
		let testFeedback = 'test!';
		const wrapper = shallow(<Feedback guessCount={testGuess.length} feedback={testFeedback} />);
		expect(wrapper.contains(testFeedback)).toEqual(true);
	})
})