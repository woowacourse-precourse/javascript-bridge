const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE } = require("./Constant");


class App {
  play() { 
    this.printStart();
  }


  /** 1. 게임시작 안내 문구 출력 */
  printStart() {
    Console.print(GUIDE_MESSAGE.START);
  }

}

const app = new App();
app.play();

module.exports = App;
