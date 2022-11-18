const MissionUtils = require("@woowacourse/mission-utils");

/*
  * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
    제공된 OutputView 객체를 활용해 구현해야 한다.
    OutputView의 파일 경로는 변경할 수 있다.
    OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
    값 출력을 위해 필요한 메서드를 추가할 수 있다.
 */
const OutputView = {
  UP_MOVING: "U",
  DOWN_MOVING: "D",
  OPEN_PARENTHESIS: "[",
  CLOSE_PARENTHESIS: "]",
  MIDDLE_PARENTHESIS: "|",
  SUCCESS_SELECT_CASE: " O ",
  FAIL_SELECT_CASE: " X ",
  NOT_SELECT_CASE: "   ",
  SUCCESS_TERMINATION: "성공",
  FAIL_TERMINAITION: "실패",
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeStyle, userMoving) {
    let upperBlock = this.OPEN_PARENTHESIS;
    let lowerBlock = this.OPEN_PARENTHESIS;

    for (let bridgeLine = 0; bridgeLine < userMoving.length; bridgeLine++) {
      if (bridgeStyle[bridgeLine] === userMoving[bridgeLine]) {
        if (userMoving[bridgeLine] === this.UP_MOVING) {
          upperBlock += this.SUCCESS_SELECT_CASE;
          lowerBlock += this.NOT_SELECT_CASE;
        }

        if (userMoving[bridgeLine] === this.DOWN_MOVING) {
          upperBlock += this.NOT_SELECT_CASE;
          lowerBlock += this.SUCCESS_SELECT_CASE;
        }
      } else {
        if (userMoving[bridgeLine] === this.UP_MOVING) {
          upperBlock += this.FAIL_SELECT_CASE;
          lowerBlock += this.NOT_SELECT_CASE;
        }

        if (userMoving[bridgeLine] === this.DOWN_MOVING) {
          upperBlock += this.NOT_SELECT_CASE;
          lowerBlock += this.FAIL_SELECT_CASE;
        }
      }

      if (bridgeLine !== userMoving.length - 1) {
        upperBlock += this.MIDDLE_PARENTHESIS;
        lowerBlock += this.MIDDLE_PARENTHESIS;
      }
    }

    upperBlock += this.CLOSE_PARENTHESIS;
    lowerBlock += this.CLOSE_PARENTHESIS;

    MissionUtils.Console.print(`${upperBlock}\n`);
    MissionUtils.Console.print(`${lowerBlock}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeStyle, userMoving, tryCount) {
    MissionUtils.Console.print(`최종 게임 결과`);
    this.printMap(bridgeStyle, userMoving);
    MissionUtils.Console.print(
      `게임 성공 여부: ${this.isSuccess(bridgeStyle, userMoving)}\n`
    );
    MissionUtils.Console.print(`총 시도한 횟수: ${tryCount}`);
  },

  isSuccess(bridgeStyle, userMoving) {
    // TODO: 함수명 변경
    const bridgeString = bridgeStyle.join("");
    const userString = userMoving.join("");

    return bridgeString === userString
      ? this.SUCCESS_TERMINATION
      : this.FAIL_TERMINAITION;
  },
};

module.exports = OutputView;
