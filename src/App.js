const Game = require("./Model/Game");
const OutputView = require("./GameIO/OutputView");
const InputView = require("./GameIO/InputView");

class App {
  #bridgeLength;
  #playCount;
  constructor() {
    this.#bridgeLength = InputView.readBridgeSize();
    this.game = new Game(this.#bridgeLength);
    this.#playCount = 1;
  }

  play() {
    OutputView.printBeginAnnouncement();
    this.processingGame();
  }

  processingGame() {
    let playCounter = 0;
    for (playCounter = 0; playCounter < this.#playCount; playCounter++) {
      this.game.increasePlayCount();
      const PLAY_RESULT = this.game.playAlgorithms(); //여기서 물어보는 작업까지 끝내야함

      if (PLAY_RESULT) {
        // 게임 실패했거나 말거나 간에 게임을 계속 이어감
        this.game.increasePlayCount();
      }
      if (!PLAY_RESULT) {
        break;
      }
      // if(game에속하는 메서드: 게임실행 및 결과 알려주기 - 게임 결과 출력 포함){
      //   break;// 게임이 완전히 종료됩니다 --> 게임 종료 여부 안 물어봄
      // }
    }
  }
}

module.exports = App;
