const { Console } = require("@woowacourse/mission-utils");
const { printGameCount } = require("./OutputView");
const OutputView = require("./OutputView");
const{ MOVE_RESULT, GAME_RESULT, BRIDGE_SIZE, BRIDGE_MOVING, GAME_COMMAND } = require("./constants");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(answer, size) {
    this.gameAnswer = answer; //게임 정답 리스트
    this.bridgeSize = size; //다리 길이
    this.readCnt = 0; //입력 횟수
    this.gameCount = 0; //총 시도 횟수
    this.upList = []; //위 칸 리스트(O, X 저장)
    this.downList = [];  //아래 칸 리스트(O, X 저장)
    this.answerCnt = 0; //정답 맞춘 횟수
  }
  updateUpList(isAnswer) {
    if(isAnswer) {
      this.upList.push(MOVE_RESULT.CORRECT);
      this.answerCnt += 1;
    }
    else this.upList.push(MOVE_RESULT.WRONG);
    this.downList.push(' ');
  }

  updateDownList(isAnswer){
    if(isAnswer) {
      this.downList.push(MOVE_RESULT.CORRECT);
      this.answerCnt += 1;
    }
    else this.downList.push(MOVE_RESULT.WRONG);
    this.upList.push(' ');
  }

  generateUpDownList(upDown, isAnswer) {
    if(upDown == BRIDGE_MOVING.UP) {
      this.updateUpList(isAnswer);
    } 
    if(upDown == BRIDGE_MOVING.DOWN) {
      this.updateDownList(isAnswer);
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
    const isAnswer = upDown == this.gameAnswer[this.readCnt++];
    this.generateUpDownList(upDown,isAnswer);
    
    return isAnswer;
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
