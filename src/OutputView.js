const MissionUtils = require("@woowacourse/mission-utils");
const {
  END_GAME_RESULT_TITLE,
  END_GAME_RESULT_SUB_TITLE,
  END_GAME_SUCCESS,
  END_GAME_FAIL,
  END_GAME_TRIAL_COUNT,
  DOWN_BRIDGE_SYMBOL,
  UP_BRIDGE_SYMBOL,
  NOT_CORRECT_BRIDGE_SYMBOL,
  CORRECT_BRIDGE_SYMBOL,
} = require("./Constant");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, order, fault) {
    const { upBridge, downBridge } = this.makePrintMap(bridge, order, fault);
    MissionUtils.Console.print(`[ ${upBridge.join(" | ")} ]`);
    MissionUtils.Console.print(`[ ${downBridge.join(" | ")} ]`);
  },

  makePrintMap(bridge, order, fault) {
    const newBridge = [...bridge];
    const result = { upBridge: [], downBridge: [] };
    if (fault) newBridge[order] = newBridge[order] === DOWN_BRIDGE_SYMBOL ? UP_BRIDGE_SYMBOL : DOWN_BRIDGE_SYMBOL;
    for (let i = 0; i <= order; i += 1) {
      const char = i === order && fault ? NOT_CORRECT_BRIDGE_SYMBOL : CORRECT_BRIDGE_SYMBOL;
      result.downBridge[i] = newBridge[i] === DOWN_BRIDGE_SYMBOL ? char : " ";
      result.upBridge[i] = newBridge[i] === UP_BRIDGE_SYMBOL ? char : " ";
    } return result;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameManager, result) {
    MissionUtils.Console.print(`\n${END_GAME_RESULT_TITLE}`);
    this.printMap(gameManager.getBridge(), gameManager.getOrder(), !result);
    MissionUtils.Console.print(`\n${END_GAME_RESULT_SUB_TITLE} ${result ? END_GAME_SUCCESS : END_GAME_FAIL}`);
    MissionUtils.Console.print(`${END_GAME_TRIAL_COUNT} ${gameManager.getTrial()}`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;

