const Game = require("./Model/Game");

class App {
  constructor() {
    this.game = new Game();
  }
  play() {
    this.createGame();
    this.processingGame();
  }

  createGame() {
    this.game.gameStartPoint();
  }

  processingGame() {
    const recentPlayCount = this.game.getPlayCount();

    for (
      let playCounter = 0;
      playCounter < recentPlayCount + 1;
      playCounter++
    ) {
      this.game.increasePlayCount();
      if(게임실행 및 결과 알려주기){ 
        // 게임이 완전히 종료됩니다 --> 게임 종료 여부 안 물어봄
        break;
      }
    }
  }
}

module.exports = App;
