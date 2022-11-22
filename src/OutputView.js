const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const OutputView = {
  RESULT_TEXT: ['실패','성공'],
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, path) {
    const map = getMap(bridge, path);

    MissionUtils.Console.print(getMapLine(map, InputView.INPUT_UP_MOVING));
    MissionUtils.Console.print(getMapLine(map, InputView.INPUT_DOWN_MOVING));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, path, result, tryNum) {
    MissionUtils.Console.print('최종 게임 결과');
    OutputView.printMap(bridge, path);

    MissionUtils.Console.print('게임 성공 여부: ' + OutputView.RESULT_TEXT[result]);
    MissionUtils.Console.print('총 시도한 횟수: ' + tryNum);
  },
};


function getMap(bridge, path) {
  const map = initMap(path.length);

  for(let i = 0; i < path.length; i++) {
    if (bridge[i] === path[i]) {
      map[path[i]][i] = 'O';
    }
    else {
      map[path[i]][i] = 'X';
    }
  }
  return map;
}

function initMap(length) {
  const map = {};

  map[InputView.INPUT_UP_MOVING] = [];
  map[InputView.INPUT_DOWN_MOVING] = [];

  for(let i = 0; i < length; i++) {
    map[InputView.INPUT_UP_MOVING].push(' ');
    map[InputView.INPUT_DOWN_MOVING].push(' ');
  }

  return map;
}

function getMapLine(map, line) {
  return `[ ${map[line].join(' | ')} ]`;
}

module.exports = OutputView;