const { Console } = require("@woowacourse/mission-utils");
const { ASKS } = require("../Constants/Message");
const Check = require("../Utils/Check");
const BridgeMaker = require("../BridgeMaker");
const RandomGenerator = require("../Utils/BridgeRandomNumberGenerator");
// const GameLogic = require("../Utils/GameLogic");

/**
 * 객체
 * 사용자로부터 입력을 받는 역할을 한다. : Console.readLine() -> 이 클래스에서만 사용 가능
 * 변경 가능 : 파일경로, 메서드 인자, 메서드 (추가, 변경)
 * 목적 : "입력만 받는" 것 -> UI 로직
 */

const InputView = {
  // start() {
  //   let values = { stepArray: [], index: -1 };
  //   let result = { upper: "", lower: "", array: [[], []], text: "", trial: 1 };
  //   return this.readBridgeSize(values, result);
  // },

  // readBridgeSize(values, result) {
  //   Console.readLine(ASKS.BRIDGE_SIZE, (size) => {
  //     const resolved = Number(size);
  //     Check.bridgeLength(resolved);

  //     this.readBridge(resolved, values, result);
  //   });
  // },

  readBridgeSize(createBridgeController) {
    Console.readLine(ASKS.BRIDGE_SIZE, (sizeInput) => {
      createBridgeController(sizeInput);
    });
  },

  // readBridge(resolved, values, result) {
  //   const bridge = BridgeMaker.makeBridge(resolved, RandomGenerator.generate);
  //   console.log(bridge);
  //   this.readMoving(bridge, values, result);
  // },

  // readMoving(bridge, values, result) {
  //   if (values.index !== bridge.length - 1) {
  //     Console.readLine(ASKS.PLAYER_MOVING, (step) => {
  //       Check.moveFormat(step);
  //       values.stepArray.push(step);

  //       this.compare(bridge, values, result);
  //     });
  //   }

  //   if (values.index === bridge.length - 1) {
  //     Console.print(`\n최종 게임 결과`);
  //     Console.print(result.upper);
  //     Console.print(result.lower);
  //     Console.print("\n게임 성공 여부: 성공");
  //     Console.print(`총 시도한 횟수: ${result.trial}`);
  //     Console.close();
  //   }
  // },

  readMoving(moveController) {
    Console.readLine(ASKS.PLAYER_MOVING, (moveInput) => {
      moveController(moveInput);
    });
  },

  readGameCommand(commandController) {
    Console.readLine(ASKS.PLAYER_COMAND, (commandInput) => {
      commandController(commandInput);
    });
  },

  // compare(bridge, values, result) {
  //   values.index++;

  //   if (bridge[values.index] === values.stepArray[values.index]) {
  //     if (values.stepArray[values.index] === "U") {
  //       result.array[0].push("O");
  //       result.array[1].push(" ");
  //       result.upper = `[ ${result.array[0].join(" | ")} ]`;
  //       result.lower = `[ ${result.array[1].join(" | ")} ]`;
  //       console.log(result.upper);
  //       console.log(result.lower);

  //       this.readMoving(bridge, values, result);
  //     }
  //     if (values.stepArray[values.index] === "D") {
  //       result.array[0].push(" ");
  //       result.array[1].push("O");
  //       result.upper = `[ ${result.array[0].join(" | ")} ]`;
  //       result.lower = `[ ${result.array[1].join(" | ")} ]`;
  //       console.log(result.upper);
  //       console.log(result.lower);
  //       this.readMoving(bridge, values, result);
  //     }
  //   }

  //   if (bridge[values.index] !== values.stepArray[values.index]) {
  //     if (values.stepArray[values.index] === "U") {
  //       result.array[0].push("X");
  //       result.array[1].push(" ");
  //       result.upper = `[ ${result.array[0].join(" | ")} ]`;
  //       result.lower = `[ ${result.array[1].join(" | ")} ]`;
  //       console.log(result.upper);
  //       console.log(result.lower);
  //       this.readGameCommand(bridge, values, result);
  //     }
  //     if (values.stepArray[values.index] === "D") {
  //       result.array[0].push(" ");
  //       result.array[1].push("X");
  //       result.upper = `[ ${result.array[0].join(" | ")} ]`;
  //       result.lower = `[ ${result.array[1].join(" | ")} ]`;
  //       console.log(result.upper);
  //       console.log(result.lower);
  //       this.readGameCommand(bridge, values, result);
  //     }
  //   }
  // },

  // readGameCommand(bridge, values, result) {
  //   Console.readLine("\nRQ선택\n", (select) => {
  //     Check.selectFormat(select);
  //     if (select === "R") {
  //       result.trial++;
  //       values.stepArray = [];
  //       result.array = [[], []];
  //       values.index = -1;
  //       this.readMoving(bridge, values, result);
  //     }

  //     if (select === "Q") {
  //       // console.log(
  //       //   `\n최종 게임 결과\n${result.upper}\n${result.lower}\n\n게임성공여부: 실패\n총 시도한 횟수: ${result.trial}`
  //       // );

  //       Console.print(`\n최종 게임 결과`);
  //       Console.print(result.upper);
  //       Console.print(result.lower);
  //       Console.print("\n게임 성공 여부: 실패");
  //       Console.print(`총 시도한 횟수: ${result.trial}`);
  //       Console.close();
  //     }
  //   });
  // },
};

module.exports = InputView;
