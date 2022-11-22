const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const ViewManager = require('./ViewManager');
const Validator = require('./Validator');
const RetryCommand = require('./constants/RetryCommand');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
	bridge;
	trace;
	tryCnt;
	isCorrect;
	recentMove;

	constructor() {
		this.bridge = [];
		this.trace = '';
		this.tryCnt = 1;
		this.isCorrect = false;
		this.recentMove = '';
	}

	start() {
		ViewManager.start();
		this.setBridge();
	}

	setBridge() {
		ViewManager.setBridge(this.handleBridgeSize.bind(this));
	}

	handleBridgeSize(bridgeSize) {
		const isValid = this.validateBridgeSize(bridgeSize);
		if (!isValid) return;
		const bridge = BridgeMaker.makeBridge(Number(bridgeSize), BridgeRandomNumberGenerator.generate);
		this.bridge = bridge;
		this.move();
	}

	validateBridgeSize(bridgeSize) {
		try {
			Validator.isNumber(bridgeSize);
			Validator.isInValidRange(Number(bridgeSize));
			return true;
		} catch (e) {
			ViewManager.error(e);
			this.setBridge();
			return false;
		}
	}

	/**
	 * 사용자가 칸을 이동할 때 사용하는 메서드
	 * <p>
	 * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	move() {
		ViewManager.move(this.handleMove.bind(this));
	}

	handleMove(move) {
		const isValid = this.validateMove(move);
		if (!isValid) return;
		this.trace += move;
		this.recentMove = move;
		this.evaluateMove();
	}

	validateMove(move) {
		try {
			Validator.isValidMove(move);
			return true;
		} catch (e) {
			ViewManager.error(e);
			this.move();
			return false;
		}
	}

	evaluateMove() {
		if (this.bridge[this.trace.length - 1] === this.recentMove) this.isCorrect = true;
		else this.isCorrect = false;
		ViewManager.map(this.recentMove, this.isCorrect);
		this.goToNextStep();
	}

	goToNextStep() {
		if (!this.isCorrect) {
			this.retry();
			return;
		}
		if (this.trace.length === this.bridge.length) {
			this.finish();
			return;
		}
		this.move();
	}

	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 * <p>
	 * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	retry() {
		ViewManager.retry(this.handleRetryCommand.bind(this));
	}

	handleRetryCommand(command) {
		const isValid = this.validateRetryCommand(command);
		if (!isValid) return;
		if (command === RetryCommand.RETRY) {
			this.trace = this.trace.slice(0, -1);
			this.tryCnt += 1;
			this.move();
			return;
		}
		this.finish();
	}

	validateRetryCommand(command) {
		try {
			Validator.isValidCommand(command);
			return true;
		} catch (e) {
			ViewManager.error(e);
			this.retry();
			return false;
		}
	}

	finish() {
		ViewManager.finish(this.recentMove, this.isCorrect, this.tryCnt);
	}
}

module.exports = BridgeGame;
