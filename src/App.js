const MissionUtils = require("@woowacourse/mission-utils");
const { readBridgeSize, readMoving, readGameCommand } = require("./InputView");
const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

const Consolee = MissionUtils.Console;

class App {
  constructor(){
    this.size = 0;
    this.bridges = [];
  }
  play() {
    Consolee.print("다리 건너기 게임을 시작합니다.");
    this.settingGame();
  }
  startGame(){
    this.size = readBridgeSize();
    this.bridges = makeBridge(this.size, generate());
  }
  
}

module.exports = App;
