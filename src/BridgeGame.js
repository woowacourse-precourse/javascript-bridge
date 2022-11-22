const { MOVE_RESULT, BRIDGE_MOVING } = require("./constants");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #gameAnswer;
  #bridgeSize; 

  constructor(gameAnswer, bridgeSize) {
    this.#gameAnswer = gameAnswer; //게임 정답 리스트
    this.#bridgeSize = bridgeSize; //다리 길이
    this.readCnt = 0; //입력 횟수
    this.gameCount = 0; //총 시도 횟수
    this.upList = []; //위 칸 리스트(O, X 저장)
    this.downList = [];  //아래 칸 리스트(O, X 저장)
    this.answerCnt = 0; //정답 맞춘 횟수
  }

  getAnswer() {
    return this.#gameAnswer;
  }
  //다리 길이 조회
  getBridgeSize(){
    return this.#bridgeSize;
  }
  //upList, downList 조회
  getUpDownList(){
    return [this.upList, this.downList];
  }
  //시도 횟수 조회
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
  //위 칸들 리스트, 아래 칸들 리스트 업데이트하기
  updateUpDownList(upDown, isAnswer) {
    if(upDown == BRIDGE_MOVING.UP) {
      this.updateUpList(isAnswer);
    } 
    if(upDown == BRIDGE_MOVING.DOWN) {
      this.updateDownList(isAnswer);
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} upDown
   * @return {string} 
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(upDown) {
    const isAnswer = upDown == this.getAnswer()[this.readCnt++];
    this.updateUpDownList(upDown, isAnswer);
    
    return isAnswer; //움직인 결과가 정답인지 반환
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
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
