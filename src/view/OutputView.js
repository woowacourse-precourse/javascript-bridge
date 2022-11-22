const { print } = require("../utils/IO.js");
const {
  OUTPUT: { START_BRIDGE, END_MESSAGE, END_ATTEMPT, END_SUCCESS },
  KEYWORD: { SUCCESS_BRIDGE, FAIL_BRIDGE },
} = require("../constants/index.js");
const { getMapMessage } = require("../utils/Message.js");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printMap(data) {
    const { directions, bridge } = data;

    getMapMessage(directions, bridge).map((message) => print(message));
    OutputView.printBlank();
  },

  printResult(data) {
    const { retry, success, map } = data;
    const SUCCESS = success ? SUCCESS_BRIDGE : FAIL_BRIDGE;

    print(END_MESSAGE);
    OutputView.printMap(map);
    print(END_SUCCESS(SUCCESS));
    print(END_ATTEMPT(retry));
  },

  printStart() {
    print(START_BRIDGE);
  },

  printBlank() {
    print("");
  },
};

module.exports = OutputView;
