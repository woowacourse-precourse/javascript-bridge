// const test123 = require('../src/BridgeRandomNumberGenerator');
// const test223 = require('../src/BridgeMaker');
// let num = test123.generate();
// console.log(num); // 이렇게 사용시 0 또는 1 출력
// console.log(test223.number);
const outputFunction = require('../src/OutputView');
const inputFunction = require('../src/InputView');
const BridgeGame = require('../src/BridgeGame');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.data;
  }
  play() {
    outputFunction.printStart();
    const bridgeGame = new BridgeGame();
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
      let bridge = inputFunction.readBridgeSize(answer); // 다리 만들어서 보줘
      bridgeGame.bridgeMake(bridge);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
