const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const BridgeSize = require('./InputCheck/BridgeSize');
const Moving = require('./InputCheck/Moving');
const GameCommand = require('./InputCheck/GameCommand');

const SUCCESS = 1;
const FAIL = 0;
const bridgeGame = new BridgeGame();
const InputView = {
  RESTART: 'R',

  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    Console.readLine(
      '다리의 길이를 입력해주세요.\n',
      this.checkBridgeSize.bind(this)
    );
  },

  checkBridgeSize(input, confirmedInput = null) {
    try {
      const bridgeSize = new BridgeSize(input);
      confirmedInput = bridgeSize.checkInput();
    } catch (error) {
      Console.print(`[${error}]`);
    } finally {
      if (confirmedInput !== input) return this.readBridgeSize();
    }
    return this.saveSize(input);
  },

  saveSize(input) {
    bridgeGame.saveSize(input);
    return this.prebuildBridge(input);
  },

  prebuildBridge(input) {
    bridgeGame.precompose(input);
    return this.readMoving();
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

  runBridgeMovingProcess(input, confirmedInput = null) {
    try {
      const moving = new Moving(input);
      confirmedInput = moving.checkInput();
    } catch (error) {
      Console.Print(error);
    } finally {
      if (confirmedInput !== input) return this.readMoving();
    }
    return this.saveInput(input);
  },

  saveInput(input) {
    bridgeGame.saveUpOrDown(input);
    return this.printMap(input);
  },

  printMap(input) {
    if (bridgeGame.isSamePreBuiltBridgeAsInput(input)) {
      OutputView.printMap(bridgeGame.move(input, SUCCESS));
      return this.passAllOrNot();
    }
    OutputView.printMap(bridgeGame.move(input, FAIL));
    return this.readGameCommand();
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

  runGameCommandProcess(input, confirmedInput = null) {
    try {
      const gameCommand = new GameCommand(input);
      confirmedInput = gameCommand.checkInput();
    } catch (error) {
      Console.print(error);
    } finally {
      if (confirmedInput !== input) return this.readGameCommand();
    }
    this.retryOrEnd(input);
  },

  retryOrEnd(input) {
    if (input === this.RESTART) {
      bridgeGame.retry();
      return this.readMoving();
    }
    BridgeGame.end();
  },

  passAllOrNot() {
    bridgeGame.increaseTryOrder();
    if (bridgeGame.isAllPass()) {
      OutputView.printResult('성공', bridgeGame.returnBridgeData());
      return BridgeGame.end();
    }
    return this.readMoving();
  },
};

module.exports = InputView;
