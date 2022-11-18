const { Console } = require('@woowacourse/mission-utils');
const bridgeMaterialize = require('./utils/bridgeMaterialize');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #myBridge;
  #nowState;
  #trycount;
  #isCleared;
  #isClearedBoolean;
  #myBridgeMaterialize;

  constructor(makeRandomNumber, bridgeMaker, size) {
    this.#myBridge = bridgeMaker(size, makeRandomNumber);
    this.#nowState = 0;
    this.#myBridgeMaterialize = this.myBridgeMaterialize();
    this.#trycount = 0;
    this.#isClearedBoolean = true;
    this.#isCleared = '성공';
  }

  myBridgeMaterialize() {
    return bridgeMaterialize(this.#myBridge);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async move(readMoving) {
    const input = await readMoving();
    if (this.#myBridge[this.#nowState] === input) {
      this.#nowState += 1;
      return true;
    }

    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async retry(readGameCommand) {
    this.#trycount += 1;
    const result = await readGameCommand();
    // 결과 이용해 값 유효 여부 확인 후 로직 전개
    if (result === 'R') {
      this.#nowState = 0;
      return true;
    }
    if (result === 'Q') return false;
  }

  printMyBridge(printMap) {
    if (this.#isClearedBoolean) {
      return printMap(
        this.#myBridgeMaterialize,
        this.#nowState - 1,
        this.#isClearedBoolean
      );
    }
    return printMap(
      this.#myBridgeMaterialize,
      this.#nowState,
      this.#isClearedBoolean
    );
  }

  printResultGame(resultFunction) {
    resultFunction(this.#trycount, this.#isCleared);
  }

  gameStateChangeSuccess() {
    this.#isClearedBoolean = true;
    this.#isCleared = '성공';
  }

  gameStateChangeFailure() {
    this.#isClearedBoolean = false;
    this.#isCleared = '실패';
  }
}

module.exports = BridgeGame;
