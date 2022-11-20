const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class Bridge {
	#bridge;
	constructor(length) {
		this.#bridge = makeBridge(length, generate);
	}

	movable(index, userDirection) {
		return this.#bridge[index] === userDirection;
	}

	checkLength(index) {
		return index === this.#bridge.length - 1;
	}
}

module.exports = Bridge;
