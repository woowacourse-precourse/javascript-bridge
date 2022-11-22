const BridgeGame = require('../Model/BridgeGame');
const { readBridgeSize, readMoving, readGameCommand, exit } = require('../View/InputView');
const { printMap, printResult } = require('../View/OutputView');
const { isPlayerPassed, isPlayerCleared } = require('../CheckPlayerStatus');
const { INPUT_RETRY } = require('../Constants/InputValues');

/**
 * BridgeGame(모델) 과 InputView, OutputView(뷰)를 조작하는 컨트롤러
 */
class BridgeController {
  #Game;

  constructor() {
    this.#Game = new BridgeGame();
  }

  /**
   * 뷰에 생성될 다리의 길이 입력을 요청하는 메서드
   */
  requestBridgeSizeToView = () => {
    readBridgeSize(this.verifyBridgeSize);
  };

  /**
   * 입력받은 다리의 유효성 검사여부에 따라 다시 입력을 요청하거나 다음단계로 진행시키는 메서드
   */
  verifyBridgeSize = (size, isError) => {
    if (isError) this.requestBridgeSizeToView();
    if (!isError) this.sendBridgeSizeRequestToModel(size);
  };

  /**
   * 모델에 입력받은 다리의 길이를 전달하는 메서드
   */
  sendBridgeSizeRequestToModel = (size) => {
    this.#Game.initializeBridge(size);
    this.requestMoveToView();
  };

  /**
   * 뷰에 이동 입력을 요청하는 메서드
   */
  requestMoveToView = () => {
    readMoving(this.verifyMove);
  };

  /**
   * 입력받은 이동의 유효성 검사여부에 따라 다시 입력을 요청하거나 다음단계로 진행시키는 메서드
   */
  verifyMove = (move, isError) => {
    if (isError) this.requestMoveToView();
    if (!isError) this.sendMoveRequestToModel(move);
  };

  /**
   * 모델에 입력받은 이동 입력을 전달하는 메서드
   */
  sendMoveRequestToModel = (move) => {
    this.#Game.move(move);
    this.sendOutputRequestToModel();
  };

  /**
   * 생성된 게임 정보와 입력을 비교하여 모델에 값 변경을 요청하는 메서드
   */
  sendOutputRequestToModel = () => {
    const { bridge } = this.#Game.getStatus();
    const input = this.#Game.getStatus().Input;
    const isPassed = isPlayerPassed(input[input.length - 1], bridge[input.length - 1]);
    const isCleared = isPlayerCleared(bridge.length, input.length, isPassed);
    this.#Game.setMoveOutput(isPassed, isCleared);
    this.sendOutputRequestToView();
  };

  /**
   * 변경된 모델 값을 바탕으로 뷰에 현재 상황 출력을 요청하는 메서드
   */
  sendOutputRequestToView = () => {
    const { output } = this.#Game.getStatus();
    printMap(output);
    this.checkMoveOption();
  };

  /**
   * 게임 진행을 관리하는 메서드
   */
  checkMoveOption = () => {
    const { isPassed, isCleared } = this.#Game.getStatus();
    if (isPassed) this.requestMoveToView();
    if (!isPassed) this.requestCommandToView();
    if (isCleared) this.finishControl();
  };

  /**
   * 뷰에 종료, 재시작 여부를 묻는 입력을 요청하는 메서드
   */
  requestCommandToView = () => {
    readGameCommand(this.checkGameOption);
  };

  /**
   * 입력받은 종료,재시작여부의 유효성 검사여부에 따라 다시 입력을 요청하거나 다음단계로 진행시키는 메서드
   */
  verifyCommand = (command, isError) => {
    if (isError) this.requestCommandToView();
    if (!isError) this.checkGameOption(command);
  };

  /**
   * 입력받은 값을 바탕으로 게임을 종료, 재시작시키는 메서드
   */
  checkGameOption = (command) => {
    if (command === INPUT_RETRY.restart) {
      this.#Game.retry();
      this.requestMoveToView();
    }
    if (command === INPUT_RETRY.quit) this.finishControl();
  };

  /**
   * 뷰에 최종 결과 출력을 요청하는 메서드
   */
  finishControl = () => {
    const { count, isCleared, output } = this.#Game.getStatus();
    printResult(count, isCleared, output);
    exit();
  };
}

module.exports = BridgeController;
