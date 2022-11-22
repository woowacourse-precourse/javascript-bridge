const {Console} = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const { readBridgeSize, readMoving } = require("./InputView");
const { printMap } = require("./OutputView");
class App {

  play() {
    Console.print('다리 건너기 게임을 시작합니다.');

    InputView.readBridgeSize((size) => {
      this.game = new BridgeGame(+size);
      this.moveOnce();
    })
  }

  playOnce() {
    InputView.readMoving((side) => {
      this.game.move(side);
      printMap(this.game);

    })
  }



}

module.exports = App;
