const Bridge = require('./Bridge');
const { checkMoveInput, checkGameCommand } = require('./util/validationInput');

class BridgeGame {
	#bridge;
	#result;
	#currentIndex;

	constructor(length) {
		this.#bridge = new Bridge(length);
		this.#currentIndex = -1;
		this.#result = {
			isMovable: true,
			tryCount: 1,
		};
	}

	getIsMovable() {
		return this.#result.isMovable;
	}

	getResult() {
		return this.#result;
	}

	move(input) {
		checkMoveInput(input);
		this.#result.isMovable = this.#bridge.movable(
			this.#currentIndex + 1,
			input,
		);
		this.#currentIndex++;
	}

	retry(input) {
		checkGameCommand(input);
		this.#currentIndex = -1;
		this.#result.tryCount++;
	}

	isCrossed() {
		return (
			this.#bridge.checkLength(this.#currentIndex) && this.#result.isMovable
		);
	}

	printCurrent() {
		this.#bridge.printBridge(this.#currentIndex, this.#result.isMovable);
	}
}

module.exports = BridgeGame;
