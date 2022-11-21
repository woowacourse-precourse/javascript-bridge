const { print } = require("../utils/Io.js");
const {
  OUTPUT: { START_BRIDGE, END_MESSAGE, END_ATTEMPT, END_SUCCESS },
  KEYWORD: { SUCCESS_BRIDGE, FAIL_BRIDGE },
} = require("../constants/index.js");
const { getMapMessage } = require("../utils/Message.js");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(data) {
    const { user, bridge } = data;

    getMapMessage(user, bridge).map((message) => print(message));
    OutputView.printBlank();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(data) {
    const { retry, success, map } = data;
    const SUCCESS = success ? SUCCESS_BRIDGE : FAIL_BRIDGE;

    print(END_MESSAGE);
    OutputView.printMap(map);
    print(END_SUCCESS(SUCCESS));
    print(END_ATTEMPT(retry));
  },

  /**
   * 게임이 시작했다는 문구를 출력한다.
   */
  printStart() {
    print(START_BRIDGE);
  },

  printBlank() {
    print("");
  },
};

module.exports = OutputView;
