const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Bridge = require('./model/Bridge');
const BridgeGame = require('./controller/BridgeGame');
const { GAME_COMMAND } = require('./constants/game.constants');

class App {
  // bridge: 생성된 다리를 저장하는 객체
  bridge;
  // 다리 건너기 게임을 관리하는 객체
  bridgeGame;
  // 플레이어가 이동한 다리 현황을 저장할 2차원 배열
  currentMap;

  constructor() {
    this.bridge = new Bridge();
    this.bridgeGame = new BridgeGame(this.bridge, this.userBridge);
    this.currentMap = [];
  }

  // 게임의 시작 지점이다.
  play() {
    OutputView.printStart();
    this.startGame();
  }

  // 게임을 시작하며 다음 단계를 호출하는 메서드
  startGame() {
    this.buildBridge();
  }

  // 다리 생성을 위해 플레이어로부터 다리의 길이를 입력 받는 메서드
  buildBridge() {
    InputView.readBridgeSize((bridgeSize) => {
      this.bridgeGame.buildBridge(bridgeSize);
      this.moveOnBridge();
    });
  }

  // 플레이어로부터 이동할 경로를 입력 받는 메서드
  moveOnBridge() {
    InputView.readMoving((movement) => {
      this.bridgeGame.move(movement);
      this.comparisonOperator();
    });
  }

  // 현재 플레이어의 이동 경로를 정해진 형식에 맞추는 메서드
  comparisonOperator() {
    this.currentMap = this.bridgeGame.comparisonOperator();
    this.showMap();
  }

  // 현재 플레이어의 이동 경로를 출력하는 메서드
  showMap() {
    OutputView.printMap(this.currentMap);
    this.checkGameSet();
  }

  /**
   * 플레이어의 이번 이동 경로에 따른 게임 성공 여부 판단하는 메서드
   * 성공했다면 게임을 종료하고, 실패했다면 재시작 여부를 물어본다.
   */
  checkGameSet() {
    const gameSet = this.bridgeGame.checkGameSet(this.currentMap);
    if (this.bridgeGame.failOrSuccess) {
      this.quitGame();
    } else if (gameSet) {
      this.askRetry();
    } else this.moveOnBridge();
  }

  // 게임 재시작 여부를 입력 받는 메서드
  askRetry() {
    InputView.readGameCommand((restartOrQuit) => {
      if (restartOrQuit === GAME_COMMAND.RESTART) {
        this.restartGame();
      } else if (restartOrQuit === GAME_COMMAND.QUIT) {
        this.quitGame();
      }
    });
  }

  // 게임을 재시작 처리하는 메서드
  restartGame() {
    this.bridgeGame.retry();
    this.moveOnBridge();
  }

  // 게임을 종료 처리하는 메서드
  quitGame() {
    const gameResult = this.bridgeGame.getGameResult();
    OutputView.printResult(this.currentMap, gameResult, this.bridgeGame.gameCount);
  }
}

module.exports = App;
