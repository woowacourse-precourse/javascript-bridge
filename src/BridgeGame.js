const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const generateRandomNumber = require("./BridgeRandomNumberGenerator").generate;
const { close } = require("./utils");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #numberOfAttempt = 0;
  #myPosition = 0;
  #currentMap = { upperPart: [], lowerPart: [] };
  #validPath;

  getBridgeLengthFromUser() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  initState() {
    this.#currentMap = { upperPart: [], lowerPart: [] };
    this.#myPosition = 0;
  }

  makeBridge(bridgeSize) {
    this.#validPath = BridgeMaker.makeBridge(bridgeSize);
    // 유효성 검사
    console.log(this.#validPath);
    this.getMoveDirectionFromUser();
  }

  getMoveDirectionFromUser() {
    InputView.readMoving(this.move.bind(this));
  }

  isValidPath(toBeMoveDirection) {
    return toBeMoveDirection === this.#validPath[this.#myPosition];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    // 위쪽이고 옳은 길 이면? 틀린 길 이면? 아래쪽이고 옳은 길이면? 틀린 길 이면?'
    //console.log("이동시작", this.isValidPath(direction), this.#myPosition, this.#currentMap);
    if (this.isValidPath(direction)) {
      if (direction === 1) this.#currentMap.upperPart.push("O");
      if (direction === 0) this.#currentMap.lowerPart.push("O");
      this.fillBlankUnselectedPath(Number(!direction));
    }
    if (!this.isValidPath(direction)) {
      this.askUserRestart();
    }
  }

  askUserRestart() {
    InputView.readGameCommand(this.updateRestartOrNot.bind(this));
  }

  updateRestartOrNot(restartStatus) {
    if (restartStatus === "R") this.retry();
    if (restartStatus === "Q") this.quit();
  }

  fillBlankUnselectedPath(direction) {
    direction === 1 ? this.#currentMap.upperPart.push(" ") : this.#currentMap.lowerPart.push(" ");
  }

  quit() {
    this.close();
  }

  close() {
    close();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.initState();
    this.#numberOfAttempt += 1;
    this.getMoveDirectionFromUser();
  }
}

module.exports = BridgeGame;
const a = new BridgeGame();
a.getBridgeLengthFromUser();
