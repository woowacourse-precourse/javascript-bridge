const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("../BridgeGame");
const bridgegame = new BridgeGame();
const InputView = {
  readBridgeSize() {
    let bridgeSize;
    Console.readLine("다리의 길이를 입력해주세요.", (number) => {
      bridgegame.vaildateBridge(number);
      return (bridgeSize = number);
    });
    return bridgeSize;
  },

  readMoving() {
    let moving;
    Console.readLine("이동할 칸을 선택하세요(위:U ,아래:D)", (string) => {
      bridgegame.vaildateMoveCommand(string);
      return (moving = string);
    });
    return moving;
  },

  readGameCommand() {
    let command;
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (string) => {
        bridgegame.vaildateGameCommand(string);
        if (bridgegame.retry(string)) {
          return (command = string);
        }
      }
    );
    return command;
  },
};

module.exports = InputView;
