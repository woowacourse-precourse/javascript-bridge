const { MissionUtils } = require("@woowacourse/mission-utils");

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
  SUCCESS_SELECT_CASE: "[ O ]",
  FAIL_SELECT_CASE: "[ X ]",
  NOT_SELECT_CASE: "[   ]",
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeStyle, userMoving) {
    for (let bridgeLine = 0; bridgeLine < userMoving.length; bridgeLine++) {
      this.userMovingResult(bridgeStyle[bridgeLine], userMoving[bridgeLine]);
    }
  },

  userMovingResult(bridgePosition, userPosition) {
    if (bridgePosition === userPosition) {
      this.selectCorrectBlock(userPosition);
    } else { // TODO: 해당 else를 쓸 것인지 말 것인지 결정하기. 
      this.selectUnCorrectBlock(userPosition);
    }
  },

  selectCorrectBlock(userPosition) {
    if (userPosition === this.UP_MOVING) {
      this.selectUpperBlock(true);
    }

    if (userPosition === this.DOWN_MOVING) {
      this.selectLowerBlock(true);
    }

  },

  selectUnCorrectBlock(userPosition) {
    if (userPosition === this.UP_MOVING) {
      this.selectUpperBlock(false);
    }

    if (userPosition === this.DOWN_MOVING) {
      this.selectLowerBlock(false);
    }
  },

  selectUpperBlock(isCorrect) {
    if (isCorrect) {
      MissionUtils.Console.print(this.SUCCESS_SELECT_CASE);
      MissionUtils.Console.print(this.NOT_SELECT_CASE);
    } else {
      MissionUtils.Console.print(this.FAIL_SELECT_CASE);
      MissionUtils.Console.print(this.NOT_SELECT_CASE);
    }
  },

  selectLowerBlock(isCorrect) {
    if (isCorrect) {
      MissionUtils.Console.print(this.NOT_SELECT_CASE);
      MissionUtils.Console.print(this.SUCCESS_SELECT_CASE);
    } else {
      MissionUtils.Console.print(this.NOT_SELECT_CASE);
      MissionUtils.Console.print(this.FAIL_SELECT_CASE);
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
