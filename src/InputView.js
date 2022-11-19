const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const game = new BridgeGame();
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.", (size) => {
      const locations = BridgeRandomNumberGenerator.createRandomLocation(size);
      InputView.readMoving(locations, size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  cnt: 0,

  readMoving(locations, size) {
    this.cnt += 1;

    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (direction) => {
        if (!game.move(direction, locations, this.cnt)) {
          console.log("finish");
          return;
        }
        if (this.cnt === size) {
          console.log("finish");
          Console.close();
          return;
        }
        console.log(this.cnt);
        this.readMoving(locations, size);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
