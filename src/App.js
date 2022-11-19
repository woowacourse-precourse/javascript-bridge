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
    this.bridgeGame = new BridgeGame();
  }
  play() {
    outputFunction.printStart();
    inputFunction.readBridgeSize();

    // MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
    //   let bridge = inputFunction.readBridgeSize(answer); // 다리 만들어서 보줘
    //   this.bridgeGame.bridgeMake(bridge);
    //   this.step1();
    // });
  }

  // step1() {
  //   // 이동할 칸을 선택해주세요. (위: U, 아래: D)
  //   //사용자한테 u,d 받고
  //   //그에 맞게 값 출력하기
  //   MissionUtils.Console.readLine(
  //     '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  //     (answer) => {
  //       //let move = inputFunction.readMoving(answer);
  //       const result = this.bridgeGame.move(answer);
  //       console.log(result);
  //       outputFunction.printMap(
  //         this.bridgeGame.bridegeDown,
  //         this.bridgeGame.bridegeUp
  //       );
  //       if (!result) {
  //         console.log('실패, 다시할래?');
  //         return;
  //       }
  //       this.step1();
  //       //결과나오면 무조건 출력하고 성공시 스텝원 다시 반복 실패시 리트할꺼?
  //     }
  //   );
  // }
  // 투스텝() {}
}

const app = new App();
app.play();

module.exports = App;
