// const test123 = require('../src/BridgeRandomNumberGenerator');
// const test223 = require('../src/BridgeMaker');
// let num = test123.generate();
// console.log(num); // 이렇게 사용시 0 또는 1 출력
// console.log(test223.number);
const outputFunction = require('../src/OutputView');
const inputFunction = require('../src/InputView');

class App {
  play() {
    //게임 시작했다는 문구 보내고
    //다리의 길이를 입력해주세요 문구 보내고
    //사용자가 숫자 3 ~20 숫자 입력
    outputFunction.printStart();
    inputFunction.readBridgeSize();
    //사용자한테 숫자 받고 BridgeGame로 숫자 전달하기 new BridgeGame()
  }
}

const app = new App();
app.play();

module.exports = App;
