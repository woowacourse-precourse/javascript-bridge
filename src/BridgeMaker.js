const { checkBridgeSize } = require('./util/validationInput');

const BRIDGE = {
	RANDOM_DOWN: 0,
	RANDOM_UP: 1,
	UP: 'U',
	DOWN: 'D',
	CORRECT: 'O',
	WRONG: 'X',
};

const BridgeMaker = {
	makeBridge: (size, generateRandomNumber) => {
		checkBridgeSize(size);
		return Array.from({ length: size }).map(() => {
			return generateRandomNumber() === BRIDGE.RANDOM_DOWN
				? BRIDGE.DOWN
				: BRIDGE.UP;
		});
	},
};

module.exports = BridgeMaker;
