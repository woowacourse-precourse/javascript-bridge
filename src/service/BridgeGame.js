const JudgeInteractor = require('../domain/usecases/JudgeInteractor');
const GameInteractor = require('../domain/usecases/GameInteractor');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(UserInteractor, BridgeInteractor) {
    this.userInteractor = UserInteractor;
    this.brigeInteractor = BridgeInteractor;
    this.JudgeInteractor = new JudgeInteractor(this.userInteractor, this.brigeInteractor);
    this.gameInteractor = new GameInteractor();
  }

  makeBridge(size) {
    this.brigeInteractor.makeBridge(size);
  }

  init() {
    this.gameInteractor.addTry();
    this.userInteractor.init();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.userInteractor.move(direction);
  }

  judge({ success, fending, failure }) {
    if (this.JudgeInteractor.judge()) {
      if (this.JudgeInteractor.isSucceed()) {
        return success();
      }
      return fending();
    }
    failure();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retryTrigger(command, { restart, exit }) {
    this.gameInteractor.triggerGameCommand(command,  { restart, exit });
  }

  exit(isSuccess) {
    return { isSuccess, trys: this.gameInteractor.getTrys() };
  }
}

module.exports = BridgeGame;
