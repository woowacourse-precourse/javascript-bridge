const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { START_GAME_MSG } = require('./constants');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGuide(START_GAME_MSG); // 게임시작 문구 출력
    // 다리 길이 받아서 다리 만들기
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(size) {
    try {
      this.bridgeGame.buildBridge(size);
      this.requestMoving();
    } catch (err) {
      OutputView.printGuide(err.message);
      this.tryAgain(this.requestBridgeSize);
    }
  }

  requestMoving() {
    InputView.readMoving(this.moveBlock.bind(this));
  }

  moveBlock(moveInput) {
    try {
      this.bridgeGame.move(moveInput);
      const moveInputArray = this.bridgeGame.getMoveInputArray();
      // moveInputArray 이용해서 printMap 그리기
      OutputView.printGuide(this.bridgeGame.getBridge());
      OutputView.printMap(moveInputArray);
      // OutputView.printGuide(moveInputArray.length);
      if (moveInputArray.slice(-1)[0].isRightDirect === true) {
        // 마지막까지 성공하면 게임 종료
        if (moveInputArray.length === this.bridgeGame.getBridgeLength()) {
          // 게임 결과 출력 후 게임 종료
          OutputView.printGuide('게임결과 출력');
          Console.close();
        } else {
          this.requestMoving();
        }
      } else {
        // false 는 X 나옴 -> 실패이면, 다시 시작할지 종료할지 물어봐야 함.
        OutputView.printGuide('실패');
      }
    } catch (err) {
      OutputView.printGuide(err.message);
      this.tryAgain(this.requestMoving);
    }
  }

  requestRetryOrExit() {
    InputView.readGameCommand();
  }

  tryAgain(tryAgainFunc) {
    tryAgainFunc.call(this);
  }
}

const app = new App();
app.play();
module.exports = App;
