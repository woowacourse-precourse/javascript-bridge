const MissionUtils = require("@woowacourse/mission-utils");

const { UP_MOVING,
  DOWN_MOVING, 
  OPEN_PARENTHESIS,
  CLOSE_PARENTHESIS,
  MIDDLE_PARENTHESIS,
  COLLECT_SELECT_CASE,
  WRONG_SELECT_CASE,
  NOT_SELECT_CASE,
  SUCCESS_TERMINATION,
  FAIL_TERMINAITION
} = require("./GameCommands");

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
  printMap(bridgeGame) {
    const bridge = bridgeGame.getBridge();
    const userMovings = bridgeGame.getUserMovings();
    const [upperBridge, lowerBridge] = this.drawBridge(bridge, userMovings);

    MissionUtils.Console.print(`${upperBridge}\n`);
    MissionUtils.Console.print(`${lowerBridge}\n`);
  },

  drawBridge(bridge, userMovings) {
    let upperBridge = OPEN_PARENTHESIS;
    let lowerBridge = OPEN_PARENTHESIS;

    for (let step = 0; step < userMovings.length; step++) {
      const [upperBlock, lowerBlock] = this.drawBridgeBlock(step, bridge, userMovings);
      upperBridge += upperBlock;
      lowerBridge += lowerBlock;
    }

    return [upperBridge + CLOSE_PARENTHESIS, lowerBridge + CLOSE_PARENTHESIS];
  },

  drawBridgeBlock(step, bridge, userMovings) {
    let upperBlock = this.decideUpperBlock(bridge[step], userMovings[step]);
    let lowerBlock = this.decideLowerBlock(bridge[step], userMovings[step]);

    if (step !== userMovings.length - 1) {
      upperBlock += MIDDLE_PARENTHESIS;
      lowerBlock += MIDDLE_PARENTHESIS;
    }

    return [upperBlock, lowerBlock];
  },

  decideUpperBlock(bridgeBlock, userBlock) {
    if (userBlock !== UP_MOVING) {
      return NOT_SELECT_CASE;
    }
    if (userBlock !== bridgeBlock) {
      return WRONG_SELECT_CASE;
    }
    return COLLECT_SELECT_CASE;
  },

  decideLowerBlock(bridgeBlock, userBlock) {
    if (userBlock !== DOWN_MOVING) {
      return NOT_SELECT_CASE;
    }
    if (userBlock !== bridgeBlock) {
      return WRONG_SELECT_CASE;
    }
    return COLLECT_SELECT_CASE;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame, tryCount) {
    if (tryCount <= 0) { // bridgeSize = undefined, 게임 실행이 되지 않은 경우 
      return;
    } 
    MissionUtils.Console.print(`최종 게임 결과`);
    this.printMap(bridgeGame);
    MissionUtils.Console.print(`게임 성공 여부: ${this.checkSuccess(bridgeGame)}\n`);
    MissionUtils.Console.print(`총 시도한 횟수: ${tryCount}`);
  },

  checkSuccess(bridgeGame) {
    const bridgeString = bridgeGame.getBridge().join("");
    const userString = bridgeGame.getUserMovings().join("");

    return bridgeString === userString
      ? SUCCESS_TERMINATION
      : FAIL_TERMINAITION;
  },
};

module.exports = OutputView;
