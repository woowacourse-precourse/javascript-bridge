const { Console } = require("@woowacourse/mission-utils");
const { printGameCount } = require("./OutputView");
const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(answer, size) {
    this.gameAnswer = answer; //게임 정답 리스트
    this.bridgeSize = size; //다리 길이
    this.gameCount = 0; //총 시도 횟수
    this.upList = [];
    this.downList = [];
    this.answerCnt = 0; //정답 맞춘 횟수
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  showPassorFail() {
    console.log(this.answerCnt, this.upList.length)
    if(this.answerCnt == this.upList.length) {
      OutputView.printResult('P');
      Console.close();
    }
    return;
  }

  move(upDown) {
    const answerOrNot = upDown == this.gameAnswer.shift();
    if(upDown == 'U') {
      if(answerOrNot) {
        this.upList.push('O');
        this.answerCnt += 1;
      }
      else this.upList.push('X');
      this.downList.push(' ');

    } else{ 
      if(answerOrNot) {
        this.downList.push('O');
        this.answerCnt += 1;
      }
      else this.downList.push('X');
      this.upList.push(' ');

    } 
    OutputView.printMap(this.upList, this.downList);
    //this.showPassorFail();
    if(this.upList.length == this.bridgeSize) this.gameCount += 1;
    if(this.answerCnt == this.bridgeSize) {
      this.endGame();
      return Console.close();
    } 
    return answerOrNot;
  }

  endGame() {
    OutputView.printResult('P', this.upList, this.downList);
    OutputView.printGameCount(this.gameCount);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    
  }
}

module.exports = BridgeGame;
