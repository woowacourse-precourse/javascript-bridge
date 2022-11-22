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
    // 여기에서 해야 하는 거 아님?
    // 여기서 다리 크기 읽었으면 onBridgeSizeRead를 호출해라 라고 했잖아요

    // 참고: bind는 자스가 this를 호출할때 동적으로 결정해서
    // this를 고정해주기 위해 쓰는 함수입니다
    // 입감
  }
  onBridgeSizeRead(err, bridgeSize) {
    if (err) {
      MissionUtils.Console.print("[ERROR] ",err)
      return // 이러는게 맞을거같은데
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
  // exit 쓰면 안됨
  // 한글 이름도 쓰면 안되자나!
  // 쪼님이여서 ㄱㅊ
  // 알아서 배민 처리하신다고 하네요
  // 아니 예외 테스트 실화?
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
          MissionUtils.Console.print(err) // ㄴㄴ제가이미수정해놓음
          /* eternal */ return;
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
