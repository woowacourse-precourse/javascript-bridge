const { printMap } = require('./\bView/OutputView');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

const BRIDGE = {
	UP: 'U',
	DOWN: 'D',
	CORRECT: 'O',
	WRONG: 'X',
	RANDOM_DOWN: 0,
	RANDOM_UP: 1,
};

class Bridge {
	#bridge;
	constructor(length) {
		this.#bridge = makeBridge(length, generate);
	}

	getBridge() {
		return this.#bridge;
	}

	checkLength(index) {
		return index === this.#bridge.length - 1;
	}

	movable(index, direction) {
		return this.#bridge[index] === direction;
	}

	printBridge(index, isMovable) {
		[BRIDGE.UP, BRIDGE.DOWN].forEach(direction => {
			printMap([...this.#bridge].slice(0, index + 1), direction, isMovable);
		});
	}
}

module.exports = Bridge;
