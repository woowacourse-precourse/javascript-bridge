const { generate } = require("../BridgeRandomNumberGenerator.js");
const { makeBridge } = require("../BridgeMaker.js");
const { pipe } = require("../utils/Misc.js");

const BridgeGameService = class {
  #inputView;
  #outputView;
  #bridgeGameModel;
  constructor(inputView, outputView, bridgeGameModel) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#bridgeGameModel = bridgeGameModel;
  }

  startGame(task) {
    const callback = (size) => {
      const bridge = makeBridge(size, generate);
      this.#bridgeGameModel.checkBridge(bridge);
      this.#bridgeGameModel.try(bridge);
      task();
    };

    this.#outputView.printStart();
    this.#inputView.readBridgeSize(callback);
  }

  retryGame(processRetryTask) {
    const callback = (attempt) => {
      this.#bridgeGameModel.checkRetry(attempt);
      this.#bridgeGameModel.attempt(attempt);
      processRetryTask();
    };

    this.#inputView.readGameCommand(callback);
  }

  endGame() {}

  moveGame(processMoveTask) {
    const callback = (move) => {
      this.#bridgeGameModel.checkUser(move);
      pipe(move)(
        this.#bridgeGameModel.jump.bind(this.#bridgeGameModel),
        this.#outputView.printMap,
        processMoveTask
      );
    };

    this.#inputView.readMoving(callback);
  }

  processRetry(moveTask, endTask) {
    if (this.#bridgeGameModel.isRetry()) {
      moveTask();
      return;
    }

    endTask();
  }

  processMove(retryTask, endTask, moveTask) {
    if (this.#bridgeGameModel.isSuccess()) {
      endTask();
      return;
    }

    this.#bridgeGameModel.isFail() ? retryTask() : moveTask();
  }
};

module.exports = BridgeGameService;
