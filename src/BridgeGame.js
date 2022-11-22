/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeAnswer;
  #currentBridge = [[], []];
  #current = 0
  #tryCount = 1;

  constructor(bridgeAnswer) {
    this.#bridgeAnswer = bridgeAnswer;
  }

  setCurrentBridge(currentBridge) {
    this.#currentBridge = currentBridge;
  }

  setCurrent(current) {
    this.#current = current;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movingInput) {
    this.isCorrect(movingInput) ? 
      this.MoveToCorrectBridge(movingInput) : this.MoveToWrongBridge(movingInput);
      
    return this.#currentBridge;
  }

  isCorrect(movingInput) {
    if (movingInput === this.#bridgeAnswer[this.#current]) {
      this.#current++;
      return true;
    } 
    return false;
  }

  // 정답일 때 실행할 메서드
  MoveToCorrectBridge(movingInput) {
    if (movingInput === 'U') this.makeCorrectUpBridge();
    if (movingInput === 'D') this.makeCorrectDownBridge();
  }

  // 틀렸을 때 실행할 메서드
  MoveToWrongBridge(movingInput) {
    if (movingInput === 'U') this.makeWrongUpBridge();
    if (movingInput === 'D') this.makeWrongDownBridge();
  }

  makeCorrectUpBridge() {
    this.#currentBridge[0].push('O');
    this.#currentBridge[1].push(' ');
  }

  makeCorrectDownBridge() {
    this.#currentBridge[0].push(' ');
    this.#currentBridge[1].push('O');
  }

  makeWrongUpBridge() {
    this.#currentBridge[0].push('X');
    this.#currentBridge[1].push(' ');
  }

  makeWrongDownBridge() {
    this.#currentBridge[0].push(' ');
    this.#currentBridge[1].push('X');
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(gameCommandInput) {
    if (gameCommandInput === 'Q') {
      return false;
    }
    this.#tryCount++;
    return true;
  }

  checkGameSuccess() {
    if (this.#bridgeAnswer.length === this.#currentBridge.length) {
      return true;
    }
    return false;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = BridgeGame;
