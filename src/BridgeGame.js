const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./View/InputView");
// 필드 추가 가능, 파일 경로 변경 가능, 메서드 이름 변경 불가능, 인자 변경 가능, 메서드 추가 가능
// BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const { printResult, printMap } = require("./View/OutputView");
class BridgeGame {
  #correct;
  #command;
  #tryCount;
  #bridgeMap;

  constructor(size) {
    this.#tryCount = 1;
    this.#bridgeMap = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(location, input) {
    if (this.#bridgeMap[location] === input) {
      return true;
    }
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryCount += 1;
  }

  getTryCount() {
    return this.#tryCount;
  }

  getBridgeMap() {
    return this.#bridgeMap;
  }

  start() {
    let location = 0;
    while (location <= this.#bridgeMap.length - 1) {
      this.#correct = this.move(location++, InputView.readMoving());
      printMap(this.getBridgeMap(), location, this.#correct);
      // if (this.#correct && location === this.#bridgeMap.length - 1) break;
      if (!this.#correct) {
        location = this.getCommand(game, location);
      }
    }
    printResult(this, location, this.#correct);
  }

  getCommand(location) {
    this.#command = InputView.readGameCommand();
    if (this.#command === KEY.RETRY) {
      this.retry();
      return 0;
    }
    return this.#bridgeMap.length;
  }
}

module.exports = BridgeGame;
