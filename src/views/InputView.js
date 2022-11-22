const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("../constraints/constarints");
const { generate } = require("../utils/random/BridgeRandomNumberGenerator");
const { makeBridge } = require("../models/BridgeMaker");
const { printResult, printMap } = require("./OutputView");
const {
  validateBridgeSizeInput,
  validateGameCommandInput,
} = require("../utils/validators/validators");

const InputView = {
  /**
   * 다리의 길이를 입력받는 함수
   * @param {BridgeGame} game 현재 진행 중인 게임 (인스턴스)
   * @param {function()} readMoving 사용자가 이동할 칸을 입력받는 함수
   */
  readBridgeSize(game, readMoving) {
    const readBridgeSizeCallback = (res) => {
      if (validateBridgeSizeInput(res)) {
        let bridge = makeBridge(res, generate);
        return readMoving(game, bridge);
      }
    };
    Console.readLine(MESSAGES.READ_BRIDGE_SIZE, readBridgeSizeCallback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는 함수
   * @param {BridgeGame} game 현재 진행 중인 게임 (인스턴스)
   * @param {string[]} bridge 현재 만들어진 다리 (정답)
   * @returns
   */
  readMoving(game, bridge) {
    if (game.done) return this.readGameCommand(game, bridge);
    if (bridge.length === game.playerLocation) {
      game.succeed = true;
      return printResult(game);
    }
    Console.readLine(MESSAGES.MOVE, (input) => {
      game.playerMoving(game, input, bridge);
      printMap(game, bridge);
      InputView.readMoving(game, bridge);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는 함수
   * @param {BridgeGame} game
   * @param {string[]} bridge
   */
  readGameCommand(game, bridge) {
    const readGameCommandCallback = (input) => {
      validateGameCommandInput(input);
      if (input === "R") {
        game.retry();
        return InputView.readMoving(game, bridge);
      } else if (input === "Q") return printResult(game);
    };
    Console.readLine(MESSAGES.RETRY, readGameCommandCallback);
  },
};

module.exports = InputView;
