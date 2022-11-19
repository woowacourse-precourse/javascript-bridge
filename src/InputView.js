const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { printMap } = require("./OutputView");
const game = new BridgeGame();
const OutputView = require("./OutputView");
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
      InputView.readMoving(locations, Number(size));
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  step: 0,

  readMoving(locations, size) {
    console.log(locations);
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", (answer) => {
      if (answer === "U" && locations[this.step] === 1) {
        console.log("success");
        this.step += 1;
        OutputView.printMap(this.step, locations);
        if (this.step === size) return;
        this.readMoving(locations, size);
        return;
      }
      if (answer === "D" && locations[this.step] === 0) {
        console.log("success");
        this.step += 1;
        OutputView.printMap(this.step, locations);

        if (this.step === size) return;
        this.readMoving(locations, size);
        return;
      }
      OutputView.printWrongMap(this.step + 1, locations);
      console.log("wrong");
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
