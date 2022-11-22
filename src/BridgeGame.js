const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeNumber = require('./BridgeRandomNumberGenerator');
const BridgeRecorder = require('./BridgeRecorder');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #turn = 0;
  #try = 1;
  #isPlay = true;
  #isEnd = false;
  #bridge;
  #bridgeRecord;

  constructor() {
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
    InputView.readBridgeSize('다리의 길이를 입력해주세요.\n', bridgeLength);
  }

  enterMoving() {
    const moving = (input) => {
      this.move(input);
      if (this.#isEnd) this.clearGame();
      if (!this.#isEnd && this.#isPlay) this.enterMoving();
      if (!this.#isEnd && !this.#isPlay) this.enterRegame();
    };
    InputView.readMoving('이동할 칸을 선택해주세요.\n', moving);
  }

  enterRegame() {
    const regame = (input) => {
      if (input === 'R') this.retry();
      if (input === 'Q') this.giveupGame();
    };
    InputView.readMoving('게임을 다시 시도할지 여부를 입력해주세요.\n', regame);
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
    const GO = 'O';
    const STOP = 'X';
    if (input === crossable) this.isFirst(GO, input);
    if (input !== crossable) {
      this.#isPlay = false;
      this.isFirst(STOP, input);
    }
    if (input === crossable && this.#turn === this.#bridge.length) {
      this.#isEnd = true;
    }
  }

  isFirst(state, input) {
    if (this.#turn === 1) this.firstBlock(state, input);
    if (this.#turn !== 1) this.afterFirstBlock(state, input);
  }

  firstBlock(state, input) {
    if (input === 'U') {
      OutputView.printMap(this.#bridgeRecord.addFirstUpBlock(state));
    }
    if (input === 'D') {
      OutputView.printMap(this.#bridgeRecord.addFirstDownBlock(state));
    }
  }

  afterFirstBlock(state, input) {
    if (input === 'U') {
      OutputView.printMap(this.#bridgeRecord.addUpBlock(state));
    }
    if (input === 'D') {
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
    this.#turn = 0;
    this.#bridgeRecord.init();
  }

  clearGame() {
    const SUCCESS = '성공';
    InputView.closeRead();
    const records = this.#bridgeRecord.getResult();
    OutputView.printResult(SUCCESS, this.#try, records);
  }

  giveupGame() {
    const FAIL = '실패';
    InputView.closeRead();
    const records = this.#bridgeRecord.getResult();
    OutputView.printResult(FAIL, this.#try, records);
  }
}

module.exports = BridgeGame;
