const { Console } = require('@woowacourse/mission-utils');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #retryCount;

  constructor() {
    this.#retryCount = 1;
    this.welcomeMessage();
  }

  welcomeMessage() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(move, bridge) {
    if (bridge.data.turn > 0) {
      bridge.setData('upperBridge', bridge.data.upperBridge + '|');
      bridge.setData('lowerBridge', bridge.data.lowerBridge + '|');
    }
    if (bridge.data.blueprint[bridge.data.turn] === 'U' && move === 'U') {
      bridge.setData('upperBridge', bridge.data.upperBridge + ' O ');
      bridge.setData('lowerBridge', bridge.data.lowerBridge + '   ');
    }
    if (bridge.data.blueprint[bridge.data.turn] === 'U' && move === 'D') {
      bridge.setData('upperBridge', bridge.data.upperBridge + '   ');
      bridge.setData('lowerBridge', bridge.data.lowerBridge + ' X ');

      return true;
    }
    if (bridge.data.blueprint[bridge.data.turn] === 'D' && move === 'U') {
      bridge.setData('upperBridge', bridge.data.upperBridge + ' X ');
      bridge.setData('lowerBridge', bridge.data.lowerBridge + '   ');

      return true;
    }
    if (bridge.data.blueprint[bridge.data.turn] === 'D' && move === 'D') {
      bridge.setData('upperBridge', bridge.data.upperBridge + '   ');
      bridge.setData('lowerBridge', bridge.data.lowerBridge + ' O ');
    }

    bridge.setData('turn', bridge.data.turn + 1);
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(bridge) {
    bridge.retry();
  }

  get retryCount() {
    return this.#retryCount;
  }

  set retryCount(value) {
    this.#retryCount = value;
  }
}

module.exports = BridgeGame;
