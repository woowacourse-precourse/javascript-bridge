const { CHOICE } = require('../constants');
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
      bridgeSize = parseInt(bridgeSize);

      const { errorHandler, successHandler } = this.#defineGameProcessHandlers(bridgeSize);
      this.model.validateBridgeSize({ bridgeSize, errorHandler, successHandler });
    });
  }

  #defineGameProcessHandlers(bridgeSize) {
    const errorHandler = (error) => {
      this.view.printErrorMessage(error.message);
      this.#gameProcess(bridgeSize);
    };

    const successHandler = () => {
      this.model.createBridge(bridgeSize);
      this.#getUserCommand();
    };

    return { errorHandler, successHandler };
  }

  #getUserCommand() {
    this.view.readMoving((command) => {
      const { errorHandler, successHandler } = this.#defineGetUserCommandHandlers(command);
      this.model.validateBridgeCommand({ command, errorHandler, successHandler });
    });
  }

  #defineGetUserCommandHandlers(command) {
    const errorHandler = (error) => {
      this.view.printErrorMessage(error.message);
      this.#getUserCommand();
    };

    const successHandler = () => this.#move(command);

    return { errorHandler, successHandler };
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
      const { errorHandler, successHandler } = this.#defineAskToReplayGameHandlers({
        replayCommand,
        bridgeMap,
        isGameSuccess,
      });

      this.model.validateBridgeReplayCommand({ replayCommand, errorHandler, successHandler });
    });
  }

  #defineAskToReplayGameHandlers({ replayCommand, bridgeMap, isGameSuccess }) {
    const errorHandler = (error) => {
      this.view.printErrorMessage(error.message);
      this.#askToReplayGame({ bridgeMap, isGameSuccess });
    };

    const successHandler = () =>
      this.#quitOrRetryByCommand({ replayCommand, bridgeMap, isGameSuccess });

    return { errorHandler, successHandler };
  }

  #quitOrRetryByCommand({ replayCommand, bridgeMap, isGameSuccess }) {
    if (replayCommand === CHOICE.replay) return this.#retry();
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
