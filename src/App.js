const BridgeGame = require("./Controller/BridgeGame.js");
const BridgeGameService = require("./Service/BridgeGameService.js");
const BridgeGameModel = require("./Model/BridgeGameModel.js");
const InputView = require("./View/InputView.js");
const OutputView = require("./View/OutputView.js");

class App {
  #bridgeGameService;
  #bridgeGameController;
  constructor() {
    this.#bridgeGameService = new BridgeGameService(
      InputView,
      OutputView,
      new BridgeGameModel()
    );

    this.#bridgeGameController = new BridgeGame(this.#bridgeGameService);
  }

  play() {
    this.#bridgeGameController.start();
  }
}

module.exports = App;

// ? 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
// ? 함수(또는 메서드)가 한 가지 일만 잘하도록 구현한다.
// ? 메서드의 파라미터 개수는 최대 3개까지만 허용한다.
// ? 아래 있는 InputView, OutputView, BridgeGame, BridgeMaker 클래스(또는 객체)의 요구사항을 참고하여 구현한다.
// ? 각 클래스(또는 객체)의 제약 사항은 아래 클래스별 세부 설명을 참고한다.
// ? 이외 필요한 클래스(또는 객체)와 메서드는 자유롭게 구현할 수 있다.
// ? InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
// ? `BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다`.
