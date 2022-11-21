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
  start() {
    let values = { stepArray: [], index: -1 };
    let result = { upper: "", lower: "", count: 1 };
    return this.readBridgeSize(values, result);
  },

  readBridgeSize(values, result) {
    Console.readLine(ASKS.BRIDGE_SIZE, (size) => {
      const resolved = Number(size);
      Check.bridgeLength(resolved);

      this.readBridge(resolved, values, result);
    });
  },

  readBridge(resolved, values, result) {
    const bridge = BridgeMaker.makeBridge(resolved, RandomGenerator);
    this.readMoving(bridge, values, result);
  },

  readMoving(bridge, values, result) {
    if (values.index !== bridge.length - 1) {
      Console.readLine(ASKS.PLAYER_MOVING, (step) => {
        Check.moveFormat(step);
        values.stepArray.push(step);

        //다리와 비교 로직
        this.compare(bridge, values, result);

        //맞으면 map print
        //틀려도 map 프린트
      });
    }

    if (values.index === bridge.length - 1) {
      //성공 로직
      console.log(
        "결과\n",
        values.stepArray,
        "\n게임성공여부:성공",
        "\n시도횟수:",
        result.count
      );
      Console.close();
    }
  },

  compare(bridge, values, result) {
    values.index++;
    console.log(bridge, values.stepArray, result.count);

    if (bridge[values.index] === values.stepArray[values.index]) {
      this.readMoving(bridge, values, result);
    }

    if (bridge[values.index] !== values.stepArray[values.index]) {
      this.readGameCommand(bridge, values, result);
    }
  },

  readGameCommand(bridge, values, result) {
    Console.readLine("\nRQ선택\n", (select) => {
      Check.selectFormat(select);
      if (select === "R") {
        result.count++;
        values.stepArray = [];
        values.index = -1;
        this.readMoving(bridge, values, result);
      }

      if (select === "Q") {
        console.log(
          "결과\n",
          values.stepArray,
          "\n게임성공여부:실패",
          "\n시도횟수:",
          result.count
        );
        Console.close();
      }
    });
  },
};

module.exports = InputView;
