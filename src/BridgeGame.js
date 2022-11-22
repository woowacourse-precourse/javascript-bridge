/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeLen;
  #bridgeIdx;
  #gameCnt;
  #uBridge;
  #dBridge;
  #ansBridge;

  constructor(){
    this.#bridgeLen = 0;
    this.#bridgeIdx = 0;
    this.#gameCnt = 1;
    this.#uBridge = [];
    this.#dBridge = [];
    this.#ansBridge = [];
  }

  initAnsBridge(ans) {
    this.#ansBridge = ans;
    this.#bridgeLen = ans.length;
  }

  getBridgeLen() {
    return this.#bridgeLen;
  }

  getBridge() {
    return { 'uBridge': this.#uBridge, 'dBridge': this.#dBridge };
  }

  /**
   * 실패하면 true 반환
   */
  isFail() {
    return this.#uBridge.includes('X') || this.#dBridge.includes('X');
  }
  
  getGameCnt() {
    return this.#gameCnt;  
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    if (input == this.#ansBridge[this.#bridgeIdx]) {
      this.#uBridge.push((input == 'U' ? 'O' : ' '));
      this.#dBridge.push((input == 'U' ? ' ' : 'O'));
    } else {
      this.#uBridge.push((input == 'U' ? 'X' : ' '));
      this.#dBridge.push((input == 'U' ? ' ' : 'X'));
    }

  }

  //다리 칸 구분 출력하기
  printSpaceDivision(){
    upperBridge += '| ';
    lowerBridge += '| ';
  }

  //사용자 입력과 정답이 맞는지 검증하기
  verifyInputAndAnswer(input, answer){
    if(input[i] == 'U'){
      upperBridge += cmpUD(input[i], answer[i]) + ' ';
      lowerBridge += '  ';
    }
    if(input[i] == 'D'){
      lowerBridge += cmpUD(input[i], answer[i]) + ' ';
      upperBridge += '  ';
    }
  }

  //사용자 입력과 정답이 같은지 확인하기
  cmpUD(input, ans){
    return input == ans ? 'O':'X';
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#bridgeIdx = 0;
    this.#uBridge = [];
    this.#dBridge = [];
    this.#ansBridge = [];
    this.#bridgeLen = 0;
    this.#gameCnt += 1;
  }



  /**
   * 게임 성공 여부를 반환하는 메서드
   * <p>
   * 마지막 배열을 비교했을 때 true면 success
   */
  isSuccess(input, answer){
    let i = input.length - 1;
    return input[i] == answer[i];
  }
  
}

module.exports = BridgeGame;
