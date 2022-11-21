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

  // TODO: 메서드 10줄 이내로 수정 -> errorHandler, successHandler 로직 분리
  #gameProcess() {
    this.view.readBridgeSize((bridgeSize) => {
      const errorHandler = (error) => {
        this.view.printErrorMessage(error.message);
        this.#gameProcess(bridgeSize);
      };

      const successHandler = () => {
        this.model.createBridge(bridgeSize);
        this.#getUserCommand();
      };

      bridgeSize = parseInt(bridgeSize);
      this.model.validateBridgeSize({ bridgeSize, errorHandler, successHandler });
    });
  }

  // TODO: 메서드 10줄 이내로 수정 -> errorHandler, successHandler 로직 분리
  #getUserCommand() {
    this.view.readMoving((command) => {
      const errorHandler = (error) => {
        this.view.printErrorMessage(error.message);
        this.#getUserCommand();
      };

      const successHandler = () => this.#move(command);

      this.model.validateBridgeCommand({ command, errorHandler, successHandler });
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

  // TODO: 메서드 10줄 이내로 수정 -> errorHandler, successHandler 로직 분리
  #askToReplayGame({ bridgeMap, isGameSuccess }) {
    this.view.readGameCommand((replayCommand) => {
      const errorHandler = (error) => {
        this.view.printErrorMessage(error.message);
        this.#askToReplayGame({ bridgeMap, isGameSuccess });
      };

      const successHandler = () =>
        this.#quitOrRetryByCommand({ replayCommand, bridgeMap, isGameSuccess });

      this.model.validateBridgeReplayCommand({ replayCommand, errorHandler, successHandler });
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
