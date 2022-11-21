//@ts-check
const BridgeMaker = require("../BridgeMaker");
const PositionFactory = require("../model/PositionFactory/TwoPositionFactory");
const Bridge = require("../model/Bridge");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const IngState = require("./State/IngState");
const StartState = require("./State/StartState");
const RetryState = require("./State/RetryState");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class vBridgeGame {
  /** @type {Bridge} */
  #bridge;
  /** @type {number} */
  #tryCount;
  /** @type {PositionFactory} */
  #positionFactory;
	#state;
  constructor(positionFactory) {
    this.#tryCount = 1;
    this.#positionFactory = positionFactory;
		this.#state = new StartState(this);
  }
	
	#setState(state) {
		this.#state = state;
	}

	next() {
		return this.#state.next();
	}

	getTryCount() {
		return this.#tryCount;
	}

	getCurResult() {
		return this.#bridge.currentResult();
	}

  start(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridge = new Bridge(bridge.map(position => this.#positionFactory.createPosition(position.toUpperCase())));
    this.#setState(new IngState(this));
  }

  move(position) {
    this.#bridge.movePosition(this.#positionFactory.createPosition(position));
    const curResult = this.#bridge.currentResult();
		if (curResult.isFailed())
			this.#setState(new RetryState(this));
    if (curResult.isCompelete()) 
			return true;
		return false;
  }

  retry(retryCommand) {
    const isRetry = retryCommand === "R" ? true : false;
		if (!isRetry)
			return true;
    this.#tryCount += 1;
		this.#bridge.emptyPositions();
    this.#setState(new IngState(this));
		return false;
  }
}

module.exports = vBridgeGame;
