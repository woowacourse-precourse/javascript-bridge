const { generate } = require("../BridgeRandomNumberGenerator.js");
const { makeBridge } = require("../BridgeMaker.js");
const { pipe } = require("../utils/Misc.js");
const { close } = require("../utils/Io.js");

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
      this.#outputView.printBlank();
      this.#bridgeGameModel.checkBridge(bridge);
      this.#bridgeGameModel.start(bridge);
      task();
    };

    this.#outputView.printStart();
    this.#inputView.readBridgeSize(callback);
  }

  retryGame(processRetryTask) {
    const callback = (input) => {
      this.#bridgeGameModel.checkRetry(input);
      this.#bridgeGameModel.retry(input);
      processRetryTask();
    };

    this.#inputView.readGameCommand(callback);
  }

  endGame() {
    pipe()(
      this.#bridgeGameModel.result.bind(this.#bridgeGameModel),
      this.#outputView.printResult,
      close
    );
  }

  moveGame(processMoveTask) {
    const callback = (move) => {
      this.#bridgeGameModel.checkUser(move);
      pipe(move)(
        this.#bridgeGameModel.update.bind(this.#bridgeGameModel),
        this.#outputView.printMap,
        processMoveTask
      );
    };

    this.#inputView.readMoving(callback);
  }

  processRetry(moveTask, endTask) {
    if (this.#bridgeGameModel.isRetry()) {
      this.#bridgeGameModel.initialize();
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

    this.#bridgeGameModel.isPass() ? retryTask() : moveTask();
  }
};

module.exports = BridgeGameService;
