const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const BridgeSize = require('./available-check/BridgeSize');
const MovingCheck = require('./available-check/MovingCheck');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class BridgeGameControl {
  size;
  bridge;
  userMove = [];

  constructor() {
    this.bridgeSize = new BridgeSize();
    this.movingCheck = new MovingCheck();
  };
  
  start() {
    InputView.readBridgeSize((size) => {
      this.bridgeSize.validate(size);
      this.size = size;
      this.makeBridge();
    });
  };

  makeBridge() {
    this.bridge = BridgeMaker.makeBridge(this.size, BridgeRandomNumberGenerator.generate);
    this.bridgeGame = new BridgeGame(this.bridge);
    this.userMoving();
  };
  
  userMoving() {
    InputView.readMoving((userUpDown) => {
      this.movingCheck.validate(userUpDown);
      Console.print(this.bridge)
      this.userMove.push(userUpDown);
      this.answerCheck();
      // this.bridgeGame.move(this.userMove) ? this.repeatMoving() : Console.print('여기까지가 끝인가보오');
    });
  };

  answerCheck() {
    if (this.bridgeGame.move(this.userMove)) {
      return this.repeatMoving();
    }
    return Console.print('여기까지가 끝인가보오');
  }

  repeatMoving() {
    // 길이 검사
    if (Number(this.size) === this.userMove.length) {
      Console.print('모두 정답')
      Console.close()
    }
    // 결과 출력
    OutputView.printMap(this.bridge, this.userMove.length);
    this.userMoving();
  };


};

module.exports = BridgeGameControl;
