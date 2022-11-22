const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGES, MAP } = require('./Constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(game) {
    const bridge = game.getBridge();
    const choices = game.getChoices();

    [MAP.UP, MAP.DOWN].forEach((direction) => {
      MissionUtils.Console.print(
        `${MAP.START}${this.getLine(bridge, choices, direction)}${MAP.END}`
      );
    });
    MissionUtils.Console.print('');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(game) {
    MissionUtils.Console.close();
    MissionUtils.Console.print(MESSAGES.FINAL_RESULT);
    this.printMap(game);
    this.printSuccess(game);
    this.printCount(game);
  },

  getPrintCharacter(selectedDirection, success) {
    if (!selectedDirection) {
      return MAP.EMPTY;
    }
    return success ? MAP.SUCCESS : MAP.FAIL;
  },

  getLine(bridge, choices, direction) {
    let line = '';

    choices.forEach((choice, index) => {
      const selectedDirection = choice === direction;
      const success = choice === bridge[index];

      line += this.getPrintCharacter(selectedDirection, success) + MAP.DIVIDER;
    });
    return line.slice(0, line.length - 3);
  },

  printSuccess(game) {
    const successMsg = game.checkClear()
      ? MESSAGES.GAME_SUCCESS
      : MESSAGES.GAME_FAIL;

    MissionUtils.Console.print(`${MESSAGES.GAME_RESULT}${successMsg}`);
  },

  printCount(game) {
    const count = game.getCount();

    MissionUtils.Console.print(`${MESSAGES.TOTAL_TRY}${count}`);
  },
};

module.exports = OutputView;
