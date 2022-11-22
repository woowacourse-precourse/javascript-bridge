const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeMaker = require('../BridgeMaker');
const BridgeNumber = require('../BridgeRandomNumberGenerator');
const Validation = require('../utils/Validation');
const BridgeRecorder = require('../model/BridgeRecorder');
const { UTIL, INPUT } = require('../utils/constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #turn;
  #tries;
  #isPlay;
  #isSuccess;
  #answers;
  #bridgeRecords;

  constructor() {
    this.#turn = UTIL.INIT;
    this.#tries = UTIL.FIRST;
    this.#isPlay = true;
    this.#isSuccess = false;
    this.#bridgeRecords = new BridgeRecorder([], []);
  }

  startGame() {
    OutputView.startMent();
    this.#inputBridgeLength();
  }

  /**
   * 다리 사이즈 입력에 대한 콜백 함수
   */
  #inputBridgeLength() {
    const bridgeLength = (size) => {
      OutputView.newLine();
      const input = Number(size);
      this.#answers = BridgeMaker.makeBridge(input, BridgeNumber.generate);
      const validation = this.#bridgeLengthValidation(input);
      if (validation) this.#inputMoving();
      if (!validation) this.#inputBridgeLength();
    };
    InputView.readBridgeSize(INPUT.BRIDGE_SIZE, bridgeLength);
  }

  /**
   * 다리 사이즈에 대한 사용자 입력 값 예외 검증 메서드
   * @param {string} input 사용자가 입력한 다리 사이즈
   * @returns 예외 발생 시 false, 예외 미발생 시 true
   */
  #bridgeLengthValidation(input) {
    try {
      Validation.validateSize(input);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    }
  }

  /**
   * 이동할 칸 입력에 대한 콜백 함수
   */
  #inputMoving() {
    const moving = (input) => {
      const validation = this.#movingValidation(input);
      if (!validation) this.#inputMoving();
      if (validation) this.#move(input);
      if (this.#isSuccess) this.#isSuccessGame(this.#isSuccess);
      if (!this.#isSuccess && this.#isPlay) this.#inputMoving();
      if (!this.#isSuccess && !this.#isPlay) this.#inputReGame();
    };
    InputView.readMoving(INPUT.CHOOSE_BLOCK, moving);
  }

  /**
   * 이동할 칸에 대한 사용자 입력 값 예외 검증 메서드
   * @param {string} input 사용자가 입력한 이동할 칸
   * @returns 예외 발생 시 false, 예외 미발생 시 true
   */
  #movingValidation(input) {
    try {
      Validation.validateMove(input);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    }
  }

  /**
   * 게임 재시도 및 종료 입력에 대한 콜백 함수
   */
  #inputReGame() {
    const reGame = (input) => {
      const validation = this.#reGameValidation(input);
      if (!validation) this.#inputReGame();
      if (input === UTIL.RETRY) this.#retry();
      if (input === UTIL.QUIT) this.#isSuccessGame(this.#isSuccess);
    };
    InputView.readMoving(INPUT.RESTART, reGame);
  }

  /**
   * 게임 재시도 및 종료에 대한 사용자 입력 값 예외 검증 메서드
   * @param {string} input 사용자가 입력한 재시도 및 종료 값
   * @returns 예외 발생 시 false, 예외 미발생 시 true
   */
  #reGameValidation(input) {
    try {
      Validation.validateReGame(input);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    }
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} input 사용자가 입력한 이동할 칸
   */
  #move(input) {
    const crossable = this.#answers[this.#turn];
    this.#turn += 1;
    this.#isCorrect(input, crossable);
  }

  /**
   * 사용자가 입력한 칸이 건널 수 있는 칸인지 판별하는 메서드
   * @param {string} input 사용자가 입력한 이동할 칸
   * @param {string} crossable 건널 수 있는 칸
   */
  #isCorrect(input, crossable) {
    if (input === crossable) this.#isFirst(UTIL.GO, input);
    if (input !== crossable) {
      this.#isPlay = false;
      this.#isFirst(UTIL.STOP, input);
    }
    if (input === crossable && this.#turn === this.#answers.length) {
      this.#isSuccess = true;
    }
  }

  /**
   * 사용자가 입력한 칸이 첫 칸인지 그 이후의 칸인지 판별하는 메서드
   * @param {string} state 사용자가 이동한 칸과 정답을 비교한 결과
   * @param {string} input 사용자가 이동한 칸
   */
  #isFirst(state, input) {
    if (this.#turn === UTIL.FIRST) this.#firstBlock(state, input);
    if (this.#turn !== UTIL.FIRST) this.#afterFirstBlock(state, input);
  }

  /**
   * 사용자가 입력한 칸이 첫 칸인 경우 실행되는 메서드
   * @param {string} state 사용자가 이동한 칸과 정답을 비교한 결과
   * @param {string} input 사용자가 이동한 칸
   */
  #firstBlock(state, input) {
    if (input === UTIL.UP) {
      const bridgeRecords = this.#bridgeRecords.addFirstUpBlock(state);
      OutputView.printMap(bridgeRecords);
    }
    if (input === UTIL.DOWN) {
      const bridgeRecords = this.#bridgeRecords.addFirstDownBlock(state);
      OutputView.printMap(bridgeRecords);
    }
  }

  /**
   * 사용자가 입력한 칸이 첫 칸 이후인 경우 실행되는 메서드
   * @param {string} state 사용자가 이동한 칸과 정답을 비교한 결과
   * @param {string} input 사용자가 이동한 칸
   */
  #afterFirstBlock(state, input) {
    if (input === UTIL.UP) {
      const bridgeRecords = this.#bridgeRecords.addUpBlock(state);
      OutputView.printMap(bridgeRecords);
    }
    if (input === UTIL.DOWN) {
      const bridgeRecords = this.#bridgeRecords.addDownBlock(state);
      OutputView.printMap(bridgeRecords);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  #retry() {
    this.#turn = UTIL.INIT;
    this.#tries += 1;
    this.#isPlay = true;
    this.#bridgeRecords.init();
    this.#inputMoving();
  }

  /**
   * 사용자가 게임을 종료할 때 성공여부와, 총 시도횟수, 다리기록을 알려주는 메서드
   */
  #isSuccessGame(isSuccess) {
    InputView.closeRead();
    const records = this.#bridgeRecords.getResult();
    if (isSuccess) OutputView.printResult(UTIL.SUCCESS, this.#tries, records);
    if (!isSuccess) OutputView.printResult(UTIL.FAIL, this.#tries, records);
  }
}

module.exports = BridgeGame;
