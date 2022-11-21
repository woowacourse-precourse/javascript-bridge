/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const { Console } = require('@woowacourse/mission-utils');
성const Result = require("./Result");
const GameManager = require("./GameManager");

class BridgeGame {
  constructor() {
    this.size = null;
    this.bridgeAnswerArr = null;
    this.count = 0;
    this.gameManager = new GameManager();
    this.result = new Result();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(answer) {
      let inputMoving;
      while(!inputMoving) {
        try {
          inputMoving = this.inputView.readMoving();
        } catch (err) {
          Console.print(err.message);
        }
      }
      let result = this.compare(answer, inputMoving);
      this.addResult(result, inputMoving);

      return result;
    }

    addResult(result, inputMoving) {
      if(inputMoving === 'U') {
        this.outputView.upArr.push(result);
        this.outputView.downArr.push(" ");
      }
      if(inputMoving === 'D') {
        this.outputView.downArr.push(result);
        this.outputView.upArr.push(" ");
      }
    }

    compare(answer, input) {
      if(answer === input) return "O";
      return "X";
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    let inputGameCommand;
    while(!inputGameCommand) {
      try {
        inputGameCommand = this.inputView.readMoving();
      } catch (err) {
        Console.print(err.message);
      }

      if(inputGameCommand === 'R') {
        this.count = this.count + 1;
        this.move();
      }
    }
  }


  start() {
    Console.print("다리 건너기 게임을 시작합니다.");
    for (let answer in this.bridgeAnswerArr) {
      let result = this.move(answer);
      this.outputView.printMap();
      if(result === "X") {
        this.retry();
      }
    }
  }
}

module.exports = BridgeGame;
