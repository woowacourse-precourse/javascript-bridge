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
      printMap(bridgeGame.setBridge);
      if(this.state == false) break;
      i += 1;
    }
    this.output(bridgeGame.setBridge);
  }
  output(setBridge){
    if(this.state == false) this.reset(setBridge); //재시도 여부 시작
    //OutputView - > printResult();
    printResult(setBridge, this.count, this.state);
  }
  reset(setBridge){
    let choice = readGameCommand();
    switch(true){
      case choice == "R":
        this.restart();
        break;
      case choice == "Q":
        printResult(setBridge, this.count, this.state);
        break;
    }
  }
  restart(){
    const bridgeGame = new BridgeGame(this.bridges);
    bridgeGame.retry();
    this.userBridges = [];
    this.state = true;
    this.count += 1;
    this.startGame();
  }

}

module.exports = App;
