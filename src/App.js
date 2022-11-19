const Game = require("./Model/Game");
const OutputView = require("./GameIO/OutputView");
const InputView = require("./GameIO/InputView");

class App {
  constructor() {
    this.game = new Game();
  }
  play() {
    OutputView.printBeginAnnouncement();
    this.processingGame();
  }

  processingGame() {
    const recentPlayCount = this.game.getPlayCount();

    for (
      let playCounter = 0;
      playCounter < recentPlayCount + 1;
      playCounter++
    ) {
      this.game.increasePlayCount();
      // if(game에속하는 메서드: 게임실행 및 결과 알려주기 - 게임 결과 출력 포함){
      //   break;// 게임이 완전히 종료됩니다 --> 게임 종료 여부 안 물어봄
      // }
    }
  }
}

module.exports = App;
