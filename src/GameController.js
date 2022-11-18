const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class GameController {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
    this.game = new BridgeGame();
  }

  start() {
    this.outputView.printStartMessage();
    const onDeliverySizeInputted = (brigeSize) => {
      const bridgeAnswer = BridgeMaker.makeBridge(brigeSize, BridgeRandomNumberGenerator.generate);
      this.game.setBridgeAnswer(bridgeAnswer);
      const START_INDEX = 0;
      this.move(START_INDEX);
    };

    this.inputView.readBridgeSize(onDeliverySizeInputted);
  }

  move(index) {
    const onDeliveryMoving = (moving) => {
      const IS_MOVE = this.game.move(moving, index);
      const bridgeAnswer = this.game.getBridgeAnswer();
      this.outputView.printMap(index, IS_MOVE, bridgeAnswer);
      if (IS_MOVE) { // 이동했다면 다음 것도 입력
        this.move(index + 1);
      } else {
        // 게임 탈락 재시도 묻기
      }
    };

    const bridgeAnswerLength = this.game.getBridgeAnswer().length;
    if (index === bridgeAnswerLength) return; // 다리 끝까지 도달한 경우
    this.inputView.readMoving(onDeliveryMoving);
  }

  end() {
    Console.close();
  }
}

module.exports = GameController;
