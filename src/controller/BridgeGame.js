const MissionUtils = require('@woowacourse/mission-utils');
const { COMMAND } = require('../utils/constant');
const { readMoving, readGameCommand } = require('../view/InputView');
const { printResult } = require('../view/OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #gameManager;

  #bridge;

  #gameTry = 1;

  constructor(gameManager) {
    this.#gameManager = gameManager;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(level, command) {
    const result = this.#gameManager.getBridge().checkBridge(level, command);
    if (result && level === this.#gameManager.getBridge().getLength() - 1) {
      return this.win(this.#gameManager);
    }
    if (result) {
      return readMoving(this.#gameManager, level + 1);
    }
    return this.retry(this.#gameManager);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#gameTry += 1;
    readGameCommand(this.#gameManager, this);
  }

  win() {
    this.quitGame(true, this.#gameManager.getBridge());
  }

  commandProcess(command) {
    if (command === COMMAND.RETRY) {
      return readMoving(this.#gameManager, 0);
    }
    if (command === COMMAND.QUIT) {
      this.quitGame(false, this.#gameManager.getBridge());
    }
    return null;
  }

  quitGame(result, bridge) {
    printResult(result, this.#gameTry, bridge);
    MissionUtils.Console.close();
  }
}

module.exports = BridgeGame;
