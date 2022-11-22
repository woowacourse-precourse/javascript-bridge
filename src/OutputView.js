const MissionUtils = require('@woowacourse/mission-utils');
const { Message } = require('./Config');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(logger) {
    const { upLog, downLog } = logger.getLog();
    MissionUtils.Console.print(upLog);
    MissionUtils.Console.print(downLog);
    MissionUtils.Console.print('\n');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(logger, isSuccess) {
    const { trials } = logger.getLog();
    MissionUtils.Console.print(Message.GAME_END);
    OutputView.printMap(logger);
    MissionUtils.Console.print(Message.result(isSuccess));
    MissionUtils.Console.print(Message.trials(trials));
  },

  printErrorLog(error) {
    MissionUtils.Console.print(error.message);
    MissionUtils.Console.print('\n');
  },

  printGameStartMessage() {
    MissionUtils.Console.print(Message.GAME_START);
    MissionUtils.Console.print('\n');
  },
};

module.exports = OutputView;
