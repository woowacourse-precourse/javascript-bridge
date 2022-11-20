const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
class App {
  async play() {
    OutputView.printStart();
    const SIZE = await InputView.readBridgeSize();
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const RESULT = BridgeMaker.makeBridge(SIZE, generateRandomNumber);
    console.log(RESULT);
    const GAME = new BridgeGame(RESULT);
    this.repeatMove(SIZE, GAME);
  }

  //모두 이동하거나, 실패하기 전까지 반복.
  async repeatMove(size, GAME) {
    let CNT = 0;
    while (CNT < size) {
      const MOVE = await InputView.readMoving();
      const RESULT = GAME.move(CNT, MOVE);
      OutputView.printResult();
      CNT += 1;
      if (RESULT === 'X') this.selectRestart();
    }
  }

  //실패하면 Restart여부 선택
  async selectRestart() {
    const RESTART_OR_END = await InputView.readGameCommand();
  }
}

module.exports = App;
const app = new App();
app.play();
