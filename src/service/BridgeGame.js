const JudgeInteractor = require('../domain/usecases/JudgeInteractor');
const GameInteractor = require('../domain/usecases/GameInteractor');
const STATUS = require('./service.constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(UserInteractor, BridgeInteractor) {
    this.userInteractor = UserInteractor;
    this.bridgeInteractor = BridgeInteractor;
    this.JudgeInteractor = new JudgeInteractor(this.userInteractor, this.bridgeInteractor);
    this.gameInteractor = new GameInteractor();
    this.#init();
  }

  makeBridge(size) {
    this.bridgeInteractor.makeBridge(size);
  }

  resetUser() {
    this.userInteractor.init();
  }

  #init() {
    this.gameInteractor.addTry();
    this.resetUser();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.userInteractor.move(direction);
  }

  getGameStatus() {
    if (this.JudgeInteractor.judge()) {
      if (this.JudgeInteractor.isComplete()) return { status: STATUS.done };
      return { status: STATUS.running };
    }
    return { status: STATUS.failure };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command, { restart, exit }) {
    this.gameInteractor.retry(command,  { restart, exit });
  }

  exit(isSuccess) {
    return { isSuccess, trys: this.gameInteractor.getTrys() };
  }
}

module.exports = BridgeGame;
