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

	checkLength(index) {
		return index === this.#bridge.length - 1;
	}

	movable(index, direction) {
		return this.#bridge[index] === direction;
	}

	printBridge(lastIndex, isMovable) {
		let bridge = [...this.#bridge].slice(0, lastIndex);
		if (!isMovable) {
			bridge.push(
				this.#bridge[lastIndex] === BRIDGE.UP ? BRIDGE.DOWN : BRIDGE.UP,
			);
		} else bridge.push(this.#bridge[lastIndex]);
		[BRIDGE.UP, BRIDGE.DOWN].forEach(direction => {
			printMap(bridge, direction, isMovable);
		});
	}
}

module.exports = Bridge;
