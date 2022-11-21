const MissionUtils = require("@woowacourse/mission-utils");

const { UP_MOVING,
  DOWN_MOVING, 
  OPEN_PARENTHESIS,
  CLOSE_PARENTHESIS,
  MIDDLE_PARENTHESIS,
  COLLECT_SELECT_CASE,
  WRONG_SELECT_CASE,
  NOT_SELECT_CASE,
  SUCCESS_TERMINATION,
  FAIL_TERMINAITION
} = require("./Constant");
/*
  * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
    제공된 OutputView 객체를 활용해 구현해야 한다.
    OutputView의 파일 경로는 변경할 수 있다.
    OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
    값 출력을 위해 필요한 메서드를 추가할 수 있다.
 */


const OutputView = {

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
  printMap(bridgeStyle, userMoving) {
    let [upperBridge, lowerBridge] = this.makeEachBridge(bridgeStyle,userMoving);

    MissionUtils.Console.print(`${upperBridge}\n`);
    MissionUtils.Console.print(`${lowerBridge}\n`);
  },

  makeEachBridge(bridgeStyle, userMoving) { // TODO: 함수명 더 생각해보기
    let upperBridge = OPEN_PARENTHESIS;
    let lowerBridge = OPEN_PARENTHESIS;

    for (let line = 0; line < userMoving.length; line++) {
      const [upperBlock, lowerBlock] = this.makeBridgeBlock(line,bridgeStyle,userMoving);
      upperBridge += upperBlock;
      lowerBridge += lowerBlock;
    }

    return [upperBridge + CLOSE_PARENTHESIS, lowerBridge + CLOSE_PARENTHESIS,];
  },

  makeBridgeBlock(line, bridgeStyle, userMoving) {
    const bridgeBlock = bridgeStyle[line];
    const userBlock = bridgeStyle[line];
    let upperBlock = this.makeUpperBlock(bridgeBlock, userBlock);
    let lowerBlock = this.makeLowerBlock(bridgeBlock, userBlock);

    if (line !== userMoving.length - 1) {
      upperBlock += MIDDLE_PARENTHESIS;
      lowerBlock += MIDDLE_PARENTHESIS;
    }

    return [upperBlock, lowerBlock];
  },

  makeUpperBlock(bridgeBlock, userBlock) {
    if (userBlock !== UP_MOVING) {
      return NOT_SELECT_CASE;
    }
    if (userBlock !== bridgeBlock) {
      return WRONG_SELECT_CASE;
    }
    return COLLECT_SELECT_CASE;
  },

  makeLowerBlock(bridgeBlock, userBlock) {
    if (userBlock !== DOWN_MOVING) {
      return NOT_SELECT_CASE;
    }
    if (userBlock !== bridgeBlock) {
      return WRONG_SELECT_CASE;
    }
    return COLLECT_SELECT_CASE;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeStyle, userMoving, tryCount) {
    if (tryCount <= 0) {
      return;
    } 
    MissionUtils.Console.print(`최종 게임 결과 \n ${this.printMap(bridgeStyle, userMoving)}`);
    MissionUtils.Console.print(`게임 성공 여부: ${this.isSuccess(bridgeStyle, userMoving)}\n`);
    MissionUtils.Console.print(`총 시도한 횟수: ${tryCount}`);
  },

  isSuccess(bridgeStyle, userMoving) {
    // TODO: 함수명 변경
    const bridgeString = bridgeStyle.join("");
    const userString = userMoving.join("");

    return bridgeString === userString
      ? SUCCESS_TERMINATION
      :FAIL_TERMINAITION;
  },
};

module.exports = OutputView;
