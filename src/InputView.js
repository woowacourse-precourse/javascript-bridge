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
    let result = { upper: "", lower: "", array: [[], []], count: 1 };
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
    const bridge = BridgeMaker.makeBridge(resolved, RandomGenerator.generate());
    this.readMoving(bridge, values, result);
  },

  readMoving(bridge, values, result) {
    if (values.index !== bridge.length - 1) {
      Console.readLine(ASKS.PLAYER_MOVING, (step) => {
        Check.moveFormat(step);
        values.stepArray.push(step);

        this.compare(bridge, values, result);

        //MAP
      });
    }

    if (values.index === bridge.length - 1) {
      //성공 로직
      console.log(
        `\n최종 게임 결과\n${result.upper}\n${result.lower}\n\n게임성공여부: 성공\n총 시도한 횟수: ${result.count}`
      );
      Console.close();
    }
  },

  compare(bridge, values, result) {
    values.index++;
    // values.stepArray
    // console.log(bridge, result.upper);
    // console.log(bridge, result.lower);

    if (bridge[values.index] === values.stepArray[values.index]) {
      if (values.stepArray[values.index] === "U") {
        result.array[0].push("O");
        result.array[1].push(" ");
        result.upper = `[ ${result.array[0].join(" | ")} ]`;
        result.lower = `[ ${result.array[1].join(" | ")} ]`;
        console.log(result.upper);
        console.log(result.lower);

        this.readMoving(bridge, values, result);
      }
      if (values.stepArray[values.index] === "D") {
        result.array[0].push(" ");
        result.array[1].push("O");
        result.upper = `[ ${result.array[0].join(" | ")} ]`;
        result.lower = `[ ${result.array[1].join(" | ")} ]`;
        console.log(result.upper);
        console.log(result.lower);
        this.readMoving(bridge, values, result);
      }
    }

    if (bridge[values.index] !== values.stepArray[values.index]) {
      if (values.stepArray[values.index] === "U") {
        result.array[0].push("X");
        result.array[1].push(" ");
        result.upper = `[ ${result.array[0].join(" | ")} ]`;
        result.lower = `[ ${result.array[1].join(" | ")} ]`;
        console.log(result.upper);
        console.log(result.lower);
        this.readGameCommand(bridge, values, result);
      }
      if (values.stepArray[values.index] === "D") {
        result.array[0].push(" ");
        result.array[1].push("X");
        result.upper = `[ ${result.array[0].join(" | ")} ]`;
        result.lower = `[ ${result.array[1].join(" | ")} ]`;
        console.log(result.upper);
        console.log(result.lower);
        this.readGameCommand(bridge, values, result);
      }
    }
  },

  readGameCommand(bridge, values, result) {
    Console.readLine("\nRQ선택\n", (select) => {
      Check.selectFormat(select);
      if (select === "R") {
        result.count++;
        values.stepArray = [];
        result.array = [[], []];
        values.index = -1;
        this.readMoving(bridge, values, result);
      }

      if (select === "Q") {
        console.log(
          `\n최종 게임 결과\n${result.upper}\n${result.lower}\n\n게임성공여부: 실패\n총 시도한 횟수: ${result.count}`
        );
        Console.close();
      }
    });
  },
};

module.exports = InputView;
