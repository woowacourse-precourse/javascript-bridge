const GameCtrl = require('./GameCtrl');

const BridgeGame = class extends GameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
  }

  start() {
    this.view.printGameStart();
    this.#gameProcess();
  }

  #gameProcess() {
    this.view.readBridgeSize((bridgeSize) => {
      try {
        bridgeSize = parseInt(bridgeSize);
        this.model.validateBridgeSize(bridgeSize);
        this.model.createBridge(bridgeSize);
        this.#getUserCommand();
      } catch (error) {
        this.view.printErrorMessage(error.message);
        this.#gameProcess(bridgeSize);
      }
    });
  }

  #getUserCommand() {
    this.view.readMoving((command) => {
      try {
        this.model.validateBridgeCommand(command);
        this.#move(command);
      } catch (error) {
        this.view.printErrorMessage(error.message);
        this.#getUserCommand();
      }
    });
  }

  #move(command) {
    this.model.addCommandToList = command;
    const { isPassed, bridgeMap } = this.model.getMovedResult;
    this.view.printMap(bridgeMap);

    const isGameSuccess = this.model.getIsGameSuccess(bridgeMap);

    if (!isPassed) return this.#askToReplayGame({ bridgeMap, isGameSuccess });
    if (isGameSuccess) return this.#end({ bridgeMap, isGameSuccess });

    return this.#getUserCommand();
  }

  #askToReplayGame({ bridgeMap, isGameSuccess }) {
    this.view.readGameCommand((replayCommand) => {
      try {
        this.model.validateBridgeReplayCommand(replayCommand);
        this.#quitOrRetryByCommand({ replayCommand, bridgeMap, isGameSuccess });
      } catch (error) {
        this.view.printErrorMessage(error.message);
        this.#askToReplayGame({ bridgeMap, isGameSuccess });
      }
    });
  }

  #quitOrRetryByCommand({ replayCommand, bridgeMap, isGameSuccess }) {
    if (replayCommand === 'R') return this.#retry();
    return this.#end({ bridgeMap, isGameSuccess });
  }

  #end({ bridgeMap, isGameSuccess }) {
    const result = this.model.makeBridgeGameResult({ bridgeMap, isGameSuccess });
    this.view.printResult(result);
  }

  #retry() {
    this.model.setStateToReplay();
    this.#getUserCommand();
  }
};

module.exports = BridgeGame;
