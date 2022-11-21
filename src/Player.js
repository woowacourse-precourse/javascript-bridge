const {
	printMap,
	printResult,
	printGameResultMessage,
} = require('./View/OutputView');

const BRIDGE = {
	UP: 'U',
	DOWN: 'D',
	CORRECT: 'O',
	WRONG: 'X',
};

class Player {
	#footprints;
	#result;
	#currentIndex;

	constructor() {
		this.#footprints = [];
		this.#currentIndex = -1;
		this.#result = {
			isMovable: true,
			tryCount: 1,
		};
	}

	move(direction, movable) {
		this.#result.isMovable = movable;
		this.#footprints.push(direction);
		this.#currentIndex++;
	}

	printCurrentFootprints() {
		printMap(this.#footprints, BRIDGE.UP, this.#result.isMovable);
		printMap(this.#footprints, BRIDGE.DOWN, this.#result.isMovable);
	}

	retry() {
		this.#footprints = [];
		this.#currentIndex = -1;
		this.#result.tryCount++;
	}

	getCurrentIndex() {
		return this.#currentIndex;
	}

	printPlayerResult() {
		printGameResultMessage();
		this.printCurrentFootprints();
		printResult(this.#result);
	}

	getIsMovable() {
		return this.#result.isMovable;
	}
}

module.exports = Player;
