const { RESULT } = require('./utils/Constants');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./utils/BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
	#infomation = {
		bridge: [],
		round: 0,
		state: true,
		movingLogs: [],
		try: 1,
		gameResult: '',
	};

	createBridge(size) {
		this.#infomation.bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
	}
	/**
	 * 사용자가 칸을 이동할 때 사용하는 메서드
	 * <p>
	 * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	move(moving) {
		this.#infomation.state = this.#checkState(moving);
		this.#infomation.movingLogs.push({ moving, state: this.#infomation.state });
		this.#infomation.round += 1;
	}

	getMovingLogs() {
		return this.#infomation.movingLogs;
	}

	isNotMatched() {
		return this.#infomation.state === false;
	}

	checkFinish() {
		const { round, bridge } = this.#infomation;
		return round === bridge.length;
	}

	getGameResult() {
		return this.#infomation.gameResult;
	}

	getTryCount() {
		return this.#infomation.try;
	}

	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 * <p>
	 * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	retry() {
		this.#resetInformation();
		this.#infomation.try += 1;
	}

	win() {
		this.#infomation.gameResult = RESULT.win;
	}

	fail() {
		this.#infomation.gameResult = RESULT.fail;
	}

	#resetInformation() {
		this.#infomation.round = 0;
		this.#infomation.state = true;
		this.#infomation.movingLogs = [];
	}

	#checkState(moving) {
		const { bridge, round } = this.#infomation;
		return moving === bridge[round];
	}
}

module.exports = BridgeGame;
