/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const { Console } = require('@woowacourse/mission-utils');
const Result = require("./Result");
const GameManager = require("./GameManager");

class BridgeGame {
  constructor() {
    this.isSuccess = null;
    this.bridgeAnswerArr = null;
    this.attempts = 1;
    this.gameManager = new GameManager();
    this.result = new Result();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(answer, inputMoving) {
    let result = this.result.compare(answer, inputMoving);
    this.result.addResult(result, inputMoving);

    return result;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.attempts = this.attempts + 1;
    this.result = new Result();
    let gameCommand = this.gameManager.setGameCommand();
    if (gameCommand === 'R') this.play();
    if (gameCommand === 'Q') this.result.printFinalResult(this.isSuccess, this.attempts);
  }

  start() {
    Console.print("다리 건너기 게임을 시작합니다.");
    this.play();
  }

  play() {

    for (let answer in this.bridgeAnswerArr) {
      let inputMoving = this.gameManager.setMoving();
      let result = this.move(answer, inputMoving);
      this.result.printResult();

      if(result === "X") {
        this.isSuccess = false;
        this.retry();
      }
    }
    this.isSuccess = true;
    this.retry()
  }
}

module.exports = BridgeGame;