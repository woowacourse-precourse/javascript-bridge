const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');

class App {
  bridge;
  bridgeSize;
  gameCommand;

  constructor() {
    const bridgeGame = new BridgeGame();

    this.readBridgeSize = InputView.readBridgeSize.bind(this);
    this.readMoving = InputView.readMoving.bind(this);
    this.readGameCommand = InputView.readGameCommand.bind(this);
  }

  play() {
    OutputView.printStart();

    this.readBridgeSize(BridgeMaker.makeBridge);

    // 다리 길이 입력후에 다리를 만들어야한다. 따라서 다리를 만들어주는 함수를 넣어줌
  }
}

new App().play();

module.exports = App;
