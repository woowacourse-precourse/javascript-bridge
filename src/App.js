const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class App {
  #size;
  #bridge;

  play() {
    this.gameStart();
  }

  gameStart() {
    Console.print('다시 건너기 게임을 시작합니다.\n');
    this.askBridgeSize();
  }

  askBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      this.size = size;
      this.makeBridge();
    });
  }

  makeBridge() {
    this.bridge = BridgeMaker.makeBridge(this.size, generate);
    this.askMoveDirection();
  }

  askMoveDirection() {}

  // gameProgress() { }

  exit() {}
}

const app = new App();
app.play();

module.exports = App;
