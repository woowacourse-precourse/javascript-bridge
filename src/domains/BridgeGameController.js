const { READ_TYPE, GAME_COMMAND } = require('../constants');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');

const BridgeState = require('./BridgeState');
const BridgeGame = require('./BridgeGame');

const Utils = require('../utils/Utils');

/**
 * 한 게임에 해당하는 인스턴스
 *
 * @type {BridgeGame}
 */
let bridgeGame = null;

/** 게임 진행을 책임하는 개체 */
const BridgeGameController = {
  /** 게임을 시작한다. */
  start() {
    OutputView.printStartMessage();

    this.initializeBridgeGame();
  },

  /** 게임 상태를 초기화한다. */
  initializeBridgeGame() {
    InputView.read(READ_TYPE.BRIDGE_SIZE, (bridgeSize) => {
      bridgeSize = Utils.convertToNumber(bridgeSize);
      BridgeState.setBridgeSize(bridgeSize);
      this.initializeAnswerBridge(bridgeSize);

      bridgeGame = new BridgeGame();
      OutputView.addNewLine();
      this.loopGame();
    });
  },

  initializeAnswerBridge(bridgeSize) {
    const answerBridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    BridgeState.setAnswerBridge(answerBridge);
  },

  /** 게임을 진행하는 Loop */
  loopGame() {
    InputView.read(READ_TYPE.MOVING, (moving) => {
      bridgeGame.move(moving);
      OutputView.printMap();
      OutputView.addNewLine();

      const retryOrAllDone = this.checkRetryOrAllDone();
      if (retryOrAllDone) return;

      this.loopGame();
    });
  },

  /**
   * 재시도를 해야하는 상황인지, 게임이 끝난 상황인지 체크한다.
   *
   * @returns {boolean}
   */
  checkRetryOrAllDone() {
    const isRetry = this.checkRetry();
    if (isRetry) return true;

    const isAllDone = this.checkAllDone();
    if (isAllDone) return true;

    return false;
  },

  /**
   * 재시도를 해야하는지 확인한다.
   *
   * @returns {boolean}
   */
  checkRetry() {
    const isRetry = bridgeGame.retry();

    if (isRetry) {
      this.DoQuitOrNew();
      return true;
    }

    return false;
  },

  /**
   * 다리를 다 건넜다면 게임을 끝낸다.
   *
   * @returns {boolean}
   */
  checkAllDone() {
    const isAllDone = bridgeGame.allDone();

    if (isAllDone) {
      this.gameEnd();
      return true;
    }

    return false;
  },

  /** 게임 커맨드를 입력받은 뒤, 그에 따라 진행한다. */
  DoQuitOrNew() {
    InputView.read(READ_TYPE.GAME_COMMAND, (gameCommand) => {
      const isRetry = this.checkCommandRetry(gameCommand);
      if (isRetry) return;

      const isQuit = this.checkCommandQuit(gameCommand);
      if (isQuit) return;
    });
  },

  /**
   * 입력한 커맨드 값이 R이라면 게임을 다시 시작한다.
   *
   * @param {GAME_COMMAND} gameCommand
   */
  checkCommandRetry(gameCommand) {
    if (gameCommand === GAME_COMMAND.RETRY) {
      bridgeGame = new BridgeGame();
      this.loopGame();
      return true;
    }

    return false;
  },

  /**
   * 입력한 커맨드 값이 Q라면 게임을 끝낸다.
   *
   * @param {GAME_COMMAND} gameCommand
   * @returns {boolean}
   */
  checkCommandQuit(gameCommand) {
    if (gameCommand === GAME_COMMAND.QUIT) {
      this.gameEnd();
      return true;
    }

    return false;
  },

  /**
   * 게임 종료시 결과를 출력하고 종료한다.
   *
   * @returns {void}
   */
  gameEnd() {
    OutputView.printResult();
    OutputView.close();
  },
};

module.exports = BridgeGameController;
