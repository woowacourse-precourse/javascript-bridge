/**
 * 다리 건너기 게임을 관리하는 클래스
 * 
 * 제약사항 정리
 * 1. InputView, OutputView 를 사용하지 않는다.
 * 2. 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
 * 3. BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
 * 4. BridgeGame의 파일 경로는 변경할 수 있다.
 * 5. BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 6. 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
 */

class BridgeGame {
  #bridgeInfo;
  #moveCnt;
  #moveInfo;
  #tryCnt;

  constructor() {
    this.#bridgeInfo = [];
    this.#moveCnt = 0;
    this.#moveInfo = [];
    this.#tryCnt = 1;
  }

  setBridge(bridge) {
    this.#bridgeInfo = bridge;
  }

  printBridge(outputView) {
    outputView.printMap(this.#moveInfo);
  }

  printResults(outputView, successFlag) {
    outputView.printResult(this.#moveInfo, this.#tryCnt, successFlag);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  // 1. 실패 : 일치하지 않으면 갈 수 없음
  // 2. 성공 : 사용자가 입력했을 때 bridgeInfo의 해당 인덱스의 값이 일치하면 갈 수 있음, 일치한다면 moveCnt++
  // 3. 게임 종료 : 만약에 moveCnt가 다리 길이와 같다면 게임 성공한 것임
  // 즉, 결과 리턴여부는 1. 실패 / 2. 성공 / 3. 게임 종료 
  move(moving) {
    if(this.#bridgeInfo[this.#moveCnt] !== moving) {
      this.#moveInfo.push({'moving': moving, 'success': false});
      return 'fail';
    } else if(this.#moveCnt + 1 === this.#bridgeInfo.length) {
      this.#moveInfo.push({'moving': moving, 'success': true});
      return 'success';
    } else if(this.#bridgeInfo[this.#moveCnt] === moving) {
      this.#moveInfo.push({'moving': moving, 'success': true});
      this.#moveCnt += 1;
      return 'next';
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    if(command === 'R') {
      this.retrySetting();
      return 'retry';
    } else if(command === 'Q') {
      return 'quit';
    }
  }

  retrySetting() {
    this.#tryCnt += 1;
    this.#moveCnt = 0;
    this.#moveInfo = [];
  }

}

module.exports = BridgeGame;
