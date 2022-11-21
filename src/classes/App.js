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
    const bridgeSize = InputView.flow();
    const bridge = BridgeMaker.makeBridge(bridgeSize, RandomGenerator);
    // const bridgeSize = InputView.readBridgeSize(); //다리길이 입력
    // const step = InputView.readMoving();

    //TODO:종료하고 다음걸로 어케 넘어감.. 넘어가는거 체크 후에.. 칸 입력까지 되게하고, unit test 작성
    //비동기처리 제대로 하는법 찾아보거나+readline 구조 어케 해결했는지..

    // const bridge = BridgeMaker.makeBridge(bridgeSize, RandomGenerator); //다리 생성 //['D','U','U']
    // console.log(step);
  }

  test() {
    // const step = InputView.readMoving();
    // console.log("testing");
  }
}

module.exports = App;

//구현 완료 후 지우기
const app = new App();
app.play();
