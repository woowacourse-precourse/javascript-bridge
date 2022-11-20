const Io = require('../infrastucture/io/Io');
const MESSAGE = require('./view.constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    Io.output(map);
    Io.output(MESSAGE.LINE_SPACE);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, result, trys) {
    Io.output(MESSAGE.GAME_RESULT.TITLE);
    this.printMap(map);
    Io.output(`${MESSAGE.GAME_RESULT.RESULT} ${result ? MESSAGE.GAME_RESULT.SUCCESS : MESSAGE.GAME_RESULT.FAILURE}`);
    Io.output(`${MESSAGE.GAME_RESULT.COUNT} ${trys}`);

  },

  printMessage(message){
    Io.output(message);
  }
};

module.exports = OutputView;
