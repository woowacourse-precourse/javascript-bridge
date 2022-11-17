const OutputView = require("./OutputView");

// 게임을 진행시키는 컨트롤러
class GameController {
  play() {
    // 게임 최초 시작
    OutputView.printGameStart();
  }
}

module.exports = GameController;
