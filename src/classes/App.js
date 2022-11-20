const InputView = require("../InputView");
const OutputView = require("../OutputView");
const BridgeMaker = require("../BridgeMaker");
const RandomGenerator = require("../BridgeRandomNumberGenerator");

class App {
  play() {
    //순차적으로 진행

    //BridgeGame에서 만든 [history]를 return : move()
    //그 history를 출력 : OutputView- printMap만
    //retry: 위의 다리정보 재활용
    //시도횟수 리셋
    //move부터 다시시작.

    OutputView.printMessage("start"); //게임 시작
    const bridgeSize = InputView.readBridgeSize(); //다리길이 입력
    const bridge = BridgeMaker.makeBridge(bridgeSize, RandomGenerator); //다리 생성 //['D','U','U']
  }

  test() {
    const bridge = BridgeMaker.makeBridge(3, RandomGenerator);
    console.log(bridge);
  }
}

module.exports = App;

//구현 완료 후 지우기
const app = new App();
app.play();
