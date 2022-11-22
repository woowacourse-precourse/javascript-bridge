const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  gameIntro() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(choices, bridge, bridgeGame) {
    bridgeGame.checkResult(choices, bridge);
    let upSide = bridgeGame.resultUp.join('');
    let downSide = bridgeGame.resultDown.join('');

    MissionUtils.Console.print(upSide);
    MissionUtils.Console.print(downSide);

    if (choices.length === bridge.length)
      return this.printResult(choices, bridge, bridgeGame.retry);
    if (upSide.includes('X') || downSide.includes('X'))
      return InputView.readGameCommand(bridge);

    InputView.readMoving(bridgeGame, bridge);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(choices, bridge, retry) {
    MissionUtils.Console.print('최종 게임 결과\n');
    this.printMap(choices, bridge);
    MissionUtils.Console.print(
      `\n게임 성공 여부: ${choices.length === bridge.length ? 성공 : 실패}`
    );
    MissionUtils.Console.print(`\n총 시도한 횟수: ${retry}`);
  },
};

module.exports = OutputView;
