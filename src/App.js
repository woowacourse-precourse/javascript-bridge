const InputView = require("./InputView");
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker.js');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const MissionUtil = require("@woowacourse/mission-utils");
class App {
  constructor(){
    this.size = 0;
    this.count = 0;
    this.bridges = [];
    this.InputBridges = [];
  }
  play() {
    this.size = InputView.readBridgeSize();
    this.bridges = BridgeMaker.makeBridge(this.size, BridgeRandomNumberGenerator.generate);
    MissionUtil.Console.print("다리 건너기 게임을 시작합니다.");
    this.KeepGoing();
  }
  KeepGoing(){ 
    this.InputBridges = [];
    this.count++;
    const bridgeGame = new BridgeGame(this.bridges);
    for(var i = 0; i<this.size;i++){
      this.InputBridges.push(InputView.readMoving());
      this.result = bridgeGame.move(i,this.InputBridges[i]);
      OutputView.printMap(bridgeGame.resultBridge);
      if(this.result == false) 
          break;
    }
    this.print(bridgeGame.resultBridge);
  } 
  restart(resultBridge){
    let command = InputView.readGameCommand();
    if(command === "R"){
      this.KeepGoing();
    }
    else if(command ==="Q")
        OutputView.printResult(resultBridge, this.count, this.state);
  }
  print(resultBridge){
    if(this.result == false) 
      this.restart(resultBridge);
    OutputView.printResult(resultBridge, this.count, this.result);
  }
}

module.exports = App;
