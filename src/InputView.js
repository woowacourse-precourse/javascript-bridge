const { Console } = require("@woowacourse/mission-utils");
const { ASKS } = require("./constants/Message");
const Check = require("./utils/Check");
const BridgeMaker = require("./BridgeMaker");
const RandomGenerator = require("./BridgeRandomNumberGenerator");
const GameLogic = require("./utils/GameLogic");

// 로직 분리 -> Map 만들기 로직 -> Map 프린트 로직 -> test

/**
 * 객체
 * 사용자로부터 입력을 받는 역할을 한다. : Console.readLine() -> 이 클래스에서만 사용 가능
 * 변경 가능 : 파일경로, 메서드 인자, 메서드
 * 목적 : "입력만 받는" 것 -> UI 로직
 */

const InputView = {
  flow() {
    const stepArray = [];
    let count = 1;
    let index = -1;
    return this.readBridgeSize(stepArray, index, count);
  },

  readBridgeSize(stepArray, index, count) {
    Console.readLine(ASKS.BRIDGE_SIZE, (size) => {
      const resolved = Number(size);
      Check.bridgeLength(resolved);

      this.readBridge(resolved, stepArray, index, count);
    });
  },

  readBridge(resolved, stepArray, index, count) {
    const bridge = BridgeMaker.makeBridge(resolved, RandomGenerator);
    this.readMoving(resolved, bridge, stepArray, index, count);
  },

  readMoving(bridgeSize, bridge, stepArray, index, count) {
    if (index !== bridgeSize - 1) {
      Console.readLine(ASKS.PLAYER_MOVING, (step) => {
        Check.moveFormat(step);
        stepArray.push(step);

        //다리와 비교 로직
        this.compare(bridgeSize, bridge, stepArray, index, count);

        //맞으면 map print
        //틀려도 map 프린트
      });
    }
    if (index === bridgeSize - 1) {
      //성공 로직
      console.log(
        "결과\n",
        stepArray,
        "\n게임성공여부:성공",
        "\n시도횟수:",
        count
      );
      Console.close();
    }
  },

  compare(bridgeSize, bridge, stepArray, index, count) {
    index++;
    console.log(bridge, stepArray, count);

    if (bridge[index] === stepArray[index]) {
      this.readMoving(bridgeSize, bridge, stepArray, index, count);
    }
    if (bridge[index] !== stepArray[index]) {
      this.readGameCommand(bridgeSize, bridge, stepArray, index, count);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeSize, bridge, stepArray, index, count) {
    Console.readLine("\nRQ선택\n", (select) => {
      Check.selectFormat(select);
      if (select === "R") {
        count++;
        stepArray = [];
        index = -1;
        this.readMoving(bridgeSize, bridge, stepArray, index, count);
      }
      if (select === "Q") {
        console.log(
          "결과\n",
          stepArray,
          "\n게임성공여부:실패",
          "\n시도횟수:",
          count
        );
        Console.close();
      }
    });
    //유효성:
    //R: 재시도의 경우:: 다시 게임시작 로직 띄움 -> BridgeGame: retry
  },
};

module.exports = InputView;
