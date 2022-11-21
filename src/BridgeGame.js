const Bridge = require('./Bridge');
const { checkMoveInput, checkGameCommand } = require('./util/validationInput');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */

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
	/**
	 * 사용자가 칸을 이동할 때 사용하는 메서드
	 * <p>
	 * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	move(input) {
		checkMoveInput(input);
		this.#result.isMovable = this.#bridge.movable(
			this.#currentIndex + 1,
			input,
		);
		this.#currentIndex++;
	}

	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 * <p>
	 * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
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
