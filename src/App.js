const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #bridge;
  #bridgeGame;

  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
    this.bridgeMaker = BridgeMaker;
  }

  get bridgeGame() {
    return this.#bridgeGame;
  }

  play() {
    this.outputView.print("다리 건너기 게임을 시작합니다.");
    this.inputView.readBridgeSize(
      this.playCallback.bind(this),
      "다리의 길이를 입력해주세요. "
    );
  }

  playCallback(bridgeSize) {
    this.#bridge = this.bridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgeGame = new BridgeGame(this.#bridge);
    this.upDown();
  }

  upDown() {
    this.inputView.readMoving(
      this.upDownCallback.bind(this),
      "이동할 칸을 선택해주세요. (위: U, 아래: D) "
    );
  }

module.exports = App;
