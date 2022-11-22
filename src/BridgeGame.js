const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeNumber = require('./BridgeRandomNumberGenerator');
const BridgeRecorder = require('./BridgeRecorder');
const { UTIL, INPUT } = require('./constant/constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #turn;
  #try;
  #isPlay;
  #isEnd;
  #bridge;
  #bridgeRecord;

  constructor() {
    this.#turn = UTIL.INIT;
    this.#try = UTIL.FIRST;
    this.#isPlay = true;
    this.#isEnd = false;
    this.#bridgeRecord = new BridgeRecorder([], []);
  }

  startGame() {
    OutputView.start();
    this.enterBridgeLength();
  }

  enterBridgeLength() {
    const bridgeLength = (input) => {
      OutputView.enter();
      this.#bridge = BridgeMaker.makeBridge(input, BridgeNumber.generate);
      this.enterMoving();
    };
    InputView.readBridgeSize(INPUT.BRIDGE_SIZE, bridgeLength);
  }

  enterMoving() {
    const moving = (input) => {
      this.move(input);
      if (this.#isEnd) this.clearGame();
      if (!this.#isEnd && this.#isPlay) this.enterMoving();
      if (!this.#isEnd && !this.#isPlay) this.enterRegame();
    };
    InputView.readMoving(INPUT.CHOOSE_BLOCK, moving);
  }

  enterRegame() {
    const regame = (input) => {
      if (input === UTIL.RETRY) this.retry();
      if (input === UTIL.QUIT) this.giveupGame();
    };
    InputView.readMoving(INPUT.RESTART, regame);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    const crossable = this.#bridge[this.#turn];
    this.#turn += 1;
    this.isMove(input, crossable);
  }

  isMove(input, crossable) {
    if (input === crossable) this.isFirst(UTIL.GO, input);
    if (input !== crossable) {
      this.#isPlay = false;
      this.isFirst(UTIL.STOP, input);
    }
    if (input === crossable && this.#turn === this.#bridge.length) {
      this.#isEnd = true;
    }
  }

  isFirst(state, input) {
    if (this.#turn === UTIL.FIRST) this.firstBlock(state, input);
    if (this.#turn !== UTIL.FIRST) this.afterFirstBlock(state, input);
  }

  firstBlock(state, input) {
    if (input === UTIL.UP) {
      OutputView.printMap(this.#bridgeRecord.addFirstUpBlock(state));
    }
    if (input === UTIL.DOWN) {
      OutputView.printMap(this.#bridgeRecord.addFirstDownBlock(state));
    }
  }

  afterFirstBlock(state, input) {
    if (input === UTIL.UP) {
      OutputView.printMap(this.#bridgeRecord.addUpBlock(state));
    }
    if (input === UTIL.DOWN) {
      OutputView.printMap(this.#bridgeRecord.addDownBlock(state));
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#isPlay = true;
    this.#try += 1;
    this.init();
    this.enterMoving();
  }

  init() {
    this.#turn = UTIL.INIT;
    this.#bridgeRecord.init();
  }

  clearGame() {
    InputView.closeRead();
    const records = this.#bridgeRecord.getResult();
    OutputView.printResult(UTIL.SUCCESS, this.#try, records);
  }

  giveupGame() {
    InputView.closeRead();
    const records = this.#bridgeRecord.getResult();
    OutputView.printResult(UTIL.FAIL, this.#try, records);
  }
}

module.exports = BridgeGame;
