const MissionUtils = require("@woowacourse/mission-utils");

const { BRIDGE_ELEMENT, OUTPUT_MESSAGE, GAME_COMMAND } = require("../utils/Constant");

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
    let upperBridge = BRIDGE_ELEMENT.OPEN;
    let lowerBridge = BRIDGE_ELEMENT.OPEN;

    for (let step = 0; step < userMovings.length; step++) {
      const [upperBlock, lowerBlock] = this.drawBridgeBlock(step, bridge, userMovings);
      upperBridge += upperBlock;
      lowerBridge += lowerBlock;
    }

    return [upperBridge + BRIDGE_ELEMENT.CLOSE, lowerBridge + BRIDGE_ELEMENT.CLOSE];
  },

  drawBridgeBlock(step, bridge, userMovings) {
    let upperBlock = this.decideUpperBlock(bridge[step], userMovings[step]);
    let lowerBlock = this.decideLowerBlock(bridge[step], userMovings[step]);

    if (step !== userMovings.length - 1) {
      upperBlock += BRIDGE_ELEMENT.MIDDLE;
      lowerBlock += BRIDGE_ELEMENT.MIDDLE;
    }

    return [upperBlock, lowerBlock];
  },

  decideUpperBlock(bridgeBlock, userBlock) {
    if (userBlock !== GAME_COMMAND.UP) {
      return BRIDGE_ELEMENT.EMPTY;
    }
    if (userBlock !== bridgeBlock) {
      return BRIDGE_ELEMENT.WRONG;
    }
    return BRIDGE_ELEMENT.COLLECT;
  },

  decideLowerBlock(bridgeBlock, userBlock) {
    if (userBlock !== GAME_COMMAND.DOWN) {
      return BRIDGE_ELEMENT.EMPTY;
    }
    if (userBlock !== bridgeBlock) {
      return BRIDGE_ELEMENT.WRONG;
    }
    return BRIDGE_ELEMENT.COLLECT;
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
    MissionUtils.Console.print(OUTPUT_MESSAGE.END);
    this.printMap(bridgeGame);
    MissionUtils.Console.print(OUTPUT_MESSAGE.RESULT + this.checkSuccess(bridgeGame));
    MissionUtils.Console.print(OUTPUT_MESSAGE.TRY + tryCount);
  },

  checkSuccess(bridgeGame) {
    const bridgeString = bridgeGame.getBridge().join("");
    const userString = bridgeGame.getUserMovings().join("");

    return bridgeString === userString
      ? OUTPUT_MESSAGE.SUCCESS
      : OUTPUT_MESSAGE.FAIL;
  },
};

module.exports = OutputView;
