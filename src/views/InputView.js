const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("../constraints/constarints");
const { generate } = require("../utils/BridgeRandomNumberGenerator");
const { makeBridge } = require("../BridgeMaker");
const { validateLength } = require("../utils/validators/validators");
const { printResult, printMap } = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는 함수
   * @param {*} game 현재 진행 중인 게임 (인스턴스)
   * @param {*} readMoving 사용자가 이동할 칸을 입력받는 함수
   */
  readBridgeSize(game, readMoving) {
    Console.readLine(MESSAGES.READ_BRIDGE_SIZE, (res) => {
      if (validateLength(res)) {
        return makeBridge(res, generate, readMoving, game);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는 함수
   * @param {*} game 현재 진행 중인 게임 (인스턴스)
   * @param {*} bridge 현재 만들어진 다리 (정답)
   * @returns
   */
  readMoving(game, bridge) {
    console.log("다리", bridge); // 나중에 지울것
    if (game.done) return printResult(game);
    Console.readLine(MESSAGES.MOVE, (input) => {
      game.move(input, bridge);
      printMap(game, bridge);
      InputView.readMoving(game, bridge);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
