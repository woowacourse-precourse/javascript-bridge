const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView.js");
const OutputView = require("../src/OutputView.js");
const BridgeMaker = require("../src/BridgeMaker.js");
const BridgeGame = require("../src/BridgeGame.js");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator.js");


class App {
  #attemptCount;
  #bridgeGame;
  #gameSucceeded;

  play() {
    let gameCommand;
    this.setupBridgeGame();
    
    // game start
    while (true) {  // 게임
      this.#attemptCount += 1;
      this.#gameSucceeded = this.playOneRound();  // --> True일 경우 게임 성공/종료, False일 경우 게임 재시작
      if (!this.#gameSucceeded) {
        gameCommand = InputView.readGameCommand();
      }
      if (this.#gameSucceeded || gameCommand == "Q") {
        break;
      }
      this.#bridgeGame.retry()
      // break;
    }
    console.log("최종 출력 전");
    OutputView.printResult(this.#bridgeGame, this.#attemptCount);
  }

  setupBridgeGame() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');  // OutputView.printIntro
    let bridgeSize = InputView.readBridgeSize();
    let bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.#bridgeGame = new BridgeGame(bridge);
    this.#attemptCount = 0;
  }

  playOneRound() {
    let moving;
    let ret;
    let bridgeGameResult;
    let upperMap;
    let lowerMap;
    let roundOnGoing = true;
    while (roundOnGoing) {
      // 1. 입력 받고 이동
      // inputview로 U 또는 D 받아오기
      moving = InputView.readMoving();
      
      // bridgeGame.move()로 성공/실패 여부를 True/False + upper/lowerMap 받아오기
      const [bridgeGameResult, upperMap, lowerMap] = this.#bridgeGame.move(moving);
      // upperMap이랑 lowerMap 받아서 그대로 OutputView.printMap()하기
      OutputView.printMap(upperMap, lowerMap);

      console.log("중간 확인");
      console.log(bridgeGameResult);
      console.log(this.#bridgeGame.checkTargetReached());
      // 2. 결과 확인
      if (!bridgeGameResult || this.#bridgeGame.checkTargetReached()) {  // 게임이 망했거나, 다리 끝까지 ????도달했을 경우
        roundOnGoing = false;
      }
    }
    return this.#bridgeGame.checkTargetReached();
  }
}

module.exports = App;
