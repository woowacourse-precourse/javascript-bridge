const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const generateNum = require('./BridgeRandomNumberGenerator')
class App {
  bridge
  tryGame;
  flag;
  BridgesGameStart;
  constructor() {
    this.bridge = [];
    this.tryGame = 0;
    this.flag = false;
  }

  async play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    try {
      let bridgeSize = await InputView.readBridgeSize();
      this.bridge = BridgeMaker.makeBridge(bridgeSize, generateNum.generate);

     // console.log(tempBridgeArray);
    }
    catch (error) {
      MissionUtils.Console.print("[ERROR]" + error);
    }

    while (true) {

      let answer = await this.run();
      this.tryGame += 1;
      if (answer == true) {
        this.flag = true;
        MissionUtils.Console.print("최종 게임 결과");
        OutputView.printMap(this.BridgesGameStart.arr1, this.BridgesGameStart.arr2);
        OutputView.printResult(this.flag, this.tryGame);
        break;
      }
      try {
        const gameCommand = await InputView.readGameCommand();
        // 다시 할래?
        if (this.BridgesGameStart.retry(gameCommand)) {
          MissionUtils.Console.print("최종 게임 결과");
          OutputView.printMap(this.BridgesGameStart.arr1, this.BridgesGameStart.arr2);
          OutputView.printResult(this.flag, this.tryGame);
          break;
        } else {
          await this.run();
        }
      }
      catch (error) {
        MissionUtils.Console.print("[ERROR]" + error);
      }
    }
  }

  async run() {

    this.BridgesGameStart = new BridgeGame(this.bridge);

    let turns = 0;
    while (turns != this.bridge.length) {
      const input = await InputView.readMoving();
      const notFailed = await this.BridgesGameStart.move(input, turns)
      if (notFailed) turns += 1;
      else return false
    }
    return true;
  }

}

module.exports = App;
