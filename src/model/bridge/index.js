const GameModel = require('../GameModel');
const ErrorBoundary = require('../../error/ErrorBoundary');
const { SizeValidation, CommandValidation, ReplayValidation } = require('../../validate/bridge');
const { makeBridge } = require('../../BridgeMaker');
const { generate } = require('../../BridgeRandomNumberGenerator');
const BridgeMap = require('./BridgeMap');
const { GAME_MESSAGE } = require('../../constants');

const BridgeModel = class extends GameModel {
  #tryCount = 1;
  #bridge;
  #position = 0;
  #commandList = [];

  constructor() {
    super();
    this.errorBoundary = new ErrorBoundary();
  }

  createBridge(bridgeSize) {
    this.#bridge = makeBridge(bridgeSize, generate);
  }

  setStateToReplay() {
    this.#commandList = [];
    this.#position = 0;
    this.#tryCount += 1;
  }

  set addCommandToList(command) {
    this.#commandList.push(command);
    this.#position += 1;
  }

  get getMovedResult() {
    const movedResult = new BridgeMap({
      bridge: this.#bridge,
      position: this.#position,
      commandList: this.#commandList,
    }).getBridgeMap();

    return movedResult;
  }

  getIsGameSuccess(bridgeMap) {
    const isPositionSameWithSize = this.#position === this.#bridge.length;
    const isNonMovableSpaceOnBridge = !bridgeMap.includes('X');

    return isPositionSameWithSize && isNonMovableSpaceOnBridge;
  }

  makeBridgeGameResult({ bridgeMap, isGameSuccess }) {
    const tryCountMessage = GAME_MESSAGE.try_count + this.#tryCount;
    const gameSuccessMessage = this.getGameSuccessMessage(isGameSuccess);

    return [GAME_MESSAGE.result, bridgeMap, gameSuccessMessage, tryCountMessage].join('\n');
  }

  getGameSuccessMessage(isGameSuccess) {
    const { is_success, success, fail } = GAME_MESSAGE;
    const gameResult = isGameSuccess ? success : fail;
    return is_success + gameResult;
  }

  validateUserInput(validateValueCallback) {
    this.errorBoundary.validateInput(validateValueCallback);
  }

  validateBridgeSize(bridgeSize) {
    this.validateUserInput(() => new SizeValidation().validate(bridgeSize));
  }

  validateBridgeCommand(command) {
    this.validateUserInput(() => new CommandValidation().validate(command));
  }

  validateBridgeReplayCommand(replayCommand) {
    this.validateUserInput(() => new ReplayValidation().validate(replayCommand));
  }
};

module.exports = BridgeModel;
