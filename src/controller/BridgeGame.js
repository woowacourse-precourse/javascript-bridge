//@ts-check
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");
const PositionFactory = require("../model/PositionFactory/TwoPositionFactory");
const Bridge = require("../model/Bridge");
const IngState = require("./State/IngState");
const StartState = require("./State/StartState");
const RetryState = require("./State/RetryState");
const EndState = require("./State/EndState");
const State = require("./State/State");

class BridgeGame {
  /** @type {Bridge} */
  #bridge;
  /** @type {number} */
  #tryCount;
  /** @type {PositionFactory} */
  #positionFactory;
  /** @type {State} */
  #state;
  constructor(positionFactory) {
    this.#tryCount = 1;
    this.#positionFactory = positionFactory;
    this.#state = new StartState(this.start.bind(this), this.next.bind(this));
  }
	
	#setState(state) {
    this.#state = state;
	}

  next() {
    this.#state.run();
  }

  start(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridge = new Bridge(bridge.map(position =>
        this.#positionFactory.createPosition(position)));
    this.#setState(new IngState(this.move.bind(this), this.next.bind(this)));
  }

  move(position) {
    this.#bridge.movePosition(this.#positionFactory.createPosition(position));
    const curResult = this.#bridge.currentResult();
		if (curResult.isFailed())
      this.#setState(new RetryState(this.retry.bind(this), this.next.bind(this)));
    if (curResult.isCompelete()) 
      this.#setState(new EndState(true, this.#tryCount, curResult.stringify()));
    return curResult.stringify();
  }

  retry(retryCommand) {
    const isRetry = retryCommand === "R" ? true : false;
		if (!isRetry) {
      this.#setState(new EndState(false, this.#tryCount, this.#bridge.currentResult().stringify()));
			return;
    }
    this.#tryCount += 1;
		this.#bridge.emptyPositions();
    this.#setState(new IngState(this.move.bind(this), this.next.bind(this)));
  }
}

module.exports = BridgeGame;
