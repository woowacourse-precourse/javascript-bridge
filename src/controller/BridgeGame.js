const MissionUtils = require('@woowacourse/mission-utils');
const { readMoving, readGameCommand } = require('../view/InputView');
const { printResult } = require('../view/OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #gameTry = 1;

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(gameManager, level, command) {
    const result = gameManager.getBridge().checkBridge(level, command);
    if (result && level === gameManager.getBridge().getLength() - 1) {
      return this.win(gameManager);
    }
    if (result) {
      return readMoving(gameManager, level + 1);
    }
    return this.retry(gameManager);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(gameManager) {
    this.#gameTry += 1;
    readGameCommand(gameManager, this);
  }

  win(gameManager) {
    this.quitGame(true, gameManager.getBridge());
  }

  commandProcess(gameManager, command) {
    if (command === 'R') {
      return readMoving(gameManager, 0);
    }
    if (command === 'Q') {
      this.quitGame(false, gameManager.getBridge());
    }
    return null;
  }

  quitGame(result, bridge) {
    printResult(result, this.#gameTry, bridge);
    MissionUtils.Console.close();
  }
}

module.exports = BridgeGame;
