import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('hot-cold reducer', () => {
	const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
	};
	const guess = Math.round(Math.random() * 100) + 1;

	it('Should set the initial state when nothing is passed in', () => {
		const state = reducer(undefined, {type: '_UNKNOWN'});
		expect(state.guesses).toEqual(initialState.guesses);
		expect(state.feedback).toEqual(initialState.feedback);
		expect(state.auralStatus).toEqual(initialState.auralStatus);
	});

	describe('generateAuralUpdate', () => {
		it('Should generate aural update for screen readers', () => {
			let state;
			state = reducer(state, generateAuralUpdate());
			expect(state.auralStatus).toEqual(`Here's the status of the game right now: Make your guess! You've made 0 guesses.`);
		})
	});

	describe('restartGame', () => {
		it('Should return state to initial state', () => {
			let state;
			state = reducer(state, makeGuess(guess));
			expect((state === initialState)).toEqual(!initialState);
			state = reducer(state, restartGame());
			expect(state.guesses).toEqual(initialState.guesses);
			expect(state.feedback).toEqual(initialState.feedback);
			expect(state.auralStatus).toEqual(initialState.auralStatus);
		})
	});

	describe('makeGuess', () => {
		it('Should add a number to guesses array', () => {
			let state;
			state = reducer(state, makeGuess(guess));
			expect(state.guesses.length).toEqual(1);
			state = reducer(state, makeGuess(guess));
			expect(state.guesses.length).toEqual(2);
			state = reducer(state, makeGuess(guess));
			expect(state.guesses.length).toEqual(3);
			state = reducer(state, restartGame());
			expect(state.guesses.length).toEqual(0)
		})
	})
})