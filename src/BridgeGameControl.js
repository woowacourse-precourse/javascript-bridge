/* eslint-disable class-methods-use-this */
const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGameControl {
  #inputView;

  constructor() {
    const inputView = Object.create(InputView);
    this.#inputView = inputView;
  }

  make() {
    const bridgeSizeCallback = (input) => {
      Console.print(input);
      this.move();
    };
    this.#inputView.readBridgeSize(bridgeSizeCallback);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    const movingCallback = (input) => {
      Console.print(input);
      this.retry();
    };
    this.#inputView.readMoving(movingCallback);
    Console.print('move');
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    const gameCommandCallback = (input) => {
      Console.print(input);
      Console.close();
    };
    this.#inputView.readGameCommand(gameCommandCallback);
    Console.print('retry');
  }
}

module.exports = BridgeGameControl;
