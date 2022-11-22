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
  play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    InputView.readBridgeSize(this.onBridgeSizeRead.bind(this))
  }
  onBridgeSizeRead(err, bridgeSize) {
    if (err) {
      MissionUtils.Console.print("[ERROR] ",err)
      return
    }
    this.bridge = BridgeMaker.makeBridge(bridgeSize, generateNum.generate);
    if (err) {
      print("[ERROR] ",err)
      return
    }
    this.gameStart(() => {
      console.log("끝");
    });
  }

  gameStart(callback){
    this.run((err, answer) => {
      this.tryGame += 1;
      if (answer == true) {
        this.flag = true;
        MissionUtils.Console.print("최종 게임 결과");
        OutputView.printMap(this.BridgesGameStart.arr1, this.BridgesGameStart.arr2);
        OutputView.printResult(this.flag, this.tryGame);
        callback();
        return;
      }

      const gameCommand = InputView.readGameCommand();
      // 다시 할래?
      // 응 안해
      if (this.BridgesGameStart.retry(gameCommand)) {
        MissionUtils.Console.print("최종 게임 결과");
        OutputView.printMap(this.BridgesGameStart.arr1, this.BridgesGameStart.arr2);
        OutputView.printResult(this.flag, this.tryGame);
        return;
      }
      // 아니 다시 할꺼야 -> 
      else {
        this.집에가고싶다(callback);
      }
    });
  }

  run(callback) {
    this.BridgesGameStart = new BridgeGame(this.bridge);
    let turns = 0;
    while (turns != this.bridge.length) {
      InputView.readMoving((err, input) => {
        if (err) {
          MissionUtils.Console.print(err)
          return;
        }
        const notFailed = this.BridgesGameStart.move(input, turns)
        if (notFailed) turns += 1;
        else
          callback(null, false);
      }); 
    }
    callback(null, true);
  }
}

module.exports = App;
