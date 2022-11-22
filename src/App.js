const MissionUtils = require("@woowacourse/mission-utils");
const { readBridgeSize, readMoving, readGameCommand } = require("./InputView");
const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require('./BridgeMaker.js');
const { printMap, printResult } = require('./OutputView');
const BridgeGame = require('./BridgeGame');

const Consolee = MissionUtils.Console;

class App {
  constructor(){
    this.size = 0;
    this.bridges = [];
    this.userBridges = [];
    this.state = true;
    this.count = 1;
  }
  play() {
    Consolee.print("다리 건너기 게임을 시작합니다.");
    this.settingGame();
  }
  settingGame(){
    this.size = readBridgeSize();
    this.bridges = makeBridge(this.size, generate);
    this.startGame();
  }
  startGame(){ 
    let i = 0;
    const bridgeGame = new BridgeGame(this.bridges);
    while(this.size > i){
      this.userBridges.push(readMoving());
      this.state = bridgeGame.move(i,this.userBridges[i]);
      i += 1;
    }
  }
}

module.exports = App;
