const MissionUtils = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { readBridgeSize, readMoving } = require("./InputView");
const Consolee = MissionUtils.Console;

class App {
  constructor(){
    this.size = 0;
    this.randomBridge = [];
    this.bridge = [];
    this.userMove = '';
  }
  play() {
    Consolee.print("다리 건너기 게임을 시작합니다.");
    this.settingGame();
  }
  settingGame(){
    this.size = readBridgeSize();
    for(let i = 0; i < size; i++){
      this.randomBridge[i] = generate();
    }
    this.bridge = makeBridge(this.size, this.randomBridge);
    this.startGame();
  }
  startGame(){
    this.userMove = readMoving();
    
  }
}

module.exports = App;
