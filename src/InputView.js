const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const BridgeData = require('./BridgeData');
const BridgeGame = require('./BridgeGame');

const SUCCESS = 1;
const FAIL = 0;
const InputView = {
  callbackCount: 0,
  tryCount: 0,
  RESTART: 'R',

  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    Console.readLine(
      '다리의 길이를 입력해주세요.',
      this.runBridgeSizeProcess.bind(this)
    );
  },

  runBridgeSizeProcess(input) {
    OutputView.printInput(input);
    this.saveSize(input);
    this.prebuildBridge(input);
    this.readMoving();
  },

  /**
   * 사용자로부터 입력을 받는 역할을 한다.
   */

  readMoving() {
    Console.readLine(
      '이동할 칸을 선택해 주세요',
      this.runBridgeMovingProcess.bind(this)
    );
  },

  runBridgeMovingProcess(input) {
    this.callbackCount += 1;
    this.saveInput(input);
    if (this.isSamePreBuiltBridgeAsInput(input)) {
      OutputView.printMap(BridgeGame.move(input, SUCCESS));
      return this.passAllOrNot();
    }
    OutputView.printMap(BridgeGame.move(input, FAIL));
    InputView.readGameCommand();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */

  readGameCommand() {
    Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도 : R, 종료 : Q)',
      this.runGameCommandProcess.bind(this)
    );
  },

  runGameCommandProcess(input) {
    if (input === this.RESTART) {
      [this.callbackCount, this.tryCount] = BridgeGame.retry();
      return this.readMoving();
    }
    BridgeGame.end();
  },

  saveSize(input) {
    BridgeData.size = input;
  },

  prebuildBridge(input) {
    BridgeData.prebuilt = BridgeGame.precompose(input);
  },

  saveInput(input) {
    BridgeData.upOrDown = input;
  },

  isSamePreBuiltBridgeAsInput(input) {
    return BridgeData.prebuilt[this.tryCount] === input;
  },

  passAllOrNot() {
    this.tryCount += 1;
    if (this.isAllPass()) {
      OutputView.printResult('성공', this.try);
      return BridgeGame.end();
    }
    return this.readMoving();
  },

  isAllPass() {
    return this.callbackCount === Number(BridgeData.size);
  },
};

module.exports = InputView;
