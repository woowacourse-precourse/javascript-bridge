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
      const callbackHandler = this.#defineGameProcessHandlers(bridgeSize);
      this.model.validation.validateBridgeSize(bridgeSize, callbackHandler);
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
      const callbackHandler = this.#defineGetUserCommandHandlers(command);
      this.model.validation.validateBridgeCommand(command, callbackHandler);
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

  #askToReplayGame(gameResult) {
    this.view.readGameCommand((replayCommand) => {
      const callbackHandler = this.#defineAskToReplayGameHandlers(replayCommand, gameResult);
      this.model.validation.validateBridgeReplayCommand(replayCommand, callbackHandler);
    });
  }

  #defineAskToReplayGameHandlers(replayCommand, gameResult) {
    const errorHandler = (error) => {
      this.view.printErrorMessage(error.message);
      this.#askToReplayGame(gameResult);
    };

    const successHandler = () => this.#quitOrRetryByCommand(replayCommand, gameResult);

    return { errorHandler, successHandler };
  }

  #quitOrRetryByCommand(replayCommand, { bridgeMap, isGameSuccess }) {
    if (replayCommand === CHOICE.replay) return this.#retry();
    return this.#end({ bridgeMap, isGameSuccess });
  }

  #end(gameResult) {
    const result = this.model.makeBridgeGameResult(gameResult);
    this.view.printResult(result);
  }

  #retry() {
    this.model.setStateToReplay();
    this.#getUserCommand();
  }
};

module.exports = BridgeGame;
