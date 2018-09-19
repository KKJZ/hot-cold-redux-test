import * as actions from './actions';

describe('generateAuralUpdate', () => {
	it('Should return the action', () => {
		const action = actions.generateAuralUpdate();
		expect(action.type).toEqual(actions.GENERATE_AURAL_UPDATE);
	})
});

describe('restartGame',() => {
	const number = Math.round(Math.random() * 100) + 1;
	const action = actions.restartGame(number);
	expect(action.type).toEqual(actions.RESTART_GAME);
	expect(action.correctAnswer).toEqual(number);
});

describe('makeGuess', () => {
	const guess = 1;
	const action = actions.makeGuess(guess);
	expect(action.type).toEqual(actions.MAKE_GUESS);
	expect(action.guess).toEqual(guess);
});