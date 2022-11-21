const Validation = require('../Utilities/Validation');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #turn = 0;
  #userLife = true;
  #attemptNumber = 1;

  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  start() {
    this.getBridgeSize();
    this.gameStart();
  }

  gameStart() {
    this.move();
    this.isUserSucess();
    this.isUserAlive();
    this.isUserDead();
  }

  isUserAlive() {
    if (this.#userLife && this.#turn !== this.model.bridge.length) {
      this.gameStart();
    }
  }

  isUserDead() {
    if (!this.#userLife) {
      this.retry();
    }
  }

  isUserSucess() {
    if (this.#userLife && this.#turn === this.model.bridge.length) {
      this.end();
    }
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.view.readMoving(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)',
      (userMove) => {
        this.#userLife = this.model.aliveOrDeath(userMove, this.#turn);
        this.#turn += 1;
        this.view.printMap(this.model.upsideBridge, this.model.downSideBridge);
      },
    );
  }

  getBridgeSize() {
    this.view.readBridgeSize('다리의 길이를 입력해주세요. ', (bridgeSize) => {
      this.model.genBridge(bridgeSize);
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#turn = 0;
    this.#attemptNumber = 1;
    this.askUserRetry();
  }

  end() {
    this.view.printResultBridge(
      this.model.upsideBridge,
      this.model.downSideBridge,
    );
    this.view.printResult(this.#userLife, this.#attemptNumber);
  }

  askUserRetry() {
    this.view.readGameCommand(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
      (userRetry) => {
        Validation.isUserRetryValid(userRetry);
        this.retryOrQuit(userRetry);
      },
    );
  }

  retryOrQuit(userRetry) {
    if (userRetry === 'R') {
      this.model.reset();
      this.#attemptNumber += 1;
      this.#userLife = true;
      this.gameStart();
    }
    if (userRetry === 'Q') {
      this.end();
    }
  }
}

module.exports = BridgeGame;
