const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR, BUTTON } = require('../Utils/constant');
const BridgeGame = require('../BridgeGame');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  isSucces: MESSAGE.SUCCESS,
  count: 1,
  size: 0,
  printStart() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, size, move) {
    this.size = size;
    const bridgeGame = new BridgeGame(bridge, size, move);
    bridgeGame.realBridge.map((x) =>
      MissionUtils.Console.print(`[ ${x.join('\n')} ]`)
    );
    return this.checkBridge(bridgeGame);
  },

  checkBridge(bridgeGame) {
    if (
      (bridgeGame.realBridge[0].length === this.size &&
        bridgeGame.realBridge[0][bridgeGame.realBridge[0].length - 1] ===
          'O') ||
      (bridgeGame.realBridge[0].length === this.size &&
        bridgeGame.realBridge[1][bridgeGame.realBridge[1].length - 1] === 'O')
    ) {
      return this.printResult(bridgeGame);
    }

    if (bridgeGame.realBridge[0][bridgeGame.realBridge[0].length - 1] === 'O') {
      let move = '';
      MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
        move = answer;
        bridgeGame.moveIsU(move);
        bridgeGame.realBridge.map((x) =>
          MissionUtils.Console.print(`[ ${x.join(' | ')} ]`)
        );
        this.checkBridge(bridgeGame, bridgeGame.realBridge);
      });
    }

    if (bridgeGame.realBridge[1][bridgeGame.realBridge[1].length - 1] === 'O') {
      let move = '';
      MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
        move = answer;
        bridgeGame.moveIsU(move);
        bridgeGame.realBridge.map((x) =>
          MissionUtils.Console.print(`[ ${x.join(' | ')} ]`)
        );
        this.checkBridge(bridgeGame, bridgeGame.realBridge);
      });
    }

    if (bridgeGame.realBridge[0][bridgeGame.realBridge[0].length - 1] === 'X') {
      MissionUtils.Console.readLine(MESSAGE.INPUT_RETRY_OR_QUIT, (answer) => {
        this.retryOrQuitValidate(bridgeGame, answer);
        if (answer === 'R') {
          this.count += 1;
          let move = '';
          MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
            move = answer;
            bridgeGame.retry(move);
            bridgeGame.realBridge.map((x) => {
              MissionUtils.Console.print(`[ ${x.join(' | ')} ]`);
            });
            this.checkBridge(bridgeGame, bridgeGame.realBridge);
          });
        }
      });
    }

    if (bridgeGame.realBridge[1][bridgeGame.realBridge[1].length - 1] === 'X') {
      MissionUtils.Console.readLine(MESSAGE.INPUT_RETRY_OR_QUIT, (answer) => {
        this.retryOrQuitValidate(bridgeGame, answer);
        if (answer === 'R') {
          this.count += 1;
          let move = '';
          MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
            move = answer;
            bridgeGame.retry(move);
            bridgeGame.realBridge.map((x) => {
              MissionUtils.Console.print(`[ ${x.join(' | ')} ]`);
            });
            this.checkBridge(bridgeGame, bridgeGame.realBridge);
          });
        }
      });
    }
  },

  retryOrQuitValidate(bridgeGame, answer) {
    if (answer === BUTTON.QUIT) {
      this.isSucces = MESSAGE.FAIL;
      this.printResult(bridgeGame);
    }
    if (answer !== BUTTON.RETRY && answer !== BUTTON.QUIT) {
      throw new Error(ERROR.RETRY_OR_QUIT);
    }
  },

  moveValidate(move) {
    if (![BUTTON.UP, BUTTON.DOWN].includes(move)) {
      throw err;
    }
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    MissionUtils.Console.print(MESSAGE.RESULT);
    bridgeGame.realBridge.map((x) => {
      MissionUtils.Console.print(`[ ${x.join(' | ')} ]`);
    });
    MissionUtils.Console.print(MESSAGE.isSucces(this.isSucces));
    MissionUtils.Console.print(MESSAGE.printCount(this.count));
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
