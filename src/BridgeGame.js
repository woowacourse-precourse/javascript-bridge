const Bridge = require('./Bridge');
const Player = require('./Player');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
	#bridge;
	#player;

	constructor(length) {
		this.#player = new Player();
		this.#bridge = new Bridge(length);
	}
	/**
	 * 사용자가 칸을 이동할 때 사용하는 메서드
	 * <p>
	 * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	move(input) {
		const MOVABLE = this.#bridge.movable(
			this.#player.getCurrentIndex() + 1,
			input,
		);
		this.#player.move(input, MOVABLE);
		this.#player.printCurrentFootprints();
		return MOVABLE;
	}

	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 * <p>
	 * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	retry() {
		this.#player.retry();
	}

	isCrossed() {
		return (
			this.#bridge.checkLength(this.#player.getCurrentIndex()) &&
			this.#player.getIsMovable()
		);
	}

	printResult() {
		this.#player.printPlayerResult();
	}
}

module.exports = BridgeGame;
