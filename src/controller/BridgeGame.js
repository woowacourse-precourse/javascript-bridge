const ModeStrategy = require("./Mode/ModeStrategy");
const Bridge = require("../model/Bridge");
const IngState = require("./State/IngState");
const StartState = require("./State/StartState");
const RetryState = require("./State/RetryState");
const EndState = require("./State/EndState");
const State = require("./State/State");

class BridgeGame {
  /** @type {Bridge} */
  #bridge;
  /** @type {State} */
  #state;
  /** @type {ModeStrategy} */
  #mode;
  #result;
  constructor(mode) {
    this.#result = {
      tryCount: 1,
      bridgeWidth: mode.getBridgeWidth(),
      isWin: false,
      data: [[]]
    };
    this.#mode = mode;
    this.#state = new StartState(this.start.bind(this), this.next.bind(this));
  }
	
	#setState(state) {
    this.#state = state;
	}

  next() {
    this.#state.run();
  }

  start(size) {
    this.#bridge = this.#mode.createBridge(size);
    this.#setState(new IngState(this.move.bind(this), this.next.bind(this)));
  }

  move(positionSign) {
    this.#bridge.movePosition(this.#mode.createPosition(positionSign));
    const curResult = this.#bridge.currentResult();
		if (curResult.isFailed())
      this.#setState(new RetryState(this.retry.bind(this), this.next.bind(this)));
    if (curResult.isCompelete()) {
      this.#result.isWin = true;
      this.#setState(new EndState(this.#result));
    }
    this.#result.data = curResult.stringify();
    return this.#result;
  }

  retry(retryCommand) {
    const isRetry = retryCommand === "R" ? true : false;
		if (!isRetry) {
      this.#setState(new EndState(this.#result));
			return;
    }
    this.#result.tryCount += 1;
		this.#bridge.emptyPositions();
    this.#result.data = [[]];
    this.#setState(new IngState(this.move.bind(this), this.next.bind(this)));
  }
}

module.exports = BridgeGame;
