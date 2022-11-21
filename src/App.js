const InputView = require('./InputView');
const OutputView = require('./OutputView');
// const BridgeMaker = require('./BridgeMaker');
// const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
// const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');

class App {
  async play() {
    OutputView.printStart();
    InputView.readBridgeSize();
    // const SIZE = parseInt(await InputView.readBridgeSize());
    // const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    // const ANSWER = BridgeMaker.makeBridge(SIZE, generateRandomNumber);
    // const GAME = new BridgeGame(ANSWER);
    // this.repeatMove(SIZE, GAME);
  }

  //모두 이동하거나, 실패하기 전까지 반복.
  // async repeatMove(size, GAME) {
  //   let [CNT, RESULT] = [0, []];
  //   while (CNT < size) {
  //     const MOVE = await InputView.readMoving();
  //     RESULT = GAME.move(CNT, MOVE);
  //     OutputView.printMap(RESULT);
  //     if (RESULT[CNT][1] === 'X') this.selectRestart(size, GAME);
  //     CNT += 1;
  //   }
  //   OutputView.printResult(RESULT, GAME.getCnt());
  //   Console.close();
  // }

  //실패하면 Restart여부 선택
  // async selectRestart(size, GAME) {
  //   const RESTART_OR_END = await InputView.readGameCommand();
  //   const [RESULT, CNT] = [GAME.getResult(), GAME.getCnt()];
  //   if (RESTART_OR_END === 'R') {
  //     GAME.retry();
  //     this.repeatMove(size, GAME);
  //   } else {
  //     OutputView.printResult(RESULT, CNT);
  //     Console.close();
  //   }
  // }
}

module.exports = App;
const app = new App();
app.play();
