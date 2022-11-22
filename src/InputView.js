const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const bridgeGame = new BridgeGame();
const OutputView = require("./OutputView");
const Validation = require("./Validation");

const InputView = {
  readBridgeSize() {
    Console.print("다리의 길이 3 ~ 20 이외의 수 입력시 [ERROR]가 발생합니다");
    Console.readLine("다리의 길이를 입력해주세요.", (answer) => {
      try {
        Validation.validateBridgeSize(answer);
        const bridge = BridgeMaker.makeBridge(
          answer,
          BridgeRandomNumberGenerator.generate
        );
        this.readMoving(bridge);
      } catch (e) {
        Console.print(e);
        this.readBridgeSize();
      }
    });
  },

  readMoving(bridge) {
    console.log(bridge);
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D).",
      (answer) => {
        try {
          Validation.validateInputMoving(answer);
          const map = bridgeGame.move(answer, bridge);
          const bridgeMap = bridgeGame.mapToBridgeshape(map);
          OutputView.printMap(bridgeMap);
          if (map[map.length - 1].result === "O") {
            if (map.length === bridge.length) {
              OutputView.printResult(bridgeMap, "성공", bridgeGame.tryCount);
              return;
            } else {
              this.readMoving(bridge);
            }
          } else {
            this.readGameCommand(bridgeMap, map, bridge);
          }
        } catch (e) {
          Console.print(e);
          this.readMoving(bridge);
        }
      }
    );
  },

  readGameCommand(bridgeMap, map, bridge) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (answer) => {
        try {
          Validation.validateInputGameCommand(answer);
          if (answer === "R") {
            bridgeGame.retry();
            this.readMoving(bridge);
          } else {
            OutputView.printResult(bridgeMap, "실패", bridgeGame.tryCount);
            return;
          }
        } catch (e) {
          Console.print(e);
          InputView.readGameCommand(bridgeMap, map, bridge);
        }
      }
    );
  },
};

module.exports = InputView;
