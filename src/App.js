const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];


class App {

  #bridgeSize;

  constructor(){
    this.#bridgeSize =0;
  }
  
  async play() {
    InputView.gameStart();
    this.#bridgeSize = await InputView.readBridgeSize();

    await Console.print(this.#bridgeSize);
    Console.close();
  }

}

const app = new App();
app.play();

module.exports = App;
