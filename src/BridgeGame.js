/**
 * 다리 건너기 게임을 관리하는 클래스
 */

const {
  EMPTY_BRIDGE,
  SUCESS_BRIDGE,
  FAIL_BRIDGE,
  UPUP_MESSAGE,
  UPDOWN_MESSAGE,
  DOWNDOWN_MESSAGE,
  DOWNUP_MESSAGE,
} = require('../src/MESSAGES/BridgeMessage');

const { RE_START_MESSAGE } = require('./MESSAGES/GameMessage');
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #Upbridge;
  #Downbridge;
  constructor() {
    this.#Upbridge = [];
    this.#Downbridge = [];
  }
  removeBridge() {
    this.#Downbridge.splice(0, this.#Downbridge.length);
    this.#Upbridge.splice(0, this.#Upbridge);
  }

  move(userMove, bridgeMove) {
    if (bridgeMove === userMove) {
      return true;
    }
    return false;
  }

  moveCase(userMove, bridgeMove) {
    return String(userMove + bridgeMove);
  }

  getUpBridge() {
    return this.#Upbridge.join('|');
  }

  getDownBridge() {
    return this.#Downbridge.join('|');
  }

  /*
  first - > userinput
  second -> avaiable_bridge
  */

  /*
  if userinput is up and avaiable bridge is down
  */

  Upup() {
    this.#Upbridge.push(SUCESS_BRIDGE);
    this.#Downbridge.push(EMPTY_BRIDGE);
    return UPUP_MESSAGE;
  }

  Updown() {
    this.#Upbridge.push(FAIL_BRIDGE);
    this.#Downbridge.push(EMPTY_BRIDGE);
    return UPDOWN_MESSAGE;
  }

  Downup() {
    this.#Upbridge.push(EMPTY_BRIDGE);
    this.#Downbridge.push(FAIL_BRIDGE);
    return DOWNUP_MESSAGE;
  }

  Downdown() {
    this.#Upbridge.push(EMPTY_BRIDGE);
    this.#Downbridge.push(SUCESS_BRIDGE);
    return DOWNDOWN_MESSAGE;
  }

  moveCaseAction(userMove, bridgeMove) {
    const Movestr = this.moveCase(userMove, bridgeMove);
    if (Movestr === 'UU') return this.Upup();

    if (Movestr === 'UD') return this.Updown();

    if (Movestr === 'DU') return this.Downup();

    if (Movestr === 'DD') return this.Downdown();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
