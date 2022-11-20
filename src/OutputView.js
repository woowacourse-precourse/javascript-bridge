const { Console } = require("@woowacourse/mission-utils");
const { SAYS } = require("./constants/Message");
const GameLogic = require("./utils/GameLogic");

/**
 * 객체
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 * 변경 가능 : 파일경로, 메서드 인자, 메서드
 * 변경 불가 : 메서드 이름
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printEntry(entry) {
    // Console.print(entry);
    console.log(entry);
  },

  printMap() {
    //GameLogic에서 history 불러서 O 일 경우 표시로직
    //history upper나 lower 개수가 하나면 [ ] 로 표시
    //아닐 경우 계속 [ | ] ... 추가됨
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    //terminate array에서 data 받아서 출력 라이브러리 적용
  },

  printMessage(context) {
    if (context === "start") {
      Console.print(SAYS.START);
    }
  },
};

module.exports = OutputView;
