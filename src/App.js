const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { START_GAME_MSG, RETRY_INPUT_ERROR } = require('./constants');
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
          this.quit();
        } else {
          this.requestMoving();
        }
      } else {
        this.requestRetry();
      }
    } catch (err) {
      OutputView.printGuide(err.message);
      this.tryAgain(this.requestMoving);
    }
  }

  requestRetry() {
    InputView.readGameCommand(this.checkValidCommand.bind(this));
  }

  checkValidCommand(tryInput) {
    try {
      if (tryInput !== 'Q' && tryInput !== 'R') {
        throw new Error(RETRY_INPUT_ERROR);
      }
      this.determineTryOrExit(tryInput);
    } catch (err) {
      OutputView.printGuide(err.message);
      this.tryAgain(this.requestRetry);
    }
  }

  determineTryOrExit(tryInput) {
    if (tryInput === 'Q') {
      this.quit();
    } else {
      this.bridgeGame.retry();
      this.requestMoving();
    }
  }

  tryAgain(tryAgainFunc) {
    tryAgainFunc.call(this);
  }

  quit() {
    // 결과 출력 후 종료.
    OutputView.printResult();
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
