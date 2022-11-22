const Io = require('../utils/io');
const { OUTPUT } = require('../constants/views');
const UiView = require('./UiView');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upCounter, downCounter) {
    Io.output(UiView.setBrigeUi(upCounter));
    Io.output(`${UiView.setBrigeUi(downCounter)}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(finalResult) {
    const { upDownCounter, isSuccess, trial } = finalResult;

    Io.output(OUTPUT.RESULT_TITLE);
    this.printMap(upDownCounter[0], upDownCounter[1]);
    Io.output(OUTPUT.ISSUCCESS(isSuccess));
    Io.output(OUTPUT.TRIAL(trial));
    Io.close();
  },

  printStart() {
    return Io.output(OUTPUT.START);
  },
};

module.exports = OutputView;
