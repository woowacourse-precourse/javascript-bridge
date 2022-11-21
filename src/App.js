const output = require('./OutputView');
const input = require('./InputView');
const Const = require('./constant/message');
const maker = require('./BridgeMaker');
const generate = require('./BridgeRandomNumberGenerator');
const Game = require('./BridgeGame');

class App {
  #bridge;

  constructor() {
    this.#bridge = [];
  }

  play() {
    this.#bridge = maker.makeBridge(this.#inputBridgeLength(),generate.generate);
    const game = new Game(this.#bridge);

  }

  /**
   * 다리 길이 입력 받는 함수
   * 실제로 library를 이용해서 입력받는 함수는 InputView에 따로 존재하나, try{}catch(e){} error 처리 후
   * @returns {number}
   */
  #inputBridgeLength(){
    try{
      return input.readBridgeSize();
    }
    catch(e){
      output.printMessage(e);
      this.#inputBridgeLength();
    }
  }
}

module.exports = App;
