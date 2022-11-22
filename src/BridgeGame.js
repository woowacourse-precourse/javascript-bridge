const Bridge = require('./Bridge');
const RoundProcess = require('./RoundProcess');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #makeBridge;
  #roundProcess;
  #tryCount;
  #bridge;
  #roundInfo;

  constructor(){
    this.#makeBridge = new Bridge();
    this.#roundProcess = new RoundProcess();
    this.#tryCount = 1;
    this.#bridge = [];
    this.#roundInfo = [];
  }

  createBridge(size){
    this.#bridge = this.#makeBridge.make(size);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userInput) {
    this.#roundInfo.push(userInput);
    const [correctChoice, UserIsWinner] = this.#roundProcess.checkProcess(this.#bridge, this.#roundInfo);
    return [correctChoice, UserIsWinner];
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    if(command === 'R'){
      this.#roundInfo = [];
      this.#tryCount += 1;
      return true;
    }
    return false;
  }

  getGameInfo() {
    return [this.#roundInfo, this.#bridge, this.#tryCount];
  }

  getRoundInfo() {
    return this.#roundInfo;
  }
  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = BridgeGame;
