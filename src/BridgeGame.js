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
    this.readCnt = 0; //입력 횟수
    this.gameCount = 0; //총 시도 횟수
    this.upList = [];
    this.downList = [];
    this.answerCnt = 0; //정답 맞춘 횟수
  }
  generateUpDownList(upDown, answerOrNot) {
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
  }
  getBridgeSize(){
    return this.bridgeSize;
  }
  //upList, downList 조회
  getUpDownList(){
    return [this.upList, this.downList];
  }
  getGameCnt(){
    return this.gameCount;
  }
  //정답 맞힌 횟수 조회
  getAnswerCnt() {
    return this.answerCnt;
  }
  //시도 횟수 증가시키기
  increaseGameCount(){
    return ++this.gameCount;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(upDown) {
    const answerOrNot = upDown == this.gameAnswer[this.readCnt++];
    this.generateUpDownList(upDown, answerOrNot);
    
    return answerOrNot;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    //upList, downList 초기화!! 
    this.upList = [];
    this.downList = [];
    this.readCnt = 0; //어디로 갈지 입력한 횟수도 초기화!
    this.answerCnt = 0; //정답 맞혔던 횟수도 초기화!
  }
}

module.exports = BridgeGame;
