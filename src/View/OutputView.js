const { print } = require("../utils/Io.js");
const {
  OUTPUT: { START_BRIDGE },
  HASH,
} = require("../constants/index.js");
const { mapMessage } = require("../utils/Message.js");
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
    const initialValue = [["["], ["["]];
    user
      .reduce((map, move, index) => {
        const isPass = move === bridge[index];
        const isLast = index === user.length - 1;
        map.forEach((row, location) =>
          row.push(mapMessage(isPass, move === HASH[location], isLast))
        );
        return map;
      }, initialValue)
      .forEach((message) => print(message.join("")));
    OutputView.printBlank();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(data) {
    const { retry, success, map } = data;
    print("최종 게임 결과");
    OutputView.printMap(map);
    print(`\n게임 성공 여부: ${success ? "성공" : "실패"}`);
    print(`총 시도한 횟수: ${retry}`);
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

// ? 제공된 OutputView 객체를 활용해 구현해야 한다.
// ? OutputView의 파일 경로는 변경할 수 있다.
// ? OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
// ? 값 출력을 위해 필요한 메서드를 추가할 수 있다.
