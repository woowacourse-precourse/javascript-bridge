const BridgeMap = require('./BridgeMap');
const User = require('./User');
const Validator = require('./Utils/Validator');
const BridgeControl = require('./BridgeControl');
const { QUIT, RETRY } = require('./Utils/Constant').COMMAND;
const { SUCCESS, FAIL, CONTINUE } = require('./Utils/Constant').BRIDGE;
/**
 * @class BridgeGame
 * @desc 다리 게임을 진행하는 클래스
 */
class BridgeGame {
  #ctrl;
  #bridgeMap;
  #user;

  constructor() {
    this.#user = new User();
    this.#ctrl = new BridgeControl();
  }

  play() {
    this.#ctrl.intro();
    this.#ctrl.make(this.make);
  }

  make = (input) => {
    Validator.bridgeSize(input);
    this.#bridgeMap = new BridgeMap(input);
    this.#ctrl.move(this.move);
  };

  move = (input) => {
    Validator.moving(input);
    const status = this.#bridgeMap.move(input, this.#user.position);
    this.#ctrl.showBridge(this.#bridgeMap, this.#user.position);
    this.selector(status);
  };

  retry = (input) => {
    Validator.gmaeCommand(input);
    if (input === RETRY) this.resetPlay();
    if (input === QUIT) this.#ctrl.End(FAIL, this.#user.round);
  };

  selector(status) {
    if (status === CONTINUE) this.continuePlay();
    if (status === FAIL) this.#ctrl.retry(this.retry);
    if (status === SUCCESS) this.#ctrl.End(SUCCESS, this.#user.round);
  }

  continuePlay() {
    this.#user.setPositionPlus();
    this.#ctrl.move(this.move);
  }

  resetPlay() {
    this.#user.setRoundPlus();
    this.#bridgeMap.resetUserAnswer();
    this.#user.resetPosition();
    this.#ctrl.move(this.move);
  }

  get ctrl() {
    return this.#ctrl;
  }

  get bridgeMap() {
    return this.#bridgeMap;
  }
  get user() {
    return this.#user;
  }
}
module.exports = BridgeGame;
