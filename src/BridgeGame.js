/*
  * 다리 건너기 게임을 관리하는 클래스
    제공된 BridgeGame 클래스를 활용해 구현해야 한다.
    BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
    BridgeGame의 파일 경로는 변경할 수 있다.
    BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
    게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
 */
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class BridgeGame {
  #bridgeSize;
  #bridgeStyle;

  constructor() {
    this.setBridge();
  }

  setBridge() {
    this.#bridgeSize = InputView.readBridgeSize();
    this.#bridgeStyle = BridgeMaker(
      this.#bridgeSize,
      BridgeRandomNumberGenerator
    );
  }

  gameStart() {
    let termination = false;
    let tryCount = 1;

    while (!termination) {
      termination = this.playGame(userMoving);
      termination = !this.retry();
      tryCount++;
    }

    OutputView.printResult();
  }

  playGame() {
    const userMoving = []; // TODO: 어떤걸 move로 쓰고 어떤 걸 moving으로 쓸지 정해야 함
    for (let round = 0; round < this.#bridgeSize; round++) {
      const isCorrectMoving = this.move(userMoving, round);
      if (!isCorrectMoving) {
        return false;
      }
    }

    return true;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userMoving) {
    const moving = InputView.readMoving();
    const isCorrectMoving = this.checkMoving(userMoving);
    userMoving.push(moving);
    OutputView.printMap(this.#bridgeStyle, userMoving);

    return isCorrectMoving;
  }

  checkMoving(userMoving) {
    const currRound = userMoving.length - 1;
    
    if (this.#bridgeStyle[currRound] !== userMoving[currRound]) {
      return false;
    }

    return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    const isRetry = InputView.readGameCommand();

    return isRetry === "R" ? true : false;
  }
}

module.exports = BridgeGame;
